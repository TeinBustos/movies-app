<template>
    <ion-col size="12" size-md="6" size-lg="4">
        <ion-card :href="`/detail/${movie.id}`">
            <ion-img :src="movie.imageUrl" />
            <ion-card-content>
                <ion-card-title>{{ movie.title }}</ion-card-title>
            </ion-card-content>
        </ion-card>
    </ion-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonCardContent, IonCardTitle, IonCol, IonImg } from '@ionic/vue';

export default defineComponent({
    name: 'MovieCard',
    components: {
        IonCard, IonCardContent, IonCardTitle, IonCol, IonImg
    },
    props: {
        movie: {}
    }
});
</script>

<style scoped>
ion-card {
    margin: 16px;
}

ion-card-title {
    text-align: center;
}
</style>