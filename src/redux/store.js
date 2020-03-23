import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
// import logger from 'redux-logger';
// const middlewares = [logger];
export default createStore(rootReducer);
