type TaskData = {
  userID: string;
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "completed" | "in-progress";
};

type ID = {
  userID: string;
  taskID: string;
};

export type { TaskData, ID };
