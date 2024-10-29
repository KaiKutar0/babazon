import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Item from "../components/Item";
import data from "../data.json";
import Page from "../components/Page";
import { useMediaQuery } from "@mui/material";
import { theme } from "../theme";

function Home() {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Page>
      <Section title="SUPPER OFFER">
        {matches
          ? data.slice(0, 6).map((item, i) => <Item key={i} item={item} />)
          : data.slice(0, 1).map((item, i) => <Item key={i} item={item} />)}
      </Section>

      <Section title="TOP OF THE DAY">
        {matches
          ? data.slice(0, 6).map((item, i) => <Item key={i} item={item} />)
          : data.slice(0, 1).map((item, i) => <Item key={i} item={item} />)}
      </Section>
    </Page>
  );
}

export default Home;
