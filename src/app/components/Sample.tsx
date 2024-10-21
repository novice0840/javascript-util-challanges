"use client";
import React, { useEffect, useState } from "react";

const Sample = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(10);
  }, []);

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
};

export default Sample;
