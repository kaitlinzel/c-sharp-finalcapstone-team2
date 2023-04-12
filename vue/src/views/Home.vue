<template>
  <div class="home">
    <p class="movie-list">These are a few of our movies.</p>
        <!-- <movie-card/> -->
        <movies-list /> 
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
* {
  box-sizing: border-box;
}
p.movie_list {
  display: grid;
}

</style>
