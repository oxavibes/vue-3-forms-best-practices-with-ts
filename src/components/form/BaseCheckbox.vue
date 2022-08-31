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
  <input
    v-bind="$attrs"
    type="checkbox"
    :checked="supervision"
    @change="
      $emit('update:supervision', ($event.target as HTMLInputElement).checked)
    "
    class="field"
  />
  <label v-if="label">{{ label }}</label>
</template>

<style scoped></style>
