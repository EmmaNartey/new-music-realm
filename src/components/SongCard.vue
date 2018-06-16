<template>
    <div class='ui card'>
      <a class='image'>
        <router-link :to="'/songs/'+song.id">
          <img :src="song.thumbnail" style="width:150.84px;height:150.84px;" alt="">
        </router-link>
      </a>
      <div class='content'>
        <a class='description'><b>{{ song.title }}</b></a>
        <div class='meta'>{{ song.artiste }}</div>
        <button @click="play(song)">Play</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'song-card',
    props: ['song'],

    play(song){
      console.log(song.title);
      const player = window.Player.getInstance(song.source);
      player.play();
    }
}
</script>

<style scoped>

</style>
