import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";
import { result } from "../example-response";
import { useContext } from "react";
import { Store } from "../utils/Store";

export default function SearchBar() {
  const router = useRouter();
  const { dispatch } = useContext(Store);

  const [showClearIcon, setShowClearIcon] = useState("none");
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setShowClearIcon(e.target.value === "" ? "none" : "flex");

    if (e.target.value.length < 1) {
      setShowClearIcon("none");
    }
    setSearchInput(e.target.value);
  };

  const handleClear = () => {
    setSearchInput("");
  };

  async function searchProduct(params) {
    try {
      dispatch({ type: "SAVE_SEARCH_RESULTS", payload: result.items.item });

      return router.push(`/search/${params}`);
      
      // const resp = await axios.post(
      //   `https://api-gw.onebound.cn/taobao/item_search/?key=t8607980302&&q=${params}&start_price=0&end_price=0&page=1&cat=0&discount_only=&sort=&page_size=&seller_info=&nick=&ppath=&imgid=&filter=&&lang=en&secret=20220515`
      // );
  
      // if (resp.status === 200) {
        
      //   return router.push({
      //     pathname: `/search/${params}`,
      //     query: resp.data,
      //   });
      // }
    } catch (err) {
      console.log(err);
      throw Error(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    searchProduct(searchInput);
  };

  return (
    <Paper
      component="form"
      className="flex basis-5/12 w-full rounded-full px-3"
      onSubmit={handleSubmit}
      sx={{ display: "flex", alignItems: "center", width: 400 }}
    >
      <TextField
        onChange={handleChange}
        value={searchInput}
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
          },
        }}
        placeholder="Search for Products"
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
              onClick={handleClear}
              area-label="clear text button"
            >
              <IconButton
                type="button"
                onClick={handleSubmit}
                sx={{ p: "10px" }}
                aria-label="search button"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
}
