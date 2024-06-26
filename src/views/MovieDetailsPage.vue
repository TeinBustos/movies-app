<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ movie.title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-loading :is-open="loading" message="Loading..." :duration="1000" spinner="circles"></ion-loading>
        <ion-content v-if="!loading">
            <ion-img :src="movie.imageUrl"/>
            <ion-card-content>
                <ion-card-title>{{ movie.title }}</ion-card-title>
                <p>{{ movie.release_date }}</p>
            </ion-card-content>
            <ion-segment v-model="selectedSegment" @ionChange="onSegmentChange">
                <ion-segment-button value="summary">
                    <ion-label>Resumen</ion-label>
                </ion-segment-button>
                <ion-segment-button value="genres">
                    <ion-label>Géneros</ion-label>
                </ion-segment-button>
                <ion-segment-button value="production">
                    <ion-label>Productora</ion-label>
                </ion-segment-button>
                <ion-segment-button value="trailer">
                    <ion-label>Trailer</ion-label>
                </ion-segment-button>
            </ion-segment>
            <div v-if="selectedSegment === 'summary'">
                <p>{{ movie.overview }}</p>
            </div>
            <div v-else-if="selectedSegment === 'genres'">
                <p v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</p>
            </div>
            <div v-else-if="selectedSegment === 'production'">
                <p v-for="company in movie.production_companies" :key="company.id">{{ company.name }}</p>
            </div>
            <div v-else-if="selectedSegment === 'trailer'">
                <ion-card v-if="trailers.length > 0">
                    <ion-card-content>
                        <iframe width="100%" height="315" :src="getTrailerUrl()" frameborder="0" allowfullscreen></iframe>
                    </ion-card-content>
                </ion-card>
                <ion-card v-else>
                    <ion-card-content>
                        No se encontraron trailers en español para esta película.
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { 
    IonPage, IonHeader, IonToolbar, 
    IonButtons, IonBackButton, IonTitle, 
    IonContent, IonImg, IonCardContent, 
    IonCardTitle, IonSegment, IonSegmentButton, 
    IonLabel, IonButton, IonCard, 
    IonLoading
} from '@ionic/vue';
import MovieService from '@/services/MovieService';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'MovieDetailsPage',
    components: {
        IonPage, IonHeader, IonToolbar, 
        IonButtons, IonBackButton, IonTitle, 
        IonContent, IonImg, IonCardContent, 
        IonCardTitle, IonSegment, IonSegmentButton, 
        IonLabel, IonButton, IonCard, 
        IonLoading
    },
    data() {
        return {
            movie: {},
            trailers: [],
            selectedSegment: 'summary',
            loading: true
        };
    },
    async created() {
        this.loading = true;
        const route = useRoute();
        const movieId = route.params.id;
        this.movie = await MovieService.getMovieDetail(movieId);
        this.trailers = await MovieService.getMovieTrailer(movieId);
        this.loading = false;
    },
    methods: {
        onSegmentChange(event: any) {
        this.selectedSegment = event.detail.value;
        },
        getTrailerUrl() {
            if (this.trailers.length > 0) {
                return `https://www.youtube.com/embed/${this.trailers[0].key}`;
            }
            return '';
        }
    }
});
</script>

<style scoped>
ion-title {
    text-align: center;
    margin: 0 40px 0 0;
}

ion-card-content {
    text-align: center;
    padding: 16px;
}

ion-segment {
    margin: 16px 0;
}

ion-segment-button {
    margin: 0 8px;
}

div {
    text-align: center;
    margin: 16px;
}

ion-button {
    margin: 8px;
}
</style>