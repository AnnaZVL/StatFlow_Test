<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <v-app-bar>
        <v-container class="d-flex align-center justify-space-between">
            <router-link to="/">StatFlow-b</router-link>
            <v-sheet>
                <router-link to="/" v-if="route.meta.isAuth">Logout</router-link>
                <v-avatar color="info" v-if="route.meta.isAuth"> Us </v-avatar>
            </v-sheet>
        </v-container>
    </v-app-bar>
</template>

<style lang="scss" scoped></style>
