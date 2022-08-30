interface Task {
  name: string;
  frequency: string;
  description: string;
  status: number;
  supervision: {
    approved: boolean;
    reviewed: boolean;
  };
}

export default Task;
