import Text from '../Components/Text.jsx';
import BookingForm from '../Components/BookingForm.jsx';
import Calendar from '../Components/Calendar/Calendar.jsx';

const Bookings = () => {
  return (
    <div className="flex flex-col lg:items-start items-center gap-10 px-[2rem] lg:px-[8rem] my-7">
      <h1 className="text-headline text-primary font bold">Réservation</h1>
      <div className="flex flex-col lg:flex-row mx-auto w-full gap-10 lg:gap-[100px]">
        <div className="flex flex-col gap-7 lg:gap-10 flex-1">
          <BookingForm />
          <section className="flex flex-col items-center gap-7">
            <h2 className="text-default font-bold text-primary">
              Choisir une date
            </h2>
            <Calendar />
          </section>
        </div>
        <div className="flex flex-col h-full gap-7 lg:gap-[100px] flex-2">
          <Text>
            <p>
              L&apos;entreprise se réserve le droit de refuser un rendez-vous ou
              de modifier unilatéralement les prix de son offre à tout moment,
              notamment en cas d&apos;augmentation des coûts, étant entendu que,
              en cas d&apos;augmentation des prix postérieure à
              l&apos;acceptation de l&apos;offre, seul le prix fixé au jour de
              cette acceptation sera applicable au client.
            </p>
          </Text>
          <Text>
            <p className="text-bold">
              Toutes les cases de couleurs blanche ne sont pas disponibles car
              déjà réserver ou bien ce créneau ne correspond pas avec le type de
              cours choisi
            </p>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
