import React from "react";

export const AddEvent: React.FC = () => {
  return (
    <>
      <div style={{ position: "fixed", bottom: "1rem", right: "1rem" }}>
        <div
          style={{
            width: "calc(4rem + 0.5vw)",
            borderRadius: "50%",
            aspectRatio: "1/1",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </>
  );
};
