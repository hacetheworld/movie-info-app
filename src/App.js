import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Sidebar from './component/sidebar/sidebar.component';
import MovieInfo from './component/movie-info/movie-info.component';
import Main from './component/main/main.component';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Route exact path='/' render={() => <Main />} />
      <Route exact path='/ajay' render={() => <MovieInfo />} />
    </div>
  );
}

export default App;
