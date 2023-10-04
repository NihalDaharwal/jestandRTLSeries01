import React from "react";

import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";
import { Counter } from "./components/counter/counter";

function App() {
  return (
    <>
      <Application />;
      <Skills skills={[]} />
      <Counter />
    </>
  );
}

export default App;
