import { React, useState } from "react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const NewJournalEntry = ({ inputDate }) => {
  const [date, setDate] = useState(inputDate);

  return (
    <div className="new-journal-entry">
      <div class="journal-entry">
        <div className="journal-entry-header">
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="eeee, MMMM d. YYYY"
          />
          <div className="journal-entry-buttons">
            <button className="discard">Discard</button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="done">Done</button>
            </Link>
          </div>
        </div>

        <h2 class="journal-title">test title</h2>

        <pre class="journal-content">
          test content some long text test content some long text test content
          some long text test content some long text with line break testing
          line2 line3
        </pre>
      </div>
    </div>
  );
};

export default NewJournalEntry;
