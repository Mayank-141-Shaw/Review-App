import React, { useState, useEffect } from "react";
import { EventItem } from "../class/EventItem";

export interface EditEventFormProps {
  event: EventItem;
  submitForm: Function;
}

export const EditEventForm = ({ event, submitForm }: EditEventFormProps) => {
  const [formState, setFormState] = useState({
    title: event.title,
    description: event.description,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(formState);
    console.log(formState);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleTextAreaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  useEffect(() => {}, [formState]);

  return (
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
        <p style={{ margin: "0", fontWeight: "bold", fontSize: "1.2rem" }}>
          Title
        </p>
        <input
          type="text"
          name="title"
          value={formState.title}
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
        <p style={{ margin: "0", fontWeight: "bold", fontSize: "1.2rem" }}>
          Description
        </p>
        <textarea
          name="description"
          value={formState.description}
          onChange={handleTextAreaChange}
          style={{ padding: "4px", width: "-webkit-fill-available" }}
        />
      </div>

      <button style={{}}>Submit</button>
    </form>
  );
};
