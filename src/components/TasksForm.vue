<script setup lang="ts">
import { reactive } from "vue";
import AppInput from "@/components/form/AppInput.vue";

import type Task from "@/types/Task";
import TaskStatus from "@/types/TaskStatus";
import AppSelect from "./form/AppSelect.vue";
import AppCheckbox from "./form/AppCheckbox.vue";

const props = defineProps<{
  task: Task;
  frequencies: string[];
}>();

const form = reactive(props.task);
</script>

<template>
  <form>
    <AppSelect
      :options="frequencies"
      label="Select a frecuency"
      v-model:frequency="form.frequency"
    />

    <h3>Name & describe your task</h3>
    <AppInput label="Name" v-model:name="form.name" type="text" />

    <label>Description</label>
    <textarea
      v-model="form.description"
      placeholder="Description"
      class="field"
    ></textarea>

    <h3>Task situation</h3>
    <div>
      <input
        type="radio"
        v-model="form.status"
        :value="TaskStatus.unstarted"
        name="situation"
      />
      <label>Unstarted</label>
    </div>

    <div>
      <input
        type="radio"
        v-model="form.status"
        :value="TaskStatus.started"
        name="situation"
      />
      <label>Started</label>
    </div>

    <div>
      <input
        type="radio"
        v-model="form.status"
        :value="TaskStatus.completed"
        name="situation"
      />
      <label>Completed</label>
    </div>

    <h3>Supervision</h3>
    <div>
      <AppCheckbox
        label="Reviewed"
        v-model:supervision="form.supervision.reviewed"
      />
    </div>

    <div>
      <AppCheckbox
        label="Reviewed"
        v-model:supervision="form.supervision.approved"
      />
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<style scoped></style>
