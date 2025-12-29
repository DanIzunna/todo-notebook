// components/Header.jsx
import NavBar from "./NavBar";
import Box from "@mui/material/Box";

export default function Header({ totalTodos }) {
  return (
    <Box component="header" sx={{ mb: 3 }}>
      <NavBar totalTodos={totalTodos} />
    </Box>
  );
}
