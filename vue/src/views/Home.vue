<template>
  <div class="home">
    <h1>Home</h1>
    <p>You must be authenticated to see this</p>
    <h2>Welcome!</h2>
    <p>Please register to use this website. Once registered, you can view information about your
      favorite movies, such as: genre, year released, actors, streaming location, and so much more!</p>
      <div class="container">
        <p>These are a few of our movies.</p>
        <!-- <movie-card/> -->
        <movies-list/>
      </div>
  </div>
</template>

<script>
//import MovieCard from '../components/MovieCard.vue';
import MoviesList from '../components/MoviesList.vue';
export default {
  components: { //MovieCard,
   MoviesList },
  name: "home"
};
</script>

<style scoped>

</style>
