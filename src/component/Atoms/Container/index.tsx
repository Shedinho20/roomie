import React from "react";

export const Container: React.FunctionComponent = ({ children }) => {
  return (
    <div
      style={{
        padding: "0 5vw",
      }}
    >
      {children}
    </div>
  );
};
