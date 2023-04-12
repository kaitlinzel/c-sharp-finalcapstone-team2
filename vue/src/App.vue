<template>
  <div id="app">
    <div id="nav">

      <router-link class="home" v-bind:to="{ name: 'home' }">Home</router-link>
      <router-link class="logout" v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''"
        >Logout</router-link>
      <p class="for-you"><router-link v-bind:to="{name: 'playlist'}">For You</router-link></p>
      <p class="cont">Continue Watching</p>
      <p class="genre">Genres</p>


      <p class="search">Search:</p>
      <p class="welcome">
      Welcome User
      <!-- want to be able to input the logged in users name in here-->
      <img
        class="user_icon"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      /></p>
    </div>
    <input class="filter" type="text" v-model=filterText placeholder="Search..." />
    <router-view />
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
#app {
  background: hsla(339, 100%, 55%, 1);
  background: linear-gradient(
    90deg,
    hsla(339, 100%, 55%, 1) 0%,
    hsla(197, 100%, 64%, 1) 100%
  );
  background: -moz-linear-gradient(
    90deg,
    hsla(339, 100%, 55%, 1) 0%,
    hsla(197, 100%, 64%, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    hsla(339, 100%, 55%, 1) 0%,
    hsla(197, 100%, 64%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FF1B6B", endColorstr="#45CAFF", GradientType=1 );
}
#nav {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 2, 1fr;
  gap: 10px;
  font-size: 100%;
  font-family: fantasy;
  border: 5px solid white;
  background-color: rgb(210, 130, 230);   
}
.home {
  grid-column: 1/2;
  grid-row: 1;
  border: 5px solid orangered;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgb(50, 20, 185);
}
.logout {
  grid-column: 2/3;
  grid-row: 1;
  border: 5px solid orangered;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgb(50, 20, 185);
  
}
.for-you {
  grid-column: 3/4;
  grid-row: 1;
  border: 5px solid orangered;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(50, 20, 185);
}
.cont {
  grid-column: 4/5;
  grid-row: 1;
  border: 5px solid orangered;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: rgb(50, 20, 185);
}
.genre {
  grid-column: 5/6;
  grid-row: 1;
  border: 5px solid orangered;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(50, 20, 185);
}
.search {
  grid-column: 6/7;
  grid-row: 1;
  border: 5px solid orangered;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(50, 20, 185);
}
.welcome {
  grid-column: 7/8;
  grid-row: 1;
  border: 5px solid orangered;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: rgb(50, 20, 185);
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
a:hover {
  background-color: rgba(107, 141, 216, 0.5);
}
a:active {
  background-color: rgb(33, 12, 219);
} 
</style>
