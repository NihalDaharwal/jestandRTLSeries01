import React from "react";

import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <>
      {/* <Application />; */}
      <Skills skills={[]} />
    </>
  );
}

export default App;
