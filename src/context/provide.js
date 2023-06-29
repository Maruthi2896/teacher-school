import dataContext from "./context.js";
import React, { useState } from "react";

function Provide(props) {
  
  const [allow, setAllow] = useState(false);

  return (
    <dataContext.Provider
      value={{
        allow,
        setAllow,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
}

export default Provide;
