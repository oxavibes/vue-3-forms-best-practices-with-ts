<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    frequency?: string;
    options: string[];
  }>(),
  {
    label: "",
    frequency: "",
    options: () => [],
  }
);
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <select
    class="field"
    :value="frequency"
    v-bind="{
      ...$attrs,
      onChange: ($event) => { $emit('update:frequency', ($event.target as HTMLInputElement).value) }
    }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === frequency"
    >
      {{ option }}
    </option>
  </select>
</template>

<style scoped></style>
