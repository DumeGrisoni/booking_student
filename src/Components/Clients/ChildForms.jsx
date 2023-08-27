/* eslint-disable react/prop-types */

const ChildForms = (props) => {

    const child = {
        child_lastName:,

    }
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
        <div className="flex flex-col gap-1 ">
          <label htmlFor="child_lastName" className="font-bold">
            Nom de famille *
          </label>
          <input
            type="text"
            name={props.child_lastName}
            placeholder="Nom"
            className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            onChange={props.handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 lg:gap-">
          <label htmlFor="child_firstName" className="font-bold">
            Prénom *
          </label>
          <input
            type="text"
            name={props.child_firstName}
            placeholder="Prénom"
            className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="schoolLvl" className="font-bold">
            Niveau Scolaire
          </label>
          <select
            name={props.schoolLvl}
            placeholder="choisissez une option"
            className="p-2 border-grey-font border text-grey-font rounded-md w-full shadow-sm shadow-grey-font "
            onChange={props.handleChange}
          >
            <option value="default" defaultValue hidden>
              Choisir une option
            </option>
            <option value="cp">CP</option>
            <option value="CE1">CE1</option>
            <option value="CE2">CE2</option>
            <option value="CM1">CM1</option>
            <option value="CM2">CM2</option>
            <option value="6ème">6ème</option>
            <option value="5ème">5ème</option>
            <option value="4ème">4ème</option>
            <option value="3ème">3ème</option>
          </select>
        </div>
        <div className="flex  flex-col gap-1">
          <label htmlFor="child_age" className="font-bold">
            Age
          </label>
          <input
            type="number"
            name={props.child_age}
            placeholder="Age"
            className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ChildForms;
