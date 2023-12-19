import React, { useEffect, useState } from "react";
import { EventItem } from "../class/EventItem";
import { VscTriangleDown } from "react-icons/vsc";

import { MdModeEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { EditEventForm } from "./EditEventForm";
import { useDispatch } from "react-redux";
import { updateEventById } from "../data/eventSlice";
import { AppDispatch } from "../data/store";

export interface EventBoxProps {
  event: EventItem;
}

export const EventBox: React.FC<EventBoxProps> = ({ event }) => {
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState({
    open: false,
    edit: false,
    event: event,
  });

  const toggleEditModal = () => {
    setState({ ...state, edit: !state.edit });
  };

  const toggle = () => {
    setState({ ...state, open: !state.open });
  };

  const submitEditFormData = (data: any) => {
    // setState({ ...state, edit: false });
    let updatedEvent = new EventItem(
      state.event.id,
      data.title,
      data.description,
      state.event.startDate,
      state.event.endDate
    );
    dispatch(updateEventById(JSON.stringify(updatedEvent)));
    setState({ ...state, event: updatedEvent, edit: false });
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
        marginBottom: "0.5rem",
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
            {state.event.title}
          </p>
        </div>
        <div style={{ display: "flex", width: "fit-content" }}>
          <div
            style={{
              padding: "0.5rem",
              cursor: "pointer",
            }}
            onClick={toggleEditModal}
          >
            <MdModeEdit />
          </div>
          <div
            style={{
              padding: "0.5rem",
              cursor: "pointer",
            }}
            onClick={toggle}
          >
            <VscTriangleDown
              style={{ transform: state.open ? "" : "rotateZ(180deg)" }}
            />
          </div>
        </div>
      </div>

      <p style={{ fontWeight: "normal", margin: 0 }}>
        Upcoming at : {new Date(Number(state.event.endDate)).toDateString()},{" "}
        {new Date(Number(state.event.endDate)).toLocaleTimeString()}
      </p>

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
          {state.event.description}
        </div>
      )}

      {state.edit && (
        <div
          style={{
            zIndex: 100,
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "brightness(0.2)",
          }}
        >
          <div
            style={{
              width: "80%",
              backgroundColor: "white",
              borderRadius: "10px",
              color: "black",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "calc(1rem + 0.5vw)",
                  marginLeft: "1rem",
                  fontWeight: "bold",
                }}
              >
                EDIT DATA
              </p>
              <div
                style={{ padding: "1rem", color: "black", cursor: "pointer" }}
                onClick={toggleEditModal}
              >
                <IoClose style={{ transform: "scale(2)" }} />
              </div>
            </div>

            <EditEventForm event={event} submitForm={submitEditFormData} />
          </div>
        </div>
      )}
    </div>
  );
};
