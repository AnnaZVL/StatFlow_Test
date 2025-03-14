<script setup>
import LeftNav from '../../app/ui/Nav/LeftNav.vue';
import RightNav from '../../app/ui/Nav/RightNav.vue';
</script>

<template>    
 <LeftNav/>    
 <v-main class="d-flex align-center justify-center">
    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <h1>Admin</h1>
            </v-col>
        </v-row>
    </v-container>
</v-main>
<RightNav/>

</template>

<style lang='scss' scoped>
</style>