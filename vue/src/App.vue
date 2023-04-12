<template>
  <div id="app">
    <div id="nav">
      <router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''"
        >Logout</router-link>&nbsp;|&nbsp;
      <p class="for-you"><router-link v-bind:to="{name: 'playlist'}">For You</router-link></p>&nbsp;|&nbsp;
      <p class="cont">Continue Watching</p>&nbsp;|&nbsp;
      <p class="genre">Genres</p>&nbsp;|&nbsp;
      <p class="search">Search:</p>
       <h1>
      Welcome User&nbsp;&nbsp;
      <!-- want to be able to input the logged in users name in here-->
      <img
        class="user_icon"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      /></h1>
    </div>
    <input class="filter" type="text" v-model=filterText placeholder="Search..." />
    <router-view />
  </div>
</template>

<style scoped>
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
  grid-template-columns: 10% 10% 10% 10% 10%;
  grid-template-rows: 20% 80%;
  font-size: 100%;
  font-family: fantasy;
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
</style>
