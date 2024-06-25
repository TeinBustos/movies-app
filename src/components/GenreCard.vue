<template>
    <ion-col size="6" size-md="4">
        <ion-card :href="`/list/${genre.id}`">
            <ion-card-content>
                {{ genre.name }}
            </ion-card-content>
        </ion-card>
    </ion-col>
</template>

<script lang="ts">
export default {
    name: 'GenreCard',
    props: {
        genre: {}
    }
};
</script>

<style scoped>
ion-card {
    width: 100%;
    text-align: center;
}
</style>