import ReactCalendar from 'react-calendar';
// import './Calendar.css';
const Calendar = () => {
  return (
    <ReactCalendar
      minDate={new Date()}
      view="month"
      onClickDay={(date) => console.log(date)}
      className="shadow-md shadow-secondary-blur rounded-md bg-secondary-var-1 w-[450px] max-w-full border border-secondary-blur p-2 text-title lg:text-default"
    />
  );
};

export default Calendar;
