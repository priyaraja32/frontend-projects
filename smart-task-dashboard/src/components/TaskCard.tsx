import { useDispatch } from "react-redux";
import { Task, deleteTask, toggleTask, updateTask } from "../store/taskSlice";
import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  TextField
} from "@mui/material";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        {editing ? (
          <Stack direction="row" spacing={1}>
            <TextField
              value={title}
              onChange={e => setTitle(e.target.value)}
              size="small"
            />
            <Button
              onClick={() => {
                dispatch(updateTask({ id: task.id, title }));
                setEditing(false);
              }}
            >
              Save
            </Button>
          </Stack>
        ) : (
          <Typography
            variant="h6"
            sx={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.title}
          </Typography>
        )}

        <Stack direction="row" spacing={1} mt={2}>
          <Button
            variant="outlined"
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.completed ? "Undo" : "Complete"}
          </Button>

          <Button onClick={() => setEditing(true)}>Edit</Button>

          <Button
            color="error"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
