<script setup lang="ts">
import BaseRadio from "@/components/form/BaseRadio.vue";

defineProps<{
  name: string;
  vertical: boolean;
  status: string | number;
  options: { label: string; value: number }[];
}>();
</script>
<template>
  <BaseRadio
    v-for="option in options"
    :name="name"
    :key="option.value"
    :status="status"
    :label="option.label"
    :value="option.value"
    @update:status="$emit('update:status', $event)"
  />
</template>

<style scoped></style>
