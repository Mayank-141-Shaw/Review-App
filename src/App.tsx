import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./data/store";
import { EventBox } from "./components/EventBox";

function App() {
  const events = useSelector((state: RootState) => state.event.value);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Review App</h1>
      <h3>Events</h3>
      {events.map((item, index) => (
        <EventBox key={index} event={JSON.parse(item)} />
      ))}
    </div>
  );
}

export default App;
