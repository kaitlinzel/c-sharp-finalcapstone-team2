<template>
  <div class="home">
    <h1>
      Welcome User
      <!-- want to be able to input the logged in users name in here && need to put space inbetween the username and the avatar-->
      <img
        class="user_icon"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      />
    </h1>
    <div class="filter-options">
      <h2 class="for-you">Movies For You</h2>
      <h2 class="cont">Continue Watching</h2>
      <h2 class="genre">Genres</h2>
    </div>
    <p class="movie-list">These are a few of our movies.</p>
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <div class="movies" v-for="movie in movies" :key="movie">
          {{ movie }}
        </div>
        <!-- <movie-card/> -->
        <movies-list />
      </div>
    </div>
    <button @click="prev">prev</button>
    <button @click="next">next</button>
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
  data() {
    return {
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },
  mounted() {
    this.setStep(), this.resetTranslate();
  },
  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalMovies = this.movies.length;
      this.step = `${innerWidth / totalMovies}px`;
    },
    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const movie = this.movies.pop();
        this.movies.unshift(movie);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step}) 
    translateX(-${this.step})`,
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step}) 
      translateX(-${this.step})`,
      };
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
div,
img {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: fantasy;
  vertical-align: baseline;
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
.carousel {
  width: 170px;
  overflow: hidden;
}
.inner {
  white-space: nowrap;
  transition: transform 0.2s;
}
.movie {
  width: 40px;
  margin-right: 10px;
  display: inline-flex;
}
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
