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

        <div class="dropdown">
          <i class="ellipsis horizontal icon"></i>
          <ul class="dropdown-menu">
            <li class="dropdown-submenu">
              <a class="test" tabindex="-1" href="#">Add to Playlist<i class="caret right icon"></i> <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a class="note" tabindex="-1" href="#">Azonto</a></li>
                <li><a class="note" tabindex="-1" href="#">New Playlist</a></li>
              </ul>
            </li>

            <li class="dropdown-submenu">
              <a class="test" tabindex="-1" href="#">Share <i class="caret right icon"></i><span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a class="note" tabindex="-1" href="#"><i class="facebook square icon"></i>Facebook</a></li>
                <li><a class="note" tabindex="-1" href="#"><i class="twitter square icon"></i>Twitter</a></li>
                <li><a class="note" tabindex="-1" href="#"><i class="facebook messenger icon"></i>Messenger</a></li>
                <li><a class="note" tabindex="-1" href="#"><i class="skype icon"></i>Skype</a></li>
                <li><a class="note" tabindex="-1" href="#"><i class="telegram icon"></i>Telegram</a></li>
                <li><a class="note" tabindex="-1" href="#"><i class="tumblr square icon"></i>Tumblr</a></li>
                <li><a class="note" tabindex="-1" href="#"><i class="linkify icon"></i>Copy Song Link</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="play-pause">
            <span v-show="!isPlaying || isPaused" @click="play(song)"><i class="far fa-play-circle fa-3x"></i></span>
            <span v-show="isPlaying && !isPaused" @click="pause"><i class="far fa-pause-circle fa-3x"></i></span>
        </div>
        <div class="misc">
        </div>
        <div class="extra content">
          <div class="item" style="float: left;">
            <i class="like icon"></i>
              <h4>20</h4>
          </div>
          <div class="item">
            <i class="cloud download icon"></i>
              <h4>12</h4>
          </div>
          <div class="item" style="float: right;">
            <i class="comments outline icon"></i>
              <h4>71</h4>
          </div>
        </div>
      </div>
    </div>
</template>


<style scoped>
.ui.card {
  border: 1px solid #fff;
}

  .extra.content .item{
    margin-top: 50px;
    display: inline-block;
    width: calc(100%/3);
    text-align: center;
    font-size: 12px!important;
  }

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

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

.dropdown {
  font: 14px/1.5 'Open Sans', sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  top: 0;
}

.dropdown .ellipsis.horizontal {
  writing-mode: tb-rl;
  margin-top: 0.1em;
  margin-left: 0.4em;
  font-weight: bold;
  font-size: 1.2em;
  padding-right: 10px;
  cursor: pointer;
  float: right;
  color: #fff;
}

.dropdown-submenu {
    position: relative;
}

.dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -1px;
}

.dropdown ul { 
    padding:1; 
    margin:1; 
    list-style:none; 
}

.dropdown .dropdown-submenu .test {
    transition: background .2s;
    cursor: pointer;
    display: block;
    float: left;
    position: relative;
    background-color: #000;
    color: hsla(0, 0%, 100%, 0.6);
    /*min-width: 160px;*/
    width: 10em;
    padding: 5px;
    font-size: 12px;
    height: 2.2em;
    text-align: inherit;
}

.dropdown .dropdown-submenu .test:hover {
  color: #fff;
  background-color: #333;
  border-color: #333;
}

.dropdown .dropdown-menu a.note {
  color: hsla(0, 0%, 100%, 0.6);
  background-color: #000;
  font-size: 12px;
  height: 2.2em;
  cursor: pointer; 
  display:block;
  padding: 5px;
  position: relative;
  text-align: inherit;
}

.dropdown .dropdown-menu a.note:hover {
  color: #fff;
  background-color: #333;
  border-color: #333;
}

.dropdown li ul { 
  display:none; 
  position:absolute; 
}

.dropdown li:hover ul { 
  display:block; 
  background-color: #000;
  color: hsla(0, 0%, 100%, 0.6);
  height:auto; 
  width: 13em;
  align-content: inherit; 
}

.dropdown li ul li { 
  clear:both; 
  border-style:none;
}

.caret.right.icon {
  float: right;
}

.facebook:hover, .facebook.messenger:hover,
.twitter:hover, .telegram:hover, .skype:hover,
.tumblr:hover {
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
            isPaused: false,
            listOne: false
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

