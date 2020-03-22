import React, { Component } from "react";
import { ReactComponent as MagnifyingGlass } from '../../assets/magnifying-glass.svg';
import { SetSearchedMovies } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }


    handleSearchInputChanges = (e) => {

        this.setState({ searchValue: e.target.value });

    }

    resetInputField = () => {
        this.setState({ searchValue: '' });
    }
    searchQuery = searchValue => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=209e42e2c66ab2cba7c280981a877ace&language=en-US&query=${searchValue}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.status_code) {
                    this.props.setMovies([]);
                    //this.setState({ Error: true })
                } else {
                    this.props.setMovies(jsonResponse.results);
                }
            });
    };


    callSearchFunction = (e) => {
        e.preventDefault();
        if (this.state.searchValue !== '') {
            this.searchQuery(this.state.searchValue);
            this.resetInputField();

        } else {
            alert('Please enter a movie name');

        }
    }



    render() {
        return (

            <form className="search" onSubmit={this.callSearchFunction}>
                <input
                    className="search__input"
                    placeholder="Search Movies"
                    value={this.state.searchValue}
                    onChange={this.handleSearchInputChanges}
                    type="text"
                />
                <button type='submit' className="search__button" onClick={() => this.props.history.push('/Search')} >
                    <MagnifyingGlass className="search__icon" />
                </button>
            </form>
        );
    }
}


const mapDispatchToState = (dispatch) => ({
    setMovies: (movies) => dispatch(SetSearchedMovies(movies))
});

export default withRouter(connect(null, mapDispatchToState)(Search));