import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import { TextField, Button, Stack } from "@mui/material";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask(title));
    setTitle("");
  };

  return (
    <form onSubmit={submit}>
      <Stack direction="row" spacing={2} mt={2}>
        <TextField
          fullWidth
          label="New Task"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Stack>
    </form>
  );
};

export default TaskForm;



