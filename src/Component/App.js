import React from "react";
import Navbar from "./Navigation/Navbar";
import NewsBoard from "./NewsBoard/NewsBoard";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory}></Navbar>
      <NewsBoard category={category} />
    </>
  );
}

export default App;
