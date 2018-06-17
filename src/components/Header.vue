<template>
  <div id='main-menu' class='ui blue stackable inverted menu'>
    <a class='active item'>
      <router-link :to="{ name: 'Songs' }">Music Realm</router-link>
    </a>
    <a class='item'>
      <router-link :to="{ name: 'TopSongs' }">Top Songs</router-link>
    </a>
    <a class='item'>
      <router-link :to="{ name: 'NewReleases' }">New Releases</router-link>
    </a>
    <div class='right menu'>
      <div class='ui category search item'>
        <div class='ui inverted icon input'>
          <input id='search-term' class='prompt' type='text' placeholder='Search songs, artistes'>
          <i class='search link icon' id='search-button'></i>
        </div>
        <div class='results'></div>
      </div>
      <a class='item'>
        <router-link :to="{ name: 'Contact' }"><i class='mail icon'></i>Contact</router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
