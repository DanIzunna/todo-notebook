import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  // Load todos from localStorage on first render
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      {/* Form for adding todos */}
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Form todos={todos} setTodos={setTodos} />
      </Paper>

      {/* Todo list */}
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <TodoList todos={todos} setTodos={setTodos} />
      </Paper>

      {/* Footer with counters */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
      </Box>
    </Container>
  );
}
