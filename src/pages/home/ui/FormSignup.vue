<script setup>
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
            <v-text-field
                label="Введите логин"
                v-bind="field"
                :error-messages="errors.login"
                rounded-md
            ></v-text-field>
        </Field>
        <Field name="password" v-slot="{ field, meta }">
            <v-text-field
                label="Введите пароль"
                v-bind="field"
                :error-messages="errors.password"
            ></v-text-field>
        </Field>
        <v-btn color="primary" block class="mt-4" type="submit"> Войти </v-btn>
    </v-form>
</template>

<style lang="scss" scoped>
.v-text-field {
    border: none;
}

</style>
