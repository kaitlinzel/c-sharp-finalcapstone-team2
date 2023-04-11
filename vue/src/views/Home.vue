<template>
  <div class="home">
    <h1>Welcome user{{this.user}}<!-- want to be able to input the logged in users name in here-->
     <img class="user_icon" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/></h1>
    <div class="nav">
    <h2 class="for_you">Movies For You</h2>
    <h2 class="cont">Continue Watching</h2>
    <h2 class="genre">Genres</h2>
    </div>
      <div class="container">
        <!--img class="item" src=> this is where we can load in an api call to put our movie poster in-->
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
h1 {
   display: flex;
   justify-content: right;
}
.nav {
  width: 350px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.container { 
  width: 350px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}
.item {
  
  margin: 5px;
}

img.user_icon {
  display: flex;
  justify-content: right;
  width: 50px;
  height: 50px;
  background: blueviolet;
  border-radius: 50%;
  padding: 5px;
}
</style>
