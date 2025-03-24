import { Header } from "react-native/Libraries/NewAppScreen";

export const TBDB_CONFIG ={
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    header:{
        accept:"application/json",
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }

}



// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTM4MzUyNDNhMTE1MGZmNjRlZGM1MDNiMjk0ZDYyNCIsIm5iZiI6MTc0Mjc3MjYxMS45NDgsInN1YiI6IjY3ZTA5OTgzMjEwZmE4MGEwZjRkYjUyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WGDDht3mfR2nDnEINDmAaVnmyo29FgsgGaluw44o2DI'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));