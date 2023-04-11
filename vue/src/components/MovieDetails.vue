<template>
    <div>
    <h2>
        {{ movie.title }}
    </h2>    
    <!-- <h2 class="book-author">{{ book.author }}</h2>
    <img v-if="book.isbn" v-bind:src="'http://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'" />
    <p>I have {{ book.read ? '' : "not" }} read this book</p> -->
  </div>
</template>

<script>
import MoviesService from "../services/MoviesService";
export default {
  name: "movies-service",
  data() {
    return {
      movie: {
        id: null,
        name: "",
        title: "",
      }
    };
  },
  created() {
    MoviesService.get(this.$route.params.id).then((response) => {
      this.movie = response.data;
    });
  }
}
</script>

<style>

</style>