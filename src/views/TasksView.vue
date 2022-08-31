<script setup lang="ts">
import useTasks from "@/composables/useTasks";
import TasksForm from "@/components/TasksForm.vue";

const { task, frequencies, handleSubmit } = useTasks();
</script>

<template>
  <div>
    <h1>Create a task</h1>
    <TasksForm
      :task="task"
      :frequencies="frequencies"
      @on-submit="handleSubmit"
    />
    <pre>{{ task }}</pre>
  </div>
</template>

<style scoped></style>
