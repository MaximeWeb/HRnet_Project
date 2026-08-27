import { useState } from "react";
import { Calendar } from "./index";

function App() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div>
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
      />

      <p>
        Selected date: {selectedDate}
      </p>
    </div>
  );
}

export default App;