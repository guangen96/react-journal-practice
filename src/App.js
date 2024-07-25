import logo from "./logo.svg";

// React
import { useState } from "react";
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

// Components
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";
import NewJournalEntry from "./components/NewJournalEntry.js";
import JournalEntry from "./components/JournalEntry.js";

// Functions (for testing)
import {
  saveMonthDayEntryExistList,
  getMonthDayEntryExistList,
} from "./localstorage.js";

function App() {
  // workaround to replicate today function in react-datepicker package in today button in header
  const todayButton = document.getElementsByClassName(
    "react-datepicker__today-button"
  );

  // UseState/Effects
  const [date, setDate] = useState(new Date());

  console.log(" im in app");
  saveMonthDayEntryExistList(2024, 7, 5);
  console.log("success save");
  // localStorage.setItem("2024-2", JSON.stringify([3, 2]));
  const monthDayEntryList = JSON.parse(localStorage.getItem("2024-7"));
  console.log(monthDayEntryList);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                onTodayClick={() => {
                  todayButton[0].click();
                }}
              />
              <MainDisplay date={date} onDateChange={(date) => setDate(date)} />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route path="/write" element={<NewJournalEntry inputDate={date} />} />
        <Route
          path="/{year}-{month}-{day}-{entryNumber}"
          element={<JournalEntry />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
