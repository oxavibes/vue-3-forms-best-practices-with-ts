<script setup lang="ts">
import useTasks from "@/composables/useTasks";
import TasksForm from "@/components/TasksForm.vue";

const { task, frequencies, handleSubmit } = useTasks();
</script>

<template>
  <div class="section">
    <h2>Create task</h2>

    <TasksForm
      :task="task"
      :frequencies="frequencies"
      @on-submit="handleSubmit"
    />
    <pre>{{ task }}</pre>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
.section {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
