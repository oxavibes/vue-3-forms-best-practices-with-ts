<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    supervision?: boolean;
  }>(),
  {
    label: "",
    supervision: false,
  }
);

defineEmits(["update:supervision"]);
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    type="checkbox"
    :checked="supervision"
    @change="
      $emit('update:supervision', ($event.target as HTMLInputElement).checked)
    "
    class="field"
  />
</template>

<style scoped></style>
