import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, InputBase, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 2,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavBar() {
    const quantity=useSelector( (state=>state.cart.quantity))
  // console.log("cart",quantity);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                cursor: "pointer",
                display: { xs: "none", sm: "flex" },
              }}
              color="black"
            >
              EN
            </Typography>
            <Search
              sx={{
                ml: 2,
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                // fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                textAlign: "center",
              }}
              color="black"
            >
              G.G
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,

              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <MenuItem
              sx={{
                fontSize: "14px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Register
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "14px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Sign In
            </MenuItem>
<Link to={"/cart"}>
<Badge badgeContent={quantity} color="primary">
  <ShoppingCartOutlinedIcon
    sx={{
      color: "black",
    }}
  />
</Badge>

</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// <IconButton
// size="large"
// edge="start"
// color="inherit"
// aria-label="menu"
// sx={{ mr: 2 }}
// >
// <MenuIcon />
// </IconButton>
// <Typography variant="h6" component="div" color="black" sx={{ flexGrow: 1 }}>
// News
// </Typography>
// <Button color="inherit">Login</Button>
