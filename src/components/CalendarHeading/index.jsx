import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { format,
    addMonths,
    subMonths,
} from "date-fns";
import './styles.css';

const CalendarHeading = ({ activeDate, setActiveDate }) => {
    return (
        <div className="calendar-heading">
            <FiChevronLeft
                className="navigation-icon"
                onClick={() => setActiveDate(subMonths(activeDate, 1))}
                color="black"
            />
            <h2 className="current-month">{format(activeDate, "MMMM - yyyy")}</h2>
            <FiChevronRight
                className="navigation-icon"
                onClick={() => setActiveDate(addMonths(activeDate, 1))}
                color="black"
            />
        </div>
    );
};

export default CalendarHeading;
