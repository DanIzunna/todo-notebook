import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos, darkMode }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  if (sortedTodos.length === 0) {
    return (
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mt: 2,
          color: darkMode ? "#ccc" : "#555",
        }}
      >
        📖 No tasks yet! Add your first todo.
      </Typography>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: darkMode ? "#1e1e1e" : "#fffbe6",
        borderRadius: 2,
        maxHeight: "60vh",
        overflowY: "auto",
      }}
    >
      <List>
        {sortedTodos.map((item) => (
          <TodoItem
            key={item.timestamp}
            item={item}
            todos={todos}
            setTodos={setTodos}
            darkMode={darkMode}
          />
        ))}
      </List>
    </Paper>
  );
}
