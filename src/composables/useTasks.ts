import { reactive } from "vue";
import TaskStatus from "@/types/TaskStatus";

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

  return {
    task,
    frequencies,
  };
};
