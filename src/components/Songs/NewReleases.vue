<template>
  <div class="ui stackable five cards">
    <div class='ui card' v-for="song in songs" :key="song.title">
      <a class='image'>
        <router-link :to="'/songs/'+song.id">
          <img :src="song.thumbnail" style="width:150.84px;height:150.84px;" alt="">
        </router-link>
      </a>
      <div class='content'>
        <a class='description'><b>{{ song.title }}</b></a>
        <div class='meta'>{{ song.artiste }}</div>
      </div>
    </div>
  </div>
</template>

<script>
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
                this.songs = response.data;
            });
        }
    }    
}
</script>

<style>

</style>
