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
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical,
    }"
  >
    <BaseRadio
      :name="name"
      :status="status"
      :label="option.label"
      :value="option.value"
      @update:status="$emit('update:status', $event)"
    />
  </component>
</template>

<style scoped>
.horizontal {
  margin-right: 5px;
}
</style>
