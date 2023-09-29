import { useState } from "react";
import { SkillProps } from "./skills.types";

export const Skills = (props: SkillProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ul>
        {skills.map((item) => {
          return <li key={item}>{item}</li>;
        })}

        {isLoggedIn ? (
          <button>start Learning</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </ul>
    </>
  );
};
