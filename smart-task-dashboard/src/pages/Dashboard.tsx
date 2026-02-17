import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" mt={4}>
        My Tasks...
      </Typography>

      <TaskForm />

      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Container>
  );
};

export default Dashboard;

