<script setup>
import InputBase from '@/shared/ui/Inputs/InputBase.vue';
import ButtonBase from '@/shared/ui/Buttons/ButtonBase.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useForm, Field } from 'vee-validate';
import * as yup from 'yup';

const router = useRouter();

const { handleSubmit, errors } = useForm({
    validationSchema: yup.object({
        login: yup.string().min(3, 'Минимум 3 символа').required('Поле обязательно для заполнения'),
        password: yup
            .string()
            .min(5, 'Минимум 5 символов')
            .required('Поле обязательно для заполнения'),
    }),
});


const onSubmit = handleSubmit((values) => {
    console.log('submit', values);

    if (login.value === 'user') {
        router.push({ path: '/user' });
    }
    if (login.value === 'admin') {
        router.push({ path: '/admin' });
    }
});
</script>

<template>
    <v-form @submit.prevent="onSubmit">
        <Field name="login" v-slot="{ field, meta }">
            <InputBase
                label="Введите логин"
                v-bind="field"
                :error-messages="errors.login"
                rounded-md
            />
        </Field>
        <Field name="password" v-slot="{ field, meta }">
            <InputBase label="Введите пароль" v-bind="field" :error-messages="errors.password" />
        </Field>
        <ButtonBase block class="mt-4" text="Войти" icon="mdi-close-circle"></ButtonBase>
    </v-form>
</template>

<style lang="scss" scoped></style>
