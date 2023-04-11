<template>
  <div class="movie-container">
      <h1>Movies</h1>
      <li v-for="movie in movies" :key="movie.id">{{movie.original_title}}
          <img v-bind:src="'https://image.tmdb.org/t/p/w185' + movie.poster_path">
          <!-- {{movie.poster_path}} gets literal path -->
        </li>
      <p>AAAA</p>
      </div>
</template>

<script>
import MoviesService from "../services/MoviesService";
export default {
name: "movies-list",
data() {
    return {
        movies: []
    };
},
methods: {

},
created() {
    MoviesService.listMovies().then((response) => {
        this.movies = response.data.results;
    });
}
}
</script>

<style>

</style>