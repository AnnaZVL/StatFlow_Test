<script setup lang="ts"></script>

<template>
  <v-app>
    <router-view name="header"></router-view> 
    <router-view></router-view>
  </v-app>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;
</style>
