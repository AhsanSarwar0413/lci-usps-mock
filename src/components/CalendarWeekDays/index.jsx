import React from "react";
import {
    format,
    startOfWeek,
    addDays,
} from "date-fns";
import './styles.css';

const CalendarWeekDays = ({ activeDate }) => {
    const startingWeekDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let singleDay = 0; singleDay < 7; singleDay++) {
        weekDays.push(
            <div className="day weekdays-name" key={singleDay}>
                {format(addDays(startingWeekDate, singleDay), "E")}
            </div>
        );
    }

    return <div className="week-container">{weekDays}</div>;
};

export default CalendarWeekDays;
