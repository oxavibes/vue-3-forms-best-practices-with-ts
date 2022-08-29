<script setup lang="ts">
import { reactive } from "vue";
import AppInput from "@/components/form/AppInput.vue";
import AppSelect from "@/components/form/AppSelect.vue";
import AppCheckbox from "@/components/form/AppCheckbox.vue";
import AppRadio from "@/components/form/AppRadio.vue";

import type Task from "@/types/Task";
import TaskStatus from "@/types/TaskStatus";

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

    <h3>Task status</h3>
    <div>
      <AppRadio
        name="status"
        label="Unstarted"
        v-model:status="form.status"
        :value="TaskStatus.unstarted"
      />
    </div>

    <div>
      <AppRadio
        name="status"
        label="Started"
        v-model:status="form.status"
        :value="TaskStatus.started"
      />
    </div>

    <div>
      <AppRadio
        name="status"
        label="Completed"
        v-model:status="form.status"
        :value="TaskStatus.completed"
      />
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
