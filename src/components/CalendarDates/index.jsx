import {useState, useEffect } from "react";
import {
    format,
    startOfWeek,
    addDays,
    startOfMonth,
    endOfMonth,
    endOfWeek,
    isSameMonth,
    isSameDay,
} from "date-fns";
import './styles.css';

const CalendarDates = ({ setSelectedDate, activeDate, selectedDate }) => {
    const startOfTheCurrentMonth = startOfMonth(activeDate);
    const endOfTheCurrentMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheCurrentMonth);
    const endDate = endOfWeek(endOfTheCurrentMonth);


    const [periodicTaskData, setPeriodicTaskData] = useState(null);
    useEffect(() => {
        const fetchDatafromTextFile = async () => {
            const responseInText = await fetch(`${import.meta.env.VITE_HOST}/data/periodic.txt`);
            let responseData = await responseInText.text();
            responseData = responseData.replace('Periodic Data:-', '').trim();
            responseData = JSON.parse(responseData);
            setPeriodicTaskData(responseData);
        }
        fetchDatafromTextFile();
    }, []);

    const currentWeek = (date, selectedDate, activeDate) => {
        let currentDate = date;
        const currentWeek = [];
        for (let i = 0; i < 7; i++) {
            const duplicateDate = currentDate;
            currentWeek.push(
                <div
                    className={`calendar-day  ${isSameMonth(currentDate, activeDate) ? "" :
                                "day-inactive"
                                } ${isSameDay(currentDate, selectedDate) ? "selected-day" : ""}
                                ${isSameDay(currentDate, new Date()) ? "today" : ""}`}
                    onClick={() => {
                        setSelectedDate(duplicateDate);
                    }}
                    key={i}
                >
                    {format(currentDate, "dd")}
                    {periodicTaskData && periodicTaskData?.map((taskData, index) => (
                        (isSameDay(currentDate, taskData.dueDate) && taskData.task_Desc !== '') &&
                        <span
                            className="periodic-label"
                            style={{ backgroundColor: `${taskData.color}` }}
                            key={index}
                            title={`Description: ${taskData.task_Desc}`}    
                        >
                            {taskData.task_Desc}
                        </span>
                    ))}
                </div>
            );
            currentDate = addDays(currentDate, 1);
        }
        return <>{currentWeek}</>;
    };

    let currentDate = startDate;
    const weeks = [];
    while (currentDate <= endDate) {
        weeks.push(
            currentWeek(currentDate, selectedDate, activeDate)
        );
        currentDate = addDays(currentDate, 7);
    }

    return <div className="week-container cal-dates">{weeks}</div>;
};

export default CalendarDates;
