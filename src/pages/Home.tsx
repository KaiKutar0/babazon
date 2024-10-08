import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Item from "../components/Item";
import data from "../data.json";
import Page from "../components/Page";

function Home() {
  return (
    <Page>
      <Section title="SUPPER OFFER">
        {data.slice(0, 6).map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Section>

      <Section title="TOP OF THE DAY">
        {data.slice(6).map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Section>
    </Page>
  );
}

export default Home;
