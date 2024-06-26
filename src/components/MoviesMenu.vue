<template>
    <ion-menu content-id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-title>Filtrar Por:</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-list>
                <ion-item button href="/list/category/top_rated">
                    <ion-label>Mejor Calificadas</ion-label>
                </ion-item>
                <ion-item button href="/list/category/now_playing">
                    <ion-label>En Cartelera</ion-label>
                </ion-item>
                <ion-item button href="/list/category/upcoming">
                    <ion-label>Estrenos</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonContent,
        IonHeader,
        IonMenu,
        IonPage,
        IonTitle,
        IonToolbar,
        IonList,
        IonItem,
        IonLabel
    },
});
</script>

<style scoped>

</style>