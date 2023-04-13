<template>
  <div id="nav">
    <button id="homeBtn">
      <router-link class="home" v-bind:to="{ name: 'home' }">Home</router-link>
    </button>
    <button id="logoutBtn">
      <router-link
        class="logout"
        v-bind:to="{ name: 'logout' }"
        v-if="$store.state.token != ''"
        >Logout</router-link
      >
    </button>
    <button id="forYouBtn">
      <router-link v-bind:to="{ name: 'playlist' }">For You</router-link>
    </button>
    <!--   <div class="dropdown show">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown link
      </a>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div> -->
    <div class="genredropdown">
      <button id="genreBtn" href="#" > 
        Genres
        <i class="fa fa-caret-down"></i>
        <!--What does this do?-->
      </button>
      <div class="dropdown-content">
        <a href="#">Action</a>
        <a href="#">Thriller</a>
        <a href="#">Comedy</a>
        <a href="#">Mystery</a>
        <a href="#">Children's Movies</a>
        <a href="#">Romance</a>
        <a href="#">Horror</a>
        <a href="#">Independent Films</a>
        <a href="#">International Films</a>
      </div>
    </div>

    <!-- <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div> -->

    <search-bar class="search">Search:</search-bar>
    <input
      class="filter"
      type="text"
      v-model="filteredData"
      placeholder="Search Here"
    />
    <p class="welcome">
      Welcome User
      <!-- want to be able to input the logged in users name in here-->
      <img
        class="user_icon"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      />
    </p>

    <router-view />
    <div>
      <search-bar />
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  components: { SearchBar },
};
</script>


<style>
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
button {
  border: 5px solid orangered;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(50, 20, 185);
  grid-row: 1;
}
#homeBtn {
  grid-column: 1/2;
}
#logoutBtn {
  grid-column: 2/3;
}
#forYouBtn {
  grid-column: 3/4;
}
.genredropdown {
  float: left;
  overflow: hidden;
  grid-column: 4/5;
}
#genreBtn{
    height: 100%;
    width: 100%;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
}
.dropdown-content a {
  float: none;
  display: block;
  text-align: left;
  padding: 12px 16px;
  color: black;
}
.genredropdown:hover .dropdown-content {
  display: block;
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

a {
  text-decoration: none;
}
a:hover {
  background-color: rgba(107, 141, 216, 0.5);
}
a:active {
  background-color: rgb(33, 12, 219);
}
</style>