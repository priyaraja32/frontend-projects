import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: []
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        completed: false
      });
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask(state, action: PayloadAction<number>) {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    updateTask(
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) task.title = action.payload.title;
    }
  }
});

export const { addTask, deleteTask, toggleTask, updateTask } =
  taskSlice.actions;

export default taskSlice.reducer;
