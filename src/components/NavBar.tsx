import React, { useContext, useEffect, useState } from "react";
import logo from "../img/logo.svg";
import { useNavigate } from "react-router-dom";
import { Autocomplete, Badge, Box, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import data from "../data.json";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment } from "../app/cartSlice";
function NavBar() {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items.length);

  return (
    <div
      style={{
        width: "100%",
        height: "95px",
        backgroundColor: "#414141",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 32,
          fontWeight: 800,
          cursor: "pointer",
          color: "#FFFFFF",
        }}
        onClick={() => navigate("/")}
      >
        <div>
          <img height={80} src={logo} alt="" />
        </div>

        <p>Babazon</p>
      </div>
      <div>
        <Autocomplete
          sx={{ width: 720, backgroundColor: "#ECECEC" }}
          options={data.map((i) => ({ label: i.name, id: i.id }))}
          renderInput={(params) => <TextField {...params} />}
          // value={}
          onChange={(_, i) => {
            i && navigate(`/details/${i.id}`);
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 800,
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge
            badgeContent={cartItems}
            color="info"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <ShoppingCartIcon
              sx={{ cursor: "pointer" }}
              fontSize="large"
              onClick={() => navigate("/cart")}
            />
          </Badge>
        </div>
        <p>Log In</p>
        <p>Sign Up</p>
      </div>

      <div
        style={{
          width: "55px",
          height: "55px",
          borderRadius: 100,
          backgroundColor: "#EFEFEF",
        }}
      ></div>
    </div>
  );
}

export default NavBar;
