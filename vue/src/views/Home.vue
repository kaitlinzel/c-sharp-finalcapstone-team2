<template>
  <div class="home">
     <div class="grid-container">
        <!-- <movie-card/> -->
        <movies-list class="movie-list"/> 
        </div>
    <div class="carousel">
  </div>
   </div>
</template>

<script>
//import MovieCard from '../components/MovieCard.vue';
import MoviesList from "../components/MoviesList.vue";

export default {
  components: {
    //MovieCard,
    MoviesList,
  },
  name: "home"
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  font-size: 100%;
  font-family: fantasy;
  border: 5px solid white;
}
.movie-list {
  border: 5px solid yellow;
}

</style>
