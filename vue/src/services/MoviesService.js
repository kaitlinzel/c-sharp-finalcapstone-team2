import axios from 'axios';

export default {

  listmovies() {
    return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=801560b2c5402810ded763d877958808');
  }

}