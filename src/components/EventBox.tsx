import React, { useEffect, useState } from "react";
import { EventItem } from "../class/EventItem";

export interface EventBox {
  event: EventItem;
}

export const EventBox: React.FC<EventItem> = (event) => {
  const [state, setState] = useState({
    open: false,
    title: event.title,
    id: event.id,
    desc: event.description,
    start: event.startDate,
    end: event.endDate,
  });

  console.log(state);

  const toggle = () => {
    setState({ ...state, open: !state.open });
  };

  useEffect(() => {}, [state]);

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "1rem",
        background: "linear-gradient( 90deg, #5f0f40, #310e68 )",
        color: "white",
        border: "1px solid white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p
            style={{
              fontSize: "calc(1.5rem + 0.5vw)",
              fontWeight: "bold",
              margin: "0",
            }}
          >
            {state.title}
          </p>
          <p style={{ fontWeight: "normal", margin: 0 }}>
            Upcoming at : {new Date(Number(state.end)).toDateString()}
          </p>
        </div>
        <button
          style={{
            padding: "0.5rem",
            border: "1px solid skyblue",
            fontSize: "1rem",
            height: "fit-content",
          }}
          onClick={toggle}
        >
          Toggle
        </button>
      </div>

      {state.open && (
        <div
          style={{
            transition: "all 0.5s",
            backgroundColor: "#01010188",
            padding: "6px",
            borderRadius: "8px",
            marginTop: "6px",
          }}
        >
          {state.desc}
        </div>
      )}
    </div>
  );
};
