
const API_KEY = '209e42e2c66ab2cba7c280981a877ace';

async function data() {
    let result = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}
    `).then((res) => res.json());
    // await result.then((res) => console.log(res.json()))
}

export default data;