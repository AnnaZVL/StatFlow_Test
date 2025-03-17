<script setup lang="ts">
interface Prop {
    label: string;
    error?: string | undefined;
}

defineProps<Prop>();
</script>

<template>
    <v-text-field :label="label" v-bind="$attrs" :error-messages="error" rounded-md></v-text-field>
</template>

<style lang="scss" scoped>

</style>
