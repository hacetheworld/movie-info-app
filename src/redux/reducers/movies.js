import { actionTypes } from '../action.types';

const INITIAL_STATE = {
    trendingMovies: [],
    latestMovies: [],
    searchMovies: []
}


export const setMovieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TRENDING_MOVIES:
            return {
                ...state,
                trendingMovies: action.payload
            }
        case actionTypes.QUERYMOVIES:
            return {
                ...state,
                searchMovies: action.payload
            }
        case actionTypes.LATEST_MOVIES:
            return {
                ...state,
                latestMovies: action.payload
            }

        default:
            return state;
    }
}