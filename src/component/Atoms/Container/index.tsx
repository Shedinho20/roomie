import React from "react";

export const Container: React.FunctionComponent = ({ children }) => {
  return (
    <div
      style={{
        padding: "5vw",
      }}
    >
      {children}
    </div>
  );
};
