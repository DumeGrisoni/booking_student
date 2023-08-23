import ReactCalendar from 'react-calendar';
// import './Calendar.css';
const Calendar = () => {
  return (
    <ReactCalendar
      minDate={new Date()}
      view="month"
      onClickDay={(date) => console.log(date)}
      className="calendar-container react-calendar__navigation"
    />
  );
};

export default Calendar;
