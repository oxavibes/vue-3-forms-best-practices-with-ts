<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    status?: string | number;
    value: string | number;
  }>(),
  {
    label: "",
  }
);

defineEmits(["update:status"]);
</script>

<template>
  <input
    type="radio"
    :checked="status === value"
    :value="value"
    v-bind="$attrs"
    @change="$emit('update:status', value)"
  />
  <label v-if="label">{{ label }}</label>
</template>

<style scoped></style>
