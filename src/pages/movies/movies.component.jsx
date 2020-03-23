import React, { Component } from 'react';
import './movies.styles.scss';
// import { connect } from 'react-redux'
import MovieList from '../../component/movie-list/movie-list.component';
// import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { GENERE_LIST } from '../../generes-list';
import WithSpinner from '../../component/with-spinner/with-spinner';
import { API_KEY } from '../../App';

const WithSpinnerMovieContainer = WithSpinner(MovieList);
class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true,
            genere: GENERE_LIST
        }
    }



    giveGenereId = () => {
        const genereType = this.props.url
        const genereList = this.state.genere;
        for (let i = 0; i < genereList.list.length; i++) {
            if (genereList.list[i].name === genereType) {
                return genereList.list[i];
            }
        }
        return {
            id: 35,
            name: "Comedy"
        }
    }
    componentDidMount() {
        this.fetchMovies();


    }
    fetchMovies = () => {
        let key = this.props.url;
        switch (key) {
            case 'trending':
                fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}
                `).then((res) => res.json()).then(res => this.setState({ movies: res.results, isLoading: false }));
                break;

            default:
                fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${this.giveGenereId().id}`).then((res) => res.json()).then(res => this.setState({ movies: res.results, isLoading: false }));
                break;
        }
    }
    render() {
        // this.fetchMovies();
        const { url } = this.props;
        return (
            <div className='movies'>
                <WithSpinnerMovieContainer
                    isLoading={this.state.isLoading}
                    title={`${url} Movies`}
                    Movies={this.state.movies}

                />
            </div>
        );
    }
}
// const mapStateToProps = (state) => ({
//     trendingMovies: state.movies.trendingMovies
// });

export default withRouter(Movies);
