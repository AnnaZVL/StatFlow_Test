<script setup lang="ts">
import { ref } from 'vue';
import FormLogin from './ui/FormLogin.vue';
import FormSignup from './ui/FormSignup.vue';

type Login = 'sign' | 'login';

const isLogin = ref<Login>('sign');
    
</script>

<template>
    <v-main class="d-flex align-center justify-center">
        <v-container class="fill-height">
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6" lg="4">
                    <v-sheet class="pa-8 d-flex flex-column rounded-lg" color="#fff" max-width="600">
                        <v-tabs class="mb-4" v-model="isLogin">
                            <v-tab value="sign">Вход</v-tab>
                            <v-tab value="login">Регистрация</v-tab>
                        </v-tabs>
                        <v-window v-model="isLogin">
                            <v-window-item value="sign">
                                <FormSignup />
                            </v-window-item>
                            <v-window-item value="login">
                                <FormLogin />
                            </v-window-item>
                        </v-window>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<style lang="scss" scoped>
.v-tabs :deep(.v-slide-group__content) {
    justify-content: space-between;
}

.v-tab:hover {   
    background: var(-v-theme-background);
}
</style>
