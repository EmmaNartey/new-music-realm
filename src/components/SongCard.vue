<template>
    <div class='ui card' v-on:mouseover="mouseOver" v-on:mouseout="mouseOut">
      <div>
        <a class='image'>
          <router-link :to="'/songs/'+song.id">
            <img :src="song.thumbnail" style="width:150.84px;height:150.84px;" alt="">
          </router-link>
        </a>
        <div class='content' style="padding: 10px;">
          <a class='description'><b>{{ song.title }}</b></a>
          <div class='meta'>{{ song.artiste }}</div>
        </div>
      </div>
      <div v-show="hovered" class="controls">

        <div class="play-pause">
            <span v-show="!isPlaying || isPaused" @click="play(song)"><i class="far fa-play-circle fa-3x"></i></span>
            <span v-show="isPlaying && !isPaused" @click="pause"><i class="far fa-pause-circle fa-3x"></i></span>
        </div>

      </div>
    </div>
</template>


<style scoped>
  .controls{
    z-index: 999;
    position: absolute;
    background: rgba(0,0,0,.7);
    height: 100%;
    width: 100%;
    color: #fff;
  }

  .play-pause{
    margin: 50% auto;
    text-align: center;
  }

</style>


<script>
export default {
    name: 'song-card',
    props: ['song'],

    data(){
        return{
            hovered: false,
            isPlaying: false,
            isPaused: false
        }
    },

    methods: {

      /**
       * Plays the song using the player
       * @param song
       */
      play(song){
        window.Player.play(song.source);
        window.EventBus.$emit('SongPlaying', song);

        this.isPaused = false;
      },

      /**
       * When the pause button is clicked
       */
      pause(){
          this.isPaused = true;
          window.Player.pause();
      },

      /**
       * When mouse is on card
       */
      mouseOver(){
         this.hovered = true;
      },

      /**
       * When mouse is not on card
       */
      mouseOut(){
        this.hovered = false;
      }

    },

  /**
   * When the component is mounted
   */
  mounted(){

    /**
     * We listen for song playing event
     * and toggle the playing status of the song
     * based on the currently being played song
     */
    window.EventBus.$on('SongPlaying', song => {
        this.isPlaying = song.id === this.song.id;
      });
    }
}
</script>
