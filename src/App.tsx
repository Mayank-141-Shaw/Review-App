import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./data/store";
import { EventBox } from "./components/EventBox";

function App() {
  const events = useSelector((state: RootState) => state.event.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Review App</h1>
      <h3>Events</h3>
      {events.map((item, index) => (
        <EventBox
          key={index}
          id={item.id}
          title={item.title}
          description={item.description}
          startDate={item.startDate}
          endDate={item.endDate}
        />
      ))}
    </div>
  );
}

export default App;
