import React, { useDebugValue } from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const param = useParams();
  return (
    <div>
      About {param.name} {param.surname}
    </div>
  );
};

export default About;
