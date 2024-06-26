<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button default-href="/home"></ion-back-button>
                    </ion-buttons>
                    <ion-title>{{ title }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-loading :is-open="loading" message="Loading..." :duration="4000" spinner="circles"></ion-loading>
            <div v-if="!loading">
                <ion-grid>
                    <ion-row>
                        <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
                    </ion-row>
                </ion-grid>
                <div class="pagination">
                    <ion-button @click="previousPage" :disabled="page === 1">
                        Anterior
                    </ion-button>
                    <ion-button @click="nextPage">
                        Siguiente
                    </ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonFooter, IonButtons, IonButton, IonBackButton, IonLoading } from '@ionic/vue';
import MovieCard from '@/components/MovieCard.vue';
import MovieService from '@/services/MovieService';
import { useRoute } from 'vue-router';

export default {
    name: 'MoviesListPage',
    components: {
        IonContent, IonPage, IonHeader,
        IonToolbar, IonTitle, IonGrid, 
        IonRow, IonFooter, IonButtons, 
        IonButton, MovieCard, IonBackButton,
        IonLoading
    },
    data() {
        return {
            title: 'Listado de Películas',
            movies: [],
            genreId: null,
            category: null,
            page: 1,
            loading: true
        };
    },
    async created() {
        const route = useRoute();
        this.genreId = route.params.genreId;
        this.category = route.params.category;
        await this.fetchMovies();
    },
    methods: {
        async fetchMovies() {
            this.loading = true;
            if (this.genreId) {
                this.movies = await MovieService.getMoviesFilteredByGenre(this.genreId, this.page);
                this.loading = false;
            } else if (this.category) {
                this.movies = await MovieService.getMoviesFilteredByCategory(this.category, this.page);
                this.loading = false;
            }
        },
        async nextPage() {
            this.page++;
            await this.fetchMovies();
        },
        async previousPage() {
            if (this.page > 1) {
                this.page--;
                await this.fetchMovies();
            }
        }
    },
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
    flex-wrap: wrap;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    gap: 30px;
}
</style>
