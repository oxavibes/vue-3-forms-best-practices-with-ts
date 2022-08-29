import type TaskStatus from "@/types/TaskStatus";

interface Task {
  name: string;
  frequency: string;
  description: string;
  status: TaskStatus;
  supervision: {
    approved: boolean;
    reviewed: boolean;
  };
}

export default Task;
