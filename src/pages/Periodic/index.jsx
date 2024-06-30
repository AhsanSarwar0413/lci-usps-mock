import React, { useState } from "react";
import './styles.css';
import CalendarHeading from "../../components/CalendarHeading";
import CalendarWeekDays from "../../components/CalendarWeekDays";
import CalendarDates from "../../components/CalendarDates";

const Periodic = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  return <div className="calendar-container">
    <CalendarHeading activeDate={activeDate} setActiveDate={setActiveDate} />
    <CalendarWeekDays activeDate={activeDate} />
    <CalendarDates setSelectedDate={setSelectedDate} selectedDate={selectedDate} activeDate={activeDate}/>
  </div>;
};

export default Periodic;
