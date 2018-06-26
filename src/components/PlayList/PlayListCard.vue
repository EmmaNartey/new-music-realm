<template>
    <div class='ui card' v-on:mouseover="mouseOver" v-on:mouseout="mouseOut">

      <div>
        <a class='image'>
          <router-link :to="'/playlists/'+playlist.getName()">
            <img :src="playlist.getThumbnail()" class="playlist-thumbnail" alt="">
          </router-link>
        </a>
        <div class='content' style="padding: 10px;">
          <a class='description'><b>{{ playlist.getName() }}</b></a>
        </div>
      </div>

      <div v-show="hovered" class="controls">

        <div class="major" @mouseover="listOne = true" @mouseleave="listOne = false">
          <i class="times icon"></i>
          <transition name="fade">
            <div class="list" v-if="listOne" @click="listOne = false">
              <div class="mini"><i class="music icon"></i>delete playlist</div>
            </div>
          </transition>
        </div>

        <div class="play-pause">
            <span v-show="!isPlaying || isPaused" @click="play(song)"><i class="far fa-play-circle fa-3x"></i></span>
            <span v-show="isPlaying && !isPaused" @click="pause"><i class="far fa-pause-circle fa-3x"></i></span>
        </div>
        <div class="misc">
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
  margin-top: 0.1em;
  margin-left: 0.4em;
  font-weight: bold;
  font-size: 1.2em;
  padding-right: 10px;
  cursor: pointer;
  float: right;
}

.major .list .mini {
  transition: background .2s;
  cursor: pointer;
  display:block;
  float: left;
  position: relative;
  background: #000;
  color: #fff;
  width: 100%;
  padding: 5px;
  font-size: 12px;
  height: 2.2em;
}

.major .list .mini:hover {
  background: #2185d0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
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
            isPaused: false,
            listOne: false
        }
    }
}

</script>
