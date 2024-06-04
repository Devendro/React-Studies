import React, { useState } from "react";

const Chaining = () => {
  const [data, setdata] = useState(undefined);
  return <div>
    {data?.name} {data?.age} {data?.address}
    skjasklfjsdlkfjsdklfjsd flkjdsjfk sdjfkl
  </div>;
};

export default Chaining;
