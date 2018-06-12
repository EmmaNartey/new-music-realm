<template>
  <div class="ui stackable five cards">
	<div class='ui card' v-for="song in songs" :key="song.id">
        <a>
            <router-link :to="'/songs/'+song.id">
    		    <div class='ui image'>
    		      <img :src="song.thumbnail" style="width:208.59px;height:208.59px;" alt="">
    		    </div>
    		</router-link>
        </a>
        <div class='content'>
            <div class='description'><b>{{ song.title }}</b></div>
            <div class='meta'>{{ song.artist }}</div>
        </div>
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
    export default {
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
                let uri = 'http://localhost:3000/api/v1/eng/top-songs';
                this.axios.get(uri).then((response) => {
                    this.songs = response.data;
                });
            }
        }
    }
</script>

<style scoped>

</style>
