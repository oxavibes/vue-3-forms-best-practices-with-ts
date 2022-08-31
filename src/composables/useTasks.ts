import { reactive } from "vue";
import { postTask } from "@/services/TaskService";
import TaskStatus from "@/types/TaskStatus";
import type Payload from "@/types/Payload";

export default () => {
  const task = reactive({
    name: "",
    frequency: "",
    description: "",
    status: TaskStatus.unstarted,
    supervision: {
      approved: false,
      reviewed: false,
    },
  });

  const frequencies = [
    "annual",
    "biannual",
    "biweekly",
    "daily",
    "eventual",
    "monthly",
    "quarterly",
    "weekly",
  ];

  const handleSubmit = async (payload: Payload) => {
    try {
      const response = await postTask(payload);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return {
    task,
    frequencies,
    handleSubmit,
  };
};
