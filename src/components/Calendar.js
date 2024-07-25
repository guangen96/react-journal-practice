import { React, useEffect } from "react";
import DatePicker from "react-datepicker";
// to include browse date as useState so that when click arrow to browse or when user click today
// can setstate to update and activate useeffect to change the display accordingly
// dependency of the useeffect is browsedate
import { getMonthDayEntryExistList } from "../localstorage";

const Calendar = ({ date, onDateChange }) => {
  console.log("new");
  const monthList = getMonthDayEntryExistList(2024, 7);
  console.log(monthList);

  useEffect(() => {
    const d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = d.getDate();
    console.log(daysInMonth);
    console.log("2".toString("D3"));
    for (let day = 1; day < daysInMonth; day++) {
      const dayZeroFilled = ("000" + day).substr(-3);
      console.log(dayZeroFilled);
      const updateDay = document.querySelectorAll(
        `.react-datepicker__day--${dayZeroFilled}`
      );
      console.log(updateDay[0]);
      if (monthList.includes(day) && updateDay[0] != undefined) {
        console.log("im included" + day);
        updateDay[0].classList.add("entry-exist");
      } else {
        console.log("not included");
      }
    }
  }, []);

  return (
    <section id="calendar">
      <DatePicker
        todayButton="Today"
        selected={date}
        onChange={(date) => onDateChange(date)}
        inline
      />
      <button id="create-new">
        <span>+</span>Write New
      </button>
    </section>
  );
};

export default Calendar;
