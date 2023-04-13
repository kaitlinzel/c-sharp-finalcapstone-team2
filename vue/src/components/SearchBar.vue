<template>
  <div>
     
      <search-bar/> 
      <input type="text" v-model="searchQuery" placeholder="Search Movies"/>
      <button @click="search">Search</button> 
      <ul>
        <li v-for="result in results" :key="result.id">
          {{ result.id }}
        </li>
      </ul>
    </div> 
      
</template>

<script>
import MoviesService from "../services/MoviesService";
export default {

data(){
    return {
      query: '',
      results: []
    };
    }, 
    methods: {
        async search() {
            const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=801560b2c5402810ded763d877958808&query=${this.query}`); 
            const data = await response.json(); 
            this.results = data.results; 
        }
    }
    
    };
    </script>

<style>

</style>