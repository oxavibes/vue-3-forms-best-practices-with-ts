import type TaskSituation from "@/types/TaskSituation";

interface Task {
  name: string;
  frequency: string;
  description: string;
  situation: TaskSituation;
  supervision: {
    approved: boolean;
    reviewed: boolean;
  };
}

export default Task;
