export interface Task {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
}

export interface CreateTaskDTO {
  title: string;
}

export interface UpdateTaskDTO {
  title?: string;
  completed?: boolean;
}