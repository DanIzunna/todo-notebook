import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.name.trim()) return;

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(), // ✅ unique id for each todo
        name: todo.name,
        done: false,
        timestamp: new Date().toISOString(), // for display
      },
    ]);

    setTodo({ name: "", done: false });
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        width: "100%",
        mb: 2,
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Enter a new task..."
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        fullWidth
        sx={{
          bgcolor: "#fefefe",
          borderRadius: 2,
          input: { fontFamily: "Roboto, sans-serif", fontSize: "1rem" },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 2,
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Add
      </Button>
    </Box>
  );
}
