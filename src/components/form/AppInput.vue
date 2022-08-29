<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    modelValue?: string | number;
  }>(),
  {
    label: "",
    modelValue: "",
  }
);

defineEmits(["update:modelValue"]);
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    class="field"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<style scoped></style>
