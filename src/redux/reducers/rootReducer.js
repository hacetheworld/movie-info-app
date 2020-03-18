import { combineReducers } from "redux";
import { setMovieReducer } from './movies';
export default combineReducers({
    movies: setMovieReducer
});
