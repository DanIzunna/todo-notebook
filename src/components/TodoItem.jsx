// components/TodoItem.jsx
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function TodoItem({ item, todos, setTodos, darkMode }) {
  // Toggle the 'done' state for this specific todo
  function handleToggle() {
    setTodos(
      todos.map((t) =>
        t.id === item.id ? { ...t, done: !t.done } : t
      )
    );
  }

  // Delete this todo
  function handleDelete() {
    setTodos(todos.filter((t) => t.id !== item.id));
  }

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge="end" onClick={handleDelete}>
            <DeleteIcon sx={{ color: darkMode ? "#ccc" : "#555" }} />
          </IconButton>
        }
        disablePadding
        sx={{
          px: 2,
          py: 1,
          "&:hover": { bgcolor: darkMode ? "#333" : "#fff3c4" },
        }}
      >
        <Checkbox
          checked={item.done}
          onChange={handleToggle}
          sx={{ mr: 2 }}
        />
        <ListItemText
          primary={item.name}
          secondary={
            <Typography
              variant="caption"
              sx={{ color: darkMode ? "#aaa" : "#555" }}
            >
              Added: {new Date(item.timestamp).toLocaleString()}
            </Typography>
          }
          sx={{
            textDecoration: item.done ? "line-through" : "none",
          }}
        />
      </ListItem>
      <Divider sx={{ borderColor: darkMode ? "#555" : "#ddd" }} />
    </>
  );
}
