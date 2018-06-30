import Vue from 'vue'
import Router from 'vue-router'
import Songs from '@/components/Songs/Index'
import Contact from '@/components/Contact'
import TopSongs from '@/components/TopSongs/Index'
import NewReleases from '@/components/NewReleases/Index'
import ViewSong from '@/components/ViewSong/Index'
import PlayList from '@/components/PlayList/Index'
import PlayLists from '@/components/PlayLists/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/top-songs',
      name: 'TopSongs',
      component: TopSongs
    },
    {
      path: '/new-releases',
      name: 'NewReleases',
      component: NewReleases
    },
    {
      path: '/songs/:id',
      name: 'ViewSong',
      component: ViewSong
    },
    {
      path: '/play-list',
      name: 'PlayList',
      component: PlayList
    },
    {
      path: '/playlists/:name',
      name: 'PlayLists',
      component: PlayLists
    }
  ]
})
