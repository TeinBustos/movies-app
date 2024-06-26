import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import MoviesListPage from '../views/MoviesListPage.vue';
import MovieDetailsPage from '../views/MovieDetailsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/list/:genreId',
    name: 'ListByGenre',
    component: MoviesListPage
  },
  {
    path: '/list/category/:category',
    name: 'ListByCategory',
    component: MoviesListPage
  },
  {
    path: '/movie/details/:id',
    name: 'MovieDetails',
    component: MovieDetailsPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
