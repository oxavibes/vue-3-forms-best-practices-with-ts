<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    description: string | number;
  }>(),
  {
    label: "",
  }
);
</script>

<template>
  <label>Description</label>
  <textarea
    v:bind="$attrs"
    :value="description"
    :placeholder="label"
    @input="
      $emit('update:description', ($event.target as HTMLInputElement).value)
    "
  ></textarea>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>
