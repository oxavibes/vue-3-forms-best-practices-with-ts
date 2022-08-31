<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    name?: string | number;
  }>(),
  {
    label: "",
    name: "",
  }
);

defineEmits(["update:name"]);
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="name"
    :placeholder="label"
    class="field"
    @input="$emit('update:name', ($event.target as HTMLInputElement).value)"
  />
</template>

<style scoped></style>
