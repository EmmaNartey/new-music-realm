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
                    <a href='mixtapes?p=0'>
                        <button class='ui labeled icon button'>
                        <i class='left chevron icon'></i>Newer
                        </button>
                    </a>
                </div>
                <div class='right'>
                    <a href='mixtapes?p=1'>
                        <button class='ui right labeled icon button'>
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
        }
    }
</script>

<style>

  .song-thumbnail{
    width: 100%;
    height: 208px;
  }

</style>
