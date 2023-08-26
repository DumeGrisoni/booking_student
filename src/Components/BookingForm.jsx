const BookingForm = () => {
  return (
    <form className="form-input font-normal font-sans">
      <select
        name="courses"
        id="course"
        className="rounded-md border-grey-font border p-2 "
      >
        <option value="default" defaultValue hidden>
          Choisir une option
        </option>
        <option value="particulier-1">Cours Particuliers 1H</option>
        <option value="particulier-10">Cours Particuliers 10H</option>
        <option value="descolarise">Enfant Déscolarisé</option>
      </select>
      <select
        name="childs"
        id="childs"
        className="rounded-md border-grey-font border p-2"
      >
        <option value="default" defaultValue hidden>
          Nom de l&apos;enfants
        </option>
        <option value="child-1">Paul - 12ans - 6ème</option>
        <option value="child-2">Emilie - 8ans - CM1</option>
      </select>
    </form>
  );
};

export default BookingForm;
