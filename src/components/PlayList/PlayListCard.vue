<template>
    <div class='ui card' v-on:mouseover="mouseOver" v-on:mouseout="mouseOut">

      <div>
        <a class='image'>
            <img :src="playlist.getThumbnail()" class="playlist-thumbnail" alt="">
        </a>
        <div class='content' style="padding: 10px;">
          <a class='description'><b>{{ playlist.getName() }}</b></a>
          <div class='meta'>{{ playlist.getSongCount() }}</div>
        </div>
      </div>

      <div v-show="hovered" class="controls">

        <div class="major" title="Delete Playlist">
          <i class="times icon"></i>
        </div>

        <div class="play-pause">
          <router-link :to="'/playlists/'+playlist.getName()">
            <span v-show="!isPlaying || isPaused" @click="play(song)"><i class="far fa-play-circle fa-3x"></i></span>
            <span v-show="isPlaying && !isPaused" @click="pause"><i class="far fa-pause-circle fa-3x"></i></span>
          </router-link>
        </div>
        <div class="misc">
        </div>
      </div>
    </div>
</template>


<style scoped>
.controls {
    z-index: 999;
    position: absolute;
    background: rgba(0,0,0,.7);
    width: 100%;
    height: 100%;
    color: #fff;
    padding-top: 50%;
}

  .play-pause,
  .misc {
    text-align: center;
  }

  .misc {
    margin-top: 20px!important;
  }

  i {
    cursor: pointer;
  }

.major {
  font: 14px/1.5 'Open Sans', sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  top: 0;
}

.major .times.icon {
  writing-mode: tb-rl;
  margin-top: 0.3em;
  margin-bottom: 0.2em;
  margin-left: 0.4em;
  padding-right: 10px;
  cursor: pointer;
  float: right;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.play-pause a{
  color: #fff
}

</style>


<script>
export default {
    name: 'playlist-card',
    props: ['playlist'],

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
    }
}

</script>
