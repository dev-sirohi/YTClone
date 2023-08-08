import React from "react";
import { Stack } from "@mui/material";
import { Link } from "@mui/material";
import logo from "../utils/youtube_1384060.png";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    // justifyContent="space-around"
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      backgroundColor: "#000",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={50}></img>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
