import { useState, useEffect } from 'react';
import './styles.css';
import { addDays, format, isSameDay } from 'date-fns';
import { getFormatTime } from '../Adhoc/utils';

const Routine = () => {

  const [routineData, setRoutineData] = useState(null);
  const [routineDates, setRoutineDates] = useState(null);
  const [maxRowNumber, setMaxRowNumber] = useState(null);
  useEffect(() => {
    if (routineData !== null) {
      let startDate = new Date(routineData[0]['d']);
      let endDate = new Date(routineData[routineData.length - 1]['d']);

      let dates = [];
      while (startDate <= endDate) {
        dates.push(startDate);
        startDate = addDays(startDate, 1);
      }
      setRoutineDates(dates);
      const maxRow = routineData.map(routine => routine.rowNumber);
      const maxRowNum = Math.max(...maxRow);
      setMaxRowNumber(Array.from(Array(maxRowNum).keys()));
    }
    else {
      const fetchDatafromTextFile = async () => {
        const responseInText = await fetch('https://usps-mock.vercel.app/data/Routine.txt');
        let responseData = await responseInText.text();
        responseData = responseData.replace('Routine Data:-', '').trim();
        responseData = JSON.parse(responseData);
        console.log(responseData);
        setRoutineData(responseData);
      }
      fetchDatafromTextFile();
    }
  }, [routineData]);



  return (
    <div className="routine-container">
      <div className="routine-header">
        <div>
          <span></span>
          <span>Approved</span>
        </div>
        <div>
          <span></span>
          <span>Not Approved</span>
        </div>
        <div>
          <span></span>
          <span>Missed</span>
        </div>
        <div>
          <span></span>
          <span>ToDo</span>
        </div>
      </div>
      <div className='routine-table'>
        <div>
          {(routineDates && routineData && maxRowNumber) && (
            routineDates.map((routineDate) => (
              <div className={`column ${(format(routineDate, 'EEEE') === 'Saturday' || format(routineDate, 'EEEE') === 'Sunday') ? 'weekend-gray' : '' }`}>
                <div className="routine-day">{format(routineDate, 'EEEE')}</div>
                <div class="routine-date">{format(routineDate, 'dd')}</div>
                <ul>
                  {maxRowNumber.map((currentRowNumber) => (
                    <li>{routineData.map(routine => (
                      <>
                        {(isSameDay(new Date(routine.d), new Date(routineDate)) && routine.rowNumber === currentRowNumber + 1) && (
                          <div style={{ backgroundColor: `${routine.color}` }}>
                            <span>{routine.cw_route_name}</span>
                            <span>{getFormatTime(routine.cleaning_Time_Min)}</span>
                            <div class="tooltip">
                              <span>{`Dates: ${format(routineDate, 'MM/dd/yyyy')}`}</span>
                              <span>{`Cleaning Time: ${getFormatTime(routine.cleaning_Time_Min)}`}</span>
                              <span>Rooms: {routine.rooms}</span>
                              <span>{`Specialities: ${routine.specialties}`}</span>
                            </div>
                          </div>
                        ) 
                        }
                      </>
                    )) }</li>
                  )) }
                </ul>
              </div>
            ))
          )}
        </div>   
      </div>
    </div>
  );
};

export default Routine;
