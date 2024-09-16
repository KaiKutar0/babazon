import { Container } from "@mui/material";
import { title } from "process";
import React, { PropsWithChildren } from "react";

function Section({
  children,
  title,
}: {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}) {
  return (
    <div>
      <div style={{ padding: "0px 40px" }}>
        <h3>{title}</h3>
      </div>
      <div
        style={{
          height: "500px",
          padding: "20px 40px",
          backgroundColor: "#F7F7F7",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Section;
