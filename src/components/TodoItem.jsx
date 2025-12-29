// components/TodoItem.jsx
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function TodoItem({ item, todos, setTodos }) {
  function handleToggle() {
    setTodos(
      todos.map((t) =>
        t.timestamp === item.timestamp ? { ...t, done: !t.done } : t
      )
    );
  }

  function handleDelete() {
    setTodos(todos.filter((t) => t.timestamp !== item.timestamp));
  }

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge="end" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
        sx={{
          px: 2,
          py: 1,
          "&:hover": { bgcolor: "#fff3c4" },
        }}
      >
        <Checkbox checked={item.done} onChange={handleToggle} sx={{ mr: 2 }} />
        <ListItemText
          primary={item.name}
          secondary={
            <Typography variant="caption" sx={{ color: "#555" }}>
              Added: {item.timestamp}
            </Typography>
          }
          sx={{ textDecoration: item.done ? "line-through" : "none" }}
        />
      </ListItem>
      <Divider sx={{ borderColor: "#ddd" }} />
    </>
  );
}
