import Header from "./components/Header";
import Todo from "./components/Todo";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Header totalTodos={todos.length} />
      <Box sx={{ mt: 2 }}>
        <Todo todos={todos} setTodos={setTodos} />
      </Box>
    </Container>
  );
}

export default App;
