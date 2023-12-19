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
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h6>Title</h6>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <h6>Description</h6>
          <textarea
            name="description"
            value={formState.description}
            onChange={handleTextAreaChange}
          />
        </div>

        <button style={{}}>Submit</button>
      </form>
    </>
  );
};
