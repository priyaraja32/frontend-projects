import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Smart Task & Productivity Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


