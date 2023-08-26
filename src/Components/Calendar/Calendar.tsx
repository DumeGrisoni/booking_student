import { FC, useState } from 'react';
import ReactCalendar from 'react-calendar';
import { add, format } from 'date-fns';

interface indexProps {}

interface DateType {
  onlyDate: Date | null;
  dateTime: Date | null;
}

const Calendar: FC<indexProps> = ({}) => {
  const [date, setDate] = useState<DateType>({
    onlyDate: null,
    dateTime: null,
  });

  const [selected, setSelected] = useState(false);

  const getHours = () => {
    if (!date.onlyDate) return;
    const { onlyDate } = date;

    const startingHours = add(onlyDate, { hours: 8 });
    const finishingHours = add(onlyDate, { hours: 19 });
    const interval = 90; //minutes
    const hours = [];

    for (
      let i = startingHours;
      i <= finishingHours;
      i = add(i, { minutes: interval })
    ) {
      hours.push(i);
    }
    return hours;
  };

  const hours = getHours();
  console.log(date.dateTime);

  return (
    <div className="flex flex-col gap-7">
      <ReactCalendar
        minDate={new Date()}
        view="month"
        onClickDay={(date) => setDate((prev) => ({ ...prev, onlyDate: date }))}
        tileDisabled={({ date, view }) =>
          (view === 'month' && date.getDay() === 0) || date.getDay() === 7
        }
        className="shadow-md shadow-secondary-blur rounded-md bg-secondary-var-1 w-[350px] lg:w-[450px] max-w-[350px] lg:max-w-full border border-secondary-blur p-0 lg:p-2 text-title lg:text-default"
      />
      {hours ? (
        <div className="flex flex-col gap-7">
          <div className="text-default font-bold text-center text-primary ">
            Selectionnez une heure pour le {date.onlyDate?.toLocaleDateString()}
          </div>
          <div className="flex justify-around items-center">
            {hours?.map((hour, i) => (
              <div
                key={`hour - ${i}`}
                className="text-default rounded-md bg-secondary-var-1 hover:bg-primary hover:text-secondary-var-1 p-1 lg:p-2 border border-grey-font shadow-md shadow-secondary-blur duration-300 ease-in-out transition-all"
              >
                <button
                  type="button"
                  onClick={() =>
                    setDate((prev) => ({ ...prev, dateTime: hour }))
                  }
                >
                  {format(hour, 'kk:mm')}
                </button>
              </div>
            ))}
          </div>
          <p className="font-bold text-primary text-center">
            {date.dateTime && date.onlyDate
              ? 'Le ' +
                date.onlyDate.toLocaleDateString() +
                ' à ' +
                format(date.dateTime, 'kk:mm') +
                'H'
              : ''}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Calendar;
