const BookingForm = () => {
  return (
    <form className="form-input font-normal ">
      <select
        name="courses"
        id="course"
        className="rounded-md  border-grey-font border p-2"
      >
        <option value="default" defaultValue hidden>
          Choisir une option
        </option>
        <option value="particulier-1">Cours Particuliers 1H</option>
        <option value="particulier-10">Cours Particuliers 10H</option>
        <option value="descolarise">Enfant Déscolarisé</option>
        <option value="stage-ete">Stage d&apos;Eté</option>
        <option value="stage-dnb">Stage Préparation DNB</option>
      </select>
      <select
        name="childs"
        id="childs"
        className="rounded-md border-grey-font border p-2"
      >
        <option value="default" defaultValue hidden>
          Nombre d&apos;enfants
        </option>
        <option value="child-1">1 Enfant</option>
        <option value="child-2">2 Enfants</option>
      </select>
    </form>
  );
};

export default BookingForm;
