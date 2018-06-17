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
        songs: []
        }
    },

    created: function()
        {
            this.fetchSongs();
        },

    methods: {
        fetchSongs()
        {
            let uri = 'https://music-realm.herokuapp.com/api/v1/eng/songs';
            this.axios.get(uri).then((response) => {
                this.songs = response.data.songs.filter(song => {
                  return song.source.endsWith('.mp3'); // We filter down actual songs
                });
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
