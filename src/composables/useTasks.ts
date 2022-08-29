import { reactive } from "vue";
import TaskSituation from "@/types/TaskSituation";

export default () => {
  const task = reactive({
    name: "",
    frequency: "",
    description: "",
    situation: TaskSituation.unstarted,
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
