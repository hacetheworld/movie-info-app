import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './movie.styles.scss';
import SingleMovie from '../singleMovie/singleMovie';
import WithSpinner from '../with-spinner/with-spinner';

import { API_KEY } from '../../App';


const CollectionWithSpinner = WithSpinner(SingleMovie);

const ShowErrorComponent = ({ message }) => (
    <div className='movie-not-found' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Your movie does not exist</h1>
        <Link to='/' style={{ fontSize: '2rem' }}>Click here to go back to Home </Link>
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
        //movieId =

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,credits
        `).then(movieRes => movieRes.json()).then(data => {
            if (data.status_code > 0) {
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