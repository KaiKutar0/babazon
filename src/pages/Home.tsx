import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Item from "../components/Item";
import data from "../data.json";

function Home() {
  return (
    <div>
      <Section title="SUPPER OFFER">
        {data.slice(0, 6).map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Section>

      <Section title="TOP OF THE DAY">dfjb</Section>
    </div>
  );
}

export default Home;
