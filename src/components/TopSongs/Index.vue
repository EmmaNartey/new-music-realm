<template>
  <div class="ui stackable five cards">
	<div class='ui card' v-for="song in songs" :key="song.id">
        <song-card :song="song" :key="song.id"></song-card>
	</div>
	<div class="ui container">
        <br>
        <div class='ui grid'>
            <div class='two column row'>
                <div class='left floated column'>
                    <a href='#' @click.prevent="previous">
                        <button :class="'ui labeled icon button ' + (this.previousPage === null ? 'disabled' : '')">
                        <i class='left chevron icon'></i>Newer
                        </button>
                    </a>
                </div>
                <div class='right'>
                    <a href='#' @click.prevent="next">
                        <button :class="'ui right labeled icon button ' + (this.nextPage === null ? 'disabled' : '')">
                        Older<i class='right chevron icon'></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
	</div>
  </div>
</template>

<script>
    import SongCard from "@/components/SongCard";

    export default {
      components: {'song-card': SongCard},
      data(){
            return{
                // The actively shown songs
                songs: [],

                // The total items fetched at a goal
                limit: 10,

                nextPage: null,
                previousPage: null
            }
        },

        created: function()
        {
            this.fetchTopSongs();
        },

        methods: {
            /**
                Fetches top songs from the server
                using the given url
                @param url string
             */
            fetchTopSongs(url)
            {
                this.axios.get(url).then((response) => {
                    this.songs = response.data.songs.filter(song => song.source.endsWith('.mp3'));
                    this.nextPage = (response.data.paging.next === undefined) ? null : response.data.paging.next;
                    this.previousPage = (response.data.paging.prev === undefined) ? null : response.data.paging.prev;
                });
            },


            /**
                Gets the next page of top-songs
             */
            next(){

                // We check if there is a next page,
                // and request it
                if(this.nextPage !== null) this.fetchTopSongs(this.nextPage);
            },


            /**
                Gets the previous page of top songs
             */
            previous(){

                // We check if there's a previous page,
                // and request it
                if(this.previousPage !== null) this.fetchTopSongs(this.previousPage);
            }



        },

        mounted(){

            // We fetch the first page
            this.fetchTopSongs('https://music-realm.herokuapp.com/api/v1/eng/top-songs?limit='+this.limit);
        }


    }
</script>

<style>

  .song-thumbnail{
    width: 100%;
    height: 208px;
  }

</style>
