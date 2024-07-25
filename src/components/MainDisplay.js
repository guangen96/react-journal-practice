import React from "react";
import Calendar from "./Calendar";
import { Link } from "react-router-dom";

const MainDisplay = ({ date, onDateChange }) => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <section id="main-display">
      <Calendar date={date} onDateChange={(date) => onDateChange(date)} />
      <div id="main-display-right">
        <div class="journal-entries">
          <div class="journal-entry">
            <p class="journal-date">
              {date.toLocaleDateString(undefined, options)}
            </p>
            <h2 class="journal-title">test title</h2>
            <Link to="/write" style={{ textDecoration: "none" }}>
              <pre class="journal-content">
                test content some long text test content some long text test
                content some long text test content some long text with line
                break testing line2 line3
              </pre>
            </Link>
          </div>
        </div>
        <div class="journal-entries">
          <div class="journal-entry">
            <p class="journal-date">
              {date.toLocaleDateString(undefined, options)}
            </p>
            <h2 class="journal-title">test title</h2>

            <pre class="journal-content">
              test content some long text test content some long text test
              content some long text test content some long text with line break
              testing line2 line3 test content some long text test content some
              long text test content some long text test content some long text
              with line break testing line2 line3 test content some long text
              test content some long text test content some long text test
              content some long text with line break testing line2 line3
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDisplay;
