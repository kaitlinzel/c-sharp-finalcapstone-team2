import axios from 'axios';

const apiService = axios.create({});

export default {

  listMovies() {
    return apiService.get('https://api.themoviedb.org/3/discover/movie?api_key=801560b2c5402810ded763d877958808');
  },

  getMovieById(id) {
    return apiService.get(`https://api.themoviedb.org/3/movie/${id}?api_key=801560b2c5402810ded763d877958808`);
  }

}