<template>
  <ion-page>
    <header-app :title="title" />
    <ion-content>
      <ion-title size="large">Géneros</ion-title>
      <ion-row>
        <genre-card v-for="genre in genres" :key="genre.id" :genre="genre"/>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonTitle } from '@ionic/vue';
import HeaderApp from '@/components/HeaderApp.vue';
import GenreCard from '@/components/GenreCard.vue';
import MovieService from '@/services/MovieService';

export default {
  name: 'HomePage',
  components: {
    IonContent, IonPage, IonTitle, HeaderApp, GenreCard
  },
  data() {
    return {
      title: 'Home',
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
  margin: 16px 0;
}
ion-row {
  display: flex;
  justify-content: center;
}
</style>