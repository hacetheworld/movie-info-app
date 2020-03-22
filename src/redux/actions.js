import { actionTypes } from './action.types';
export const SetTrendingMovies = (movies) => ({
    type: actionTypes.TRENDING_MOVIES,
    payload: movies
});

export const SetLatestMovies = (movies) => ({
    type: actionTypes.LATEST_MOVIES,
    payload: movies
});

export const SetSearchedMovies = (movies) => ({
    type: actionTypes.QUERYMOVIES,
    payload: movies
});