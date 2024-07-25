import React from "react";

const Header = ({ onTodayClick }) => {
  return (
    <header>
      <div class="header-container">
        <box-icon type="solid" name="book" color="#056517" size="md"></box-icon>
        <p>Journal App</p>
        <button onClick={onTodayClick}>Today</button>
      </div>
    </header>
  );
};

export default Header;
