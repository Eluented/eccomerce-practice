import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { InputAdornment, TextField } from "@mui/material";
import { color } from "@mui/system";

export default function SearchBar() {
  const [showClearIcon, setShowClearIcon] = useState("none");

  var handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };
  return (
    <Paper
      component="form"
      className="flex basis-5/12 w-full rounded-full px-3"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <TextField
        color=""
        className="rounded full"
        sx={{
          ml: 1,
          flex: 1,
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white", borderRadius: "32px" },
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "white",
            },
          }
        }}
        placeholder="Search for Products"
        onChange={handleChange}
        InputProps={{
          "aria-label": "search for products",
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ display: showClearIcon }}
              onClick={handleClick}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
}
