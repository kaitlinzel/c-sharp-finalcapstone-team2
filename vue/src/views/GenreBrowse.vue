<template>
  <div></div>
</template>

<script>
import MoviesService from "../services/MoviesService";

export default {
  data() {
    return {
      genres: [],
    };
  },
  methods: {
    getAllGenres() {
      MoviesService.getMovieByGenre(); //change this method to get a list of all genres
    },
  },
};
</script>

<style>
</style>