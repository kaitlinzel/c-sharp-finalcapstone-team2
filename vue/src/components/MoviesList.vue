<template>
  <div class="movie-container">
      <li v-for="movie in movies" :key="movie.id">{{movie.original_title}}
          <img class="poster" v-bind:src="'https://image.tmdb.org/t/p/w185' + movie.poster_path">
          <!-- {{movie.poster_path}} gets literal path -->
        </li>
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
getMovieById(id) {
    this.$router.push(`/document/${id}`)
    console.log(id);
}
},
created() {
    MoviesService.listMovies().then((response) => {
        this.movies = response.data.results;
    });
}
}
</script>

<style>
.movie-container {
     margin: 5px;
}
li {
    list-style: none;
}


</style>