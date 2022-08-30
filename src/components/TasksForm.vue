<script setup lang="ts">
import { reactive } from "vue";
import type Task from "@/types/Task";

import AppInput from "@/components/form/AppInput.vue";
import AppSelect from "@/components/form/AppSelect.vue";
import AppCheckbox from "@/components/form/AppCheckbox.vue";
import AppRadioGroup from "@/components/form/AppRadioGroup.vue";

const props = defineProps<{
  task: Task;
  frequencies: string[];
}>();

const form = reactive(props.task);

const statusOpts = [
  { label: "Unstarted", value: 0 },
  { label: "Started", value: 1 },
  { label: "Completed", value: 2 },
];
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
      <AppRadioGroup
        name="status"
        :options="statusOpts"
        v-model:status="form.status"
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
        label="Approved"
        v-model:supervision="form.supervision.approved"
      />
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<style scoped></style>
