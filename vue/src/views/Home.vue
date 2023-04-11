<template>
  <div class="home">
    <h1>
      Welcome User 
      <!-- want to be able to input the logged in users name in here-->
      <img 
        class="user_icon"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      />
    </h1>
    <div class="nav">
      <h2 class="for_you">Movies For You</h2>
      <h2 class="cont">Continue Watching</h2>
      <h2 class="genre">Genres</h2>
    </div>
    <p class="movie_list">These are a few of our movies.</p>
    <div class="container">
      <!-- <movie-card/> -->
      <movies-list />
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
  name: "home",
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
html,
body,
div,
img {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: fantasy;
  vertical-align: baseline;
}
body {
  line-height: 1;
}
h1 {
  display: flex;
  justify-content: right;
}
.nav > h2 {
  width: 350px;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
p.movie_list {
  display: flex;
  justify-content: center;
}
img.user_icon {
  display: flex;
  justify-content: right;
  width: 50px;
  height: 50px;
  background: rgb(12, 79, 223);
  border-radius: 60%;
  padding: 5px;
}
.container {
  width: 350px;
  margin: 5px;
  padding: 5px;
  display: flex;
}
</style>
