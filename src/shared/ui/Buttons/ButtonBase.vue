<script setup lang="ts">

interface Props {
    text: string,
    color?: string,
    type?: 'submit' | 'button' |'resert',
    icon?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'primary', 
  type: 'submit', 
});
console.log(props.icon);
</script>

<template>
    <v-btn class="mt-4" :color="color" block :type="type" rounded="sm">{{ text }} </v-btn>
</template>

<style lang="scss" scoped></style>
