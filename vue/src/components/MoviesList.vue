<template>
  <div class="movie-container">
      <h1>Movies</h1>
      <li v-for="movie in movies" :key="movie.id"></li>
      <p>AAAA</p>
      </div>
</template>

<script>
import MoviesService from "../services/MoviesService";
export default {
name: "movie-list",
data() {
    return {
        movies: []
    };
},
methods: {
    created() {
        MoviesService.listMovies().then((response) => {
            this.movies = response.data;
        });
    }
}
}
</script>

<style>

</style>