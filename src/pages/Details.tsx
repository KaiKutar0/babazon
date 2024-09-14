import React, { useEffect, useState } from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import comments from "../comments.json";
import Comment from "../components/Comment";

function Details() {
  const { id } = useParams();
  const item = data.filter((i) => i.id.toString() === id?.replace(":", ""))[0];

  return (
    <div
      style={{
        padding: "0% 15%",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <h1>{item.name}</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            height: "700px",
            backgroundColor: "#EBEBEB",
            boxShadow: "#00000026 1.95px 1.95px 2.6px",
          }}
        >
          {/* make an another variant of <Item/>*/}
          <img height={600} width={440} src={item.image} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" onClick={() => {}}>
              Add
            </Button>
          </div>
        </div>
        <div style={{ width: "440px", fontSize: 32 }}>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
        </div>
      </div>
      <div
        style={{
          height: 600,
          backgroundColor: "#ECECEC",
          padding: "3% 5%",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div style={{ width: "100%" }}>
          <TextField multiline size="medium" sx={{ width: "100%" }} />
          <div>
            <Button variant="contained" size="large" onClick={() => {}}>
              Add
            </Button>
          </div>
        </div>
        {comments.slice(0, 3).map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Details;
