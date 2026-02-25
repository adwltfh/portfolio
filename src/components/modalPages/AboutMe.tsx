import { useState } from "react";
import Accordion from "../Accordion";

export default function AboutMe() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  return (
    <>
      <p>Hi! I am Adawiyyah Latifah.</p>

      <Accordion
        label="Summary"
        content={
          <p>
            I am a highly motivated and passionate frontend developer with over
            3 years of experience. I possess strong expertise in React.js,
            Vue.js, Nuxt.js, and Next.js. Prior to my current role, I am known
            for strong collaboration, a data-driven mindset, and
            results-oriented work ethic, I am a qualified, integrity-driven
            professional enthusiastic about delivering impactful outcomes.
          </p>
        }
      />
      <Accordion
        label="Work Experiences"
        content={
          <p>
            I am a highly motivated and passionate frontend developer with over
            3 years of experience. I possess strong expertise in React.js,
            Vue.js, Nuxt.js, and Next.js. Prior to my current role, I am known
            for strong collaboration, a data-driven mindset, and
            results-oriented work ethic, I am a qualified, integrity-driven
            professional enthusiastic about delivering impactful outcomes.
          </p>
        }
      />
    </>
  );
}
