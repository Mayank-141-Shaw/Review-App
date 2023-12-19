import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { EventItem } from "../class/EventItem";
import { AppDispatch } from "../data/store";
import { useDispatch } from "react-redux";
import { addNewEvent } from "../data/eventSlice";

export const AddEvent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const formDefault = {
    id: "",
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  };

  const [state, setState] = useState({
    open: false,
    form: formDefault,
  });

  const toggleForm = () => {
    setState({ ...state, open: !state.open });
  };

  const handleSubmit = () => {
    const timeNow = Date.now();

    let res = new EventItem(
      crypto.randomUUID(),
      state.form.title,
      state.form.description,
      timeNow.toString(),
      new Date(timeNow + 7 * 24 * 60 * 60 * 1000).getTime().toString() // it will e 7 days from now
    );
    dispatch(addNewEvent(JSON.stringify(res)));
    setState({ ...state, open: false, form: formDefault });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(state.form.endDate);
    setState({
      ...state,
      form: { ...state.form, [e.currentTarget.name]: e.currentTarget.value },
    });
  };

  const handleTextAreaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      form: { ...state.form, [e.currentTarget.name]: e.currentTarget.value },
    });
  };

  return (
    <>
      <div style={{ position: "fixed", bottom: "1rem", right: "1rem" }}>
        <div
          style={{
            width: "calc(4rem + 0.5vw)",
            borderRadius: "50%",
            aspectRatio: "1/1",
            cursor: "pointer",
            backgroundColor: "#618b1b",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:
              "0 2px 5px rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
          onClick={toggleForm}
        >
          <FaPlus
            size={`calc(32px + 0.5vw)`}
            style={{
              color: "white",
            }}
          />
        </div>
      </div>

      {state.open && (
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
                ADD NEW EVENT
              </p>
              <div
                style={{ padding: "1rem", color: "black", cursor: "pointer" }}
                onClick={toggleForm}
              >
                <IoClose style={{ transform: "scale(2)" }} />
              </div>
            </div>

            <form
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onSubmit={handleSubmit}
            >
              <div
                style={{
                  padding: "0.2rem",
                  backgroundColor: "skyblue",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  Title
                </p>
                <input
                  type="text"
                  name="title"
                  value={state.form.title}
                  onChange={handleChange}
                  style={{ padding: "4px", width: "-webkit-fill-available" }}
                />
              </div>

              <div
                style={{
                  padding: "0.2rem",
                  backgroundColor: "skyblue",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  Description
                </p>
                <textarea
                  name="description"
                  value={state.form.description}
                  onChange={handleTextAreaChange}
                  style={{ padding: "4px", width: "-webkit-fill-available" }}
                />
              </div>

              <button style={{}}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
