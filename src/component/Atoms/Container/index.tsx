import React from "react";

export const Container: React.FunctionComponent = ({ children }) => {
  return (
    <div
      style={{
        padding: "5vw 5vw 5vw 5vw",
        marginTop: "70px",
      }}
      className="container"
    >
      {children}
    </div>
  );
};
