<template>
  <div class="card">
    <h2>
        <router-link v-bind:to="{name:'movie-details', params: {id: movie.id}}">
            {{ movie.title }}
        </router-link>        
    </h2>
    <!-- <img v-if="book.isbn" v-bind:src="'http://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'" />
    <h3 class="book-author">{{ book.author }}</h3>
    <div class="button-container" v-if="! enableAdd">
        <button class="mark-read" v-on:click.prevent="setRead(true)" v-if=" ! book.read">Mark Read</button>
        <button class="mark-unread" v-on:click.prevent="setRead(false)" v-if="book.read">Mark Unread</button>
    </div>
    <button v-if="enableAdd" v-on:click.prevent="addToReadingList(book)">Add to Reading List</button> -->
  </div>
</template>

<script>
export default {
    name: 'movie-card',
    props: {
        book: Object
    },
    methods: {
        // setRead(value) {
        //     this.$store.commit('SET_READ_STATUS', {book: this.book, value: value});
        // },
        // addToReadingList(book) {
        //     let addedBook = Object.assign({ read: false }, book);
        //     delete addedBook.bestSeller;
        //     delete addedBook.newRelease;
        //     this.$store.commit('SAVE_BOOK', addedBook);
        // }
    }
}
</script>

<style>

</style>