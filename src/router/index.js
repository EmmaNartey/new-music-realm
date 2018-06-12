import Vue from 'vue'
import Router from 'vue-router'
import Songs from '@/components/Songs/Index'
import Contact from '@/components/Contact'
import TopSongs from '@/components/TopSongs/Index'
import NewReleases from '@/components/NewReleases/Index'
import ViewSong from '@/components/ViewSong/Index'

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
    }
  ]
})
