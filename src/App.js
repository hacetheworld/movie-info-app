import React, { Component } from 'react';
import './App.scss';
//import { Route } from 'react-router-dom';
import Sidebar from './component/sidebar/sidebar.component';
import Main from './component/main/main.component';
import { SetTrendingMovies, SetLatestMovies } from './redux/actions';
import { connect } from 'react-redux';
import withSpinner from './component/with-spinner/with-spinner';
const WithSpinnerMainContainer = withSpinner(Main);

export const API_KEY = '209e42e2c66ab2cba7c280981a877ace';



class App extends Component {
  state = { isLoading: true }
  componentDidMount() {
    const { SetTrendingMovies, SetLatestMovies } = this.props;
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US&page=2
  `).then((res) => res.json()).then(res => SetTrendingMovies(res.results));
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1
`).then((res) => res.json()).then(res => SetLatestMovies(res.results));
    this.setState({ isLoading: false });

  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <WithSpinnerMainContainer isLoading={this.state.isLoading} />
      </div>
    )
  }
}

const mapDispatchToState = (dispatch) => ({
  SetTrendingMovies: (movies) => dispatch(SetTrendingMovies(movies)),
  SetLatestMovies: (movies) => dispatch(SetLatestMovies(movies))
});

export default connect(null, mapDispatchToState)(App);
