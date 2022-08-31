<script setup lang="ts">
import { reactive, toRaw } from "vue";
import type Task from "@/types/Task";

import BaseInput from "@/components/form/BaseInput.vue";
import BaseSelect from "@/components/form/BaseSelect.vue";
import BaseCheckbox from "@/components/form/BaseCheckbox.vue";
import BaseTextarea from "@/components/form/BaseTextarea.vue";
import BaseRadioGroup from "@/components/form/BaseRadioGroup.vue";

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

const emit = defineEmits<{ (e: "onSubmit", task: Task): void }>();

const handleSubmit = () => {
  emit("onSubmit", toRaw(form));
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <BaseSelect
      :options="frequencies"
      label="Select a frecuency"
      v-model:frequency="form.frequency"
    />

    <h3>Name & describe your task</h3>
    <BaseInput label="Name" v-model:name="form.name" type="text" />

    <BaseTextarea label="Descripcion" v-model:description="form.description" />

    <h3>Task status</h3>
    <div>
      <BaseRadioGroup
        vertical
        name="status"
        :options="statusOpts"
        v-model:status="form.status"
      />
    </div>

    <h3>Supervision</h3>
    <div>
      <BaseCheckbox
        label="Reviewed"
        v-model:supervision="form.supervision.reviewed"
      />
    </div>

    <div>
      <BaseCheckbox
        label="Approved"
        v-model:supervision="form.supervision.approved"
      />
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<style scoped></style>
