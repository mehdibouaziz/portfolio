import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brand from "../img/MON-white.png";

import useScrollTrigger from "@mui/material/useScrollTrigger";

const Navbar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  let open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      className="navbar"
      id="navbar"
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        backgroundColor: trigger ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0)",
        transition: "background-color 0.5s",
        backgroundImage: 'none'
      }}
    >
      <Toolbar>
        <img
          src={Brand}
          alt="Brand"
          style={{
            height: "25px",
            marginLeft: "10vw",
            marginRight: "20px",
          }}
        ></img>

        <Typography
          variants="button"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "left",
            fontSize: "1.5em",
          }}
        >
          MB
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link href="#landing" underline="none" color="inherit">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="#about" underline="none" color="inherit">
            <Button color="inherit">About Me</Button>
          </Link>
          <Link href="#portfolio" underline="none" color="inherit">
            <Button color="inherit">Portfolio</Button>
          </Link>
          <Link href="#contact" underline="none" color="inherit">
            <Button
              color="inherit"
              sx={{
                marginRight: "10vw",
                marginLeft: "5px",
                border: "solid 1px white",
                borderRadius: 0,
              }}
            >
              Contact
            </Button>
          </Link>
        </Box>
        <IconButton
          id="navigation-button"
          aria-label="navigation"
          aria-controls={open ? "navigation-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ display: { xs: "block", sm: "none" }, marginRight: "10vw" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="navigation-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "navigation-button",
          }}
          sx={{'& .MuiPaper-root': {
              backgroundColor: '#000',
              backgroundImage: 'none'
          }}}
        >
          <Link href="#landing" underline="none" color="inherit">
            <MenuItem id="menu-home" onClick={handleClose}>
              Home
            </MenuItem>
          </Link>
          <Link href="#about" underline="none" color="inherit">
            <MenuItem id="menu-about" onClick={handleClose}>
              About Me
            </MenuItem>
          </Link>
          <Link href="#portfolio" underline="none" color="inherit">
            <MenuItem id="menu-portfolio" onClick={handleClose}>
              Portfolio
            </MenuItem>
          </Link>
          <Link href="#contact" underline="none" color="inherit">
            <MenuItem id="menu-contact" onClick={handleClose}>
              Contact
            </MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
