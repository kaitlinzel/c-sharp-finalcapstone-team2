<template>
  <div class= watchlist> 
      <h1>Welcome!</h1>
      <h2>Here you can create a watchlist or a playlist.</h2> 

      <div class= setPlaylist>
        <p>What would you like to call your playlist?</p>
      <input v-model="inputPlaylistName" type="text" placeholder="Playlist Name">
      </div>  

      
  
  </div>
</template>

<script>

export default {
name: 'playwatchlist',
data() {
  return {
    inputPlaylistName: ""
  }
}
}
</script>

<style>
.setPlaylist {
  display: flex;
}
</style>