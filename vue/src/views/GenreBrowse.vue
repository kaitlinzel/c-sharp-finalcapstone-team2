<template>
  <div>
      List of Genres
      <li v-for="genre in genres" :key="genre.id">
      {{ genre.name }}
      </li>
  </div>
</template>

<script>
import MoviesService from "../services/MoviesService";

export default {
    name: "genre-browse",
    data() {
        return {
            genres: []
        }
    },
    created() {    
        MoviesService.getAllGenres().then((response) => {
        this.genres = response.data.genres;
        });
    }

}
</script>

<style>
</style>