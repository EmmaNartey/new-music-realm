<template>
  <div class="ui stackable five cards featured">
    <div class='ui card' v-for="song in songs" :key="song.title">
      <song-card :song="song" :key="song.id"></song-card>
      <!--<a class='image' href='mixtape/skooly-dont-you-ever-forget-me-2'>-->
        <!--<img img :src="song.image" style="width:208.59px;height:208.59px;" alt='Various Artists - "song.title"'>-->
      <!--</a>-->
      <!--<div class='content'>-->
        <!--<a class='header'>{{song.artist}}</a>-->
        <!--<div class='description nowrap'>{{song.title}}</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>

  import SongCard from '@/components/SongCard';

export default {

  components: {
      'song-card': SongCard
  },

  data () {
    return {
      songs: [
        {
        title: 'Bawasaaba',
        artiste: 'Stonebwoy',
          thumbnail: 'https://i0.wp.com/www.dcleakers.com/wp-content/uploads/2018/01/loyalty.jpg?resize=400%2C434'
        },
        {
        title: 'Ayoo',
        artiste: 'Shata Wale',
        thumbnail: 'http://www.ghanamotion.com/wp-content/uploads/2017/03/shatta-wale-ayoo-500x500.jpg'
        },
        {
        title: 'Heart Attack',
        artiste: 'Trey Songz',
        thumbnail: 'https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F051f4c8b76b381a430e0618df1e67796.1000x1000x1.jpg'
        },
        {
        title: 'Royalty',
        artiste: 'Chris Brown',
        thumbnail: 'https://is4-ssl.mzstatic.com/image/thumb/Music71/v4/0b/4b/6f/0b4b6fc8-8231-dbfd-49d3-a92bb95d0f24/mzm.nsulprvx.jpg/268x0w.jpg'
        },
        {
        title: 'Bo no nie',
        artiste: 'Joe Mettle ft. Luigin Mclean',
        thumbnail: 'https://worshippersgh.com/wp-content/uploads/2017/09/bonooni-1.jpg'
        }
      ]
    }
  }
}
</script>

<style>
  .featured .song-thumbnail{
    width: 100%;
    height: 208px;
  }
</style>
