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
    <BaseInput label="Name" v-model:name="form.name" type="text" />

    <BaseSelect
      :options="frequencies"
      label="Select a frecuency"
      v-model:frequency="form.frequency"
    />

    <fieldset>
      <legend>Task status</legend>
      <BaseRadioGroup
        vertical
        name="status"
        :options="statusOpts"
        v-model:status="form.status"
      />
    </fieldset>

    <fieldset>
      <legend>Supervision</legend>

      <BaseCheckbox
        label="Reviewed"
        v-model:supervision="form.supervision.reviewed"
      />

      <BaseCheckbox
        label="Approved"
        v-model:supervision="form.supervision.approved"
      />
    </fieldset>

    <BaseTextarea label="Descripcion" v-model:description="form.description" />

    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<style scoped></style>
