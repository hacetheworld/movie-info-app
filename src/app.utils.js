
const API_KEY = '209e42e2c66ab2cba7c280981a877ace';

async function data() {
    let movieData = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.movieId}?api_key=209e42e2c66ab2cba7c280981a877ace&language=en-US
   `).then(movieRes => movieRes.json());

}

export default data;