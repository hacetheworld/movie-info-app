import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './movie.styles.scss';
import SingleMovie from '../singleMovie/singleMovie';
import WithSpinner from '../with-spinner/with-spinner';


const CollectionWithSpinner = WithSpinner(SingleMovie);

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            isPopup: false,
            isLoading: true
        }
    }
    componentDidMount() {
        this.fetchMovie(this.props.match.params.movieId);
    }
    fetchMovie = async (movieId) => {
        await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=209e42e2c66ab2cba7c280981a877ace&append_to_response=videos,images
    `).then(movieRes => movieRes.json()).then(data => this.setState({ movie: data, isLoading: false }));

    }
    togglePopup = () => {
        this.setState({ isPopup: !this.state.isPopup }, () => console.log(this.state.isPopup)
        );
    }


    render() {

        return (
            <CollectionWithSpinner isLoading={this.state.isLoading} movie={this.state.movie} isPopup={this.state.isPopup} togglePopup={this.togglePopup} />
        )

    }
}


export default withRouter(Movie);