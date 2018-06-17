<template>
  <div class="ui stackable five cards">
    <template v-for="song in songs">
        <song-card :song="song" :key='song.id'></song-card>
    </template>
  </div>
</template>

<script>
import SongCard from '@/components/SongCard'
export default {
    data () {
        return {
        songs: [],
          total: 0,
          pager: {}
        }
    },

    created: function()
        {
            this.fetchTopSongs();
        },

    methods: {
        fetchTopSongs()
        {
            let uri = 'https://music-realm.herokuapp.com/api/v1/eng/top-songs';
            this.axios.get(uri).then((response) => {
                this.songs = response.data.songs.filter(song => {
                    return song.source.endsWith('.mp3'); // We filter down actual songs
                });
                this.total = response.data.count;
                this.pager = response.data.pager;
            });
        },

        play(song){

          console.log(song.title);

          const player = window.Player.getInstance(song.source);
          player.play();
        }

    },

    components: {
      'song-card': SongCard
    }
}
</script>

<style>

</style>
