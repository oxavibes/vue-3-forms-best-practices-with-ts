<script setup lang="ts">
import AppRadio from "@/components/form/AppRadio.vue";

defineProps<{
  name: string;
  status: string | number;
  options: { label: string; value: number }[];
}>();
</script>
<template>
  <AppRadio
    v-for="option in options"
    :name="name"
    :status="status"
    :key="option.value"
    :label="option.label"
    :value="option.value"
    @update:status="$emit('update:status', $event)"
  />
</template>

<style scoped></style>
