<template>
  <div class="ui stackable five cards">
    <template v-for="song in songs">
        <song-card :song="song" :key='song'></song-card>
    </template>
  </div>
</template>

<script>
import SongCard from '@/components/SongCard'

export default {
    data () {
        return {
        songs: []
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
                this.songs = response.data.songs;
            });
        }
    },
    
    components: {
      'song-card': SongCard
    }
}
</script>

<style>

</style>
