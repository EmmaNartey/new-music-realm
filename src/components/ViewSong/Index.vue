<template>
  <div class="ui grid">
    <div class="twelve wide column grid">
      <h2 class="ui header">
        <span>Stonebwoy - Bawasaaba</span>
      </h2>
      <p>
        <span>March 12, 2018</span>
      </p>
      <br>
      <div class="ui two column grid">
        <div class="ui card">
          <div class="ui image">
            <img src="https://i0.wp.com/www.dcleakers.com/wp-content/uploads/2018/01/loyalty.jpg?resize=400%2C434">
          </div>
        </div>
        <div class="ui right floated">
          <div class="ui card" style="width:500px">
            <div class="content">
              <div class="center aligned description">
                <h3 class="ui small header">
                  Stonebwoy of Bhim Nation drops another club banger which will get music lovers on their feet. Listen and enjoy the song.
                </h3>
              </div>
            </div>
          </div>
          <div class="ui divider"></div>
          <br>
          <div class="ui centered grid">
            <div class="ui horizontal">
              <div class="ui labeled button" tabindex="0">
                <div class="ui red button">
                  <i class="heart icon"></i> Like
                </div>
                <a class="ui basic red left pointing label">
                  1,048
                </a>
              </div>
            </div>
            <div class="ui horizontal">
              <div class="ui labeled button" tabindex="0">
                <div class="ui button">
                  <i class="download icon"></i> Download
                </div>
                <a class="ui basic left pointing label">
                  1,048
                </a>
              </div>
            </div>
          </div>
          <br>
          <div class="ui divider"></div>
        </div>
      </div>
    </div>
    <div class="four wide column grid">
      <div class="ui vertical rectangle test ad" data-text="Vertical Rectangle"></div>
    </div>
    <div class="twelve wide column grid">
      <aplayer
        mutex
        theme="rgb(173, 122, 134)"
        mode="circulation"
        :music="{
          title: 'Bawasaaba',
          author: 'Stonebwoy',
          url: 'http://www.songs.com.gh/wp-content/uploads/2018/01/Stonebwoy-%E2%80%93-Bawasaaba-Prod.-by-StreetBeatz-www.Ghanasongs.com_.mp3',
          pic: 'https://i0.wp.com/www.dcleakers.com/wp-content/uploads/2018/01/loyalty.jpg?resize=400%2C434'
        }"
      />
      <br>
      <comments />
    </div>
    <div class="four wide column grid">
      <trending />
    </div>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import Comments from '@/components/Comments'
import Trending from './Trending'

export default {
  components: {
    Aplayer,
    Comments,
    Trending,
  }
}
</script>

<style>
.ui.statistic>.value, .ui.statistics .statistic>.value {
  font-size: 1.3rem!important;
}
.ui.statistic>.label, .ui.statistics .statistic>.label {
  font-size: 0.8rem!important;
}
.aplayer{
  background: #e0e1e2 !important;
}
.ui.header, .ui.header+p>span {
  color: aliceblue;
}
.ui.small.header {
  color: black;
}
</style>

