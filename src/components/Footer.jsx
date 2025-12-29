import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        mt: 3,
        borderRadius: 2,
        bgcolor: "#f3f3f3",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          gap: 1,
        }}
      >
        {/* Left: Task summary */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Completed: {completedTodos}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Total: {totalTodos}
          </Typography>
        </Box>

        {/* Right: Credits with GitHub icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mt: { xs: 1, sm: 0 },
          }}
        >
          <Typography variant="body2" sx={{ color: "#555" }}>
            Built by
          </Typography>
          <Link
            href="https://github.com/danizunna"
            target="_blank"
            rel="noopener"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#555",
              textDecoration: "none",
              "&:hover": { color: "#000" },
            }}
          >
            <GitHubIcon fontSize="small" sx={{ mr: 0.5 }} />
            Nwahiri Daniel
          </Link>
        </Box>
      </Box>
    </Paper>
  );
}
