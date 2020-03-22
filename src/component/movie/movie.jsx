import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './movie.styles.scss';
import SingleMovie from '../singleMovie/singleMovie';
import WithSpinner from '../with-spinner/with-spinner';
const CollectionWithSpinner = WithSpinner(SingleMovie);
const ShowErrorComponent = ({ message }) => (
    <div className='movie-not-found'>
        <h1>Your movie does not exist, {message} </h1>
        <Link to='/' >click here to go back </Link>
    </div>
);

const ErroComponentWithSpinner = WithSpinner(ShowErrorComponent);

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            isPopup: false,
            isLoading: true,
            isError: true
        }
    }
    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        //  this._isMounted = true;

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=209e42e2c66ab2cba7c280981a877ace&append_to_response=videos,credits
        `).then(movieRes => movieRes.json()).then(data => {
            if (data.status_code > 0) {
                console.log(data.status_code, 'data.status_code');
                throw new Error('data not found');
            }
            this.setState({ movie: data, isLoading: false, isError: false });

        }).catch(error => {
            this.setState({ isError: true, isLoading: false });
        });

    }

    togglePopup = () => {
        this.setState({ isPopup: !this.state.isPopup });
    }


    render() {
        return (
            this.state.isError ?
                (<ErroComponentWithSpinner message='it ran' isLoading={this.state.isLoading} />)
                : (<CollectionWithSpinner
                    isLoading={this.state.isLoading}
                    movie={this.state.movie}
                    isPopup={this.state.isPopup}
                    togglePopup={this.togglePopup} />)
        )

    }
}





export default withRouter(Movie);