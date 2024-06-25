<template>
  <ion-page>
    <movies-menu/>
    <ion-content id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-row>
        <genre-card v-for="genre in genres" :key="genre.id" :genre="genre"/>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton } from '@ionic/vue';
import MoviesMenu from '@/components/MoviesMenu.vue'
import GenreCard from '@/components/GenreCard.vue';
import MovieService from '@/services/MovieService';

export default {
  name: 'HomePage',
  components: {
    IonContent, IonPage, IonTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, GenreCard, MoviesMenu
  },
  data() {
    return {
      title: 'Generos',
      genres: []
    };
  },
  async created() {
    this.genres = await MovieService.getGenres();
    console.log(this.genres);
  }
};
</script>

<style scoped>
ion-title {
  text-align: center;
  margin: 0 40px 0 0;
}
ion-row {
  display: flex;
  justify-content: center;
}
</style>
