<script setup>
import { ref } from 'vue';

const login = ref('');
const password = ref('')

const logIn = () => {
    
}

</script>

<template>
    <v-form @submit.prevent="logIn">               
        <v-text-field v-model="login" label="Введите логин" required></v-text-field>
        <v-text-field v-model="password" label="Введите пароль" required></v-text-field>
        <v-btn color="primary" block class="mt-4" type="submit"> Зарегистрироваться </v-btn>
    </v-form>
</template>

<style lang="scss" scoped></style>
