import { SkillProps } from "./skills.types";

export const Skills = (props: SkillProps) => {
  const { skills } = props;
  return (
    <>
      <ul>
        {skills.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
};
