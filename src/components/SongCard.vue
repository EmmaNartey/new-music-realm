<template>
    <div class='ui card' v-on:mouseover="mouseOver" v-on:mouseout="mouseOut">
      <div>
        <a class='image'>
          <router-link :to="'/songs/'+song.id">
            <img :src="song.thumbnail" class="song-thumbnail" alt="">
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
        <div class="misc">
          <span>
            <i class="cloud download icon"></i>
              <h4>125</h4>  
          </span>
        </div>
        <div class="extra content">
          <span class="left floated like">
            <i class="like icon"></i>
              <h4>20</h4>
          </span>
          <span class="right floated">
            <i class="comments outline icon"></i>
              <h4>71</h4>
          </span>
        </div>
      </div>
    </div>
</template>


<style scoped>
  .controls{
    z-index: 999;
    position: absolute;
    background: rgba(0,0,0,.7);
    width: 100%;
    height: 100%;
    color: #fff;
    padding-top: 50%;
  }

  .play-pause,
  .misc{
    text-align: center;
  }

  .misc{
    margin-top: 20px!important;
  }

  .extra.content {
    padding-left: 10px;
    padding-right: 10px;
  }

  h4 {
    font-size: 1em;
    margin-top: .3em;
    margin-bottom: .1em;
  }

  i {
    cursor: pointer;
  }

  .cloud.download:hover, .like.icon:hover, .comments.icon:hover {
    color: #2185d0;
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

          window.EventBus.$emit('SongPaused', window.Player.getNowPlaying());
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
     * We check if there's a song currently playing and
     * set the playing status of this song if the sources match
     */
    this.isPlaying = window.Player.getNowPlaying() !== null && window.Player.getNowPlaying() === this.song.source;

    /**
     * We listen for song playing event
     * and toggle the playing status of the song
     * based on the currently being played song
     */
    window.EventBus.$on('SongPlaying', song => {
        this.isPlaying = song.id === this.song.id;
      });

    /**
     * We listen for a song paused event
     * and toggle the playing status
     */
    window.EventBus.$on('SongPaused', songSource => {
      // First, we reset the play/pause button
      this.isPaused = songSource !== null && this.song.source === songSource;
    });

    }
}
</script>

<style scoped>

</style>


