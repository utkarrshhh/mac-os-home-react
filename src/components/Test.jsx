import React from "react";

const Test = () => {
  console.log("test");

  return (
    <div style={{ height: "90vh", width: "30vw", background: "red" }}>
      Test
      {console.log("random")}
    </div>
  );
};

export default Test;
