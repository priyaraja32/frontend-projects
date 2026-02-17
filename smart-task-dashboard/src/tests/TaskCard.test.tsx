import { render, screen } from "@testing-library/react";
import TaskCard from "../components/TaskCard";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer, { Task } from "../store/taskSlice";

const mockTask: Task = {
  id: 1,
  title: "Test Task",
  completed: false
};

const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
  preloadedState: {
    tasks: {
      tasks: [mockTask]
    }
  }
});

test("renders task title", () => {
  render(
    <Provider store={store}>
      <TaskCard task={mockTask} />
    </Provider>
  );

  expect(screen.getByText("Test Task")).toBeInTheDocument();
});
