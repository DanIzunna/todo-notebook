// components/NavBar.jsx
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function NavBar({ totalTodos }) {
  return (
    <AppBar
      position="static"
      sx={{
        py: 1,
        px: 2,
        background: "linear-gradient(90deg, #1565c0, #1976d2)", // polished gradient
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Left: App title with icon */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <AssignmentIcon /> Todo Notebook
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
