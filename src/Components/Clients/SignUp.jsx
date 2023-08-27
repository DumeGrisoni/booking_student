import { supabase } from '../../lib/helpers/supabaseClient';
import { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
    address: '',
    postale: null,
    phone: null,
    child_lastName: '',
    child_firstName: '',
    schoolLvl: null,
    child_age: null,
    twoChild_schoolLvl: null,
    twoChild_firstName: '',
    twoChild_age: null,
  });

  const [twoChilds, setTwoChilds] = useState(false);
  const handleTwoChilds = (e) => {
    e.preventDefault();
    setTwoChilds(!twoChilds);
  };
  console.log(formData);
  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  async function handleSubmit() {
    const { data, error } = await supabase.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
      options: {
        data: {
          name: formData.name,
          email: formData.email,
          address: formData.address,
          password: formData.password,
          city: formData.city,
          postale: formData.postale,
          phone: formData.phone,
          child_lastName: formData.child_lastName,
          child_firstName: formData.child_firstName,
          schoolLvl: formData.schoolLvl,
          child_age: formData.child_age,
          twoChild_schoolLvl: formData.twoChild_schoolLvl,
          twoChild_firstName: formData.twoChild_firstName,
          twoChild_age: formData.twoChild_age,
        },
      },
    });
  }

  return (
    <div>
      <h1 className="lg:px-[7rem] px-[4rem] text-primary-var-2 font-bold text-default text-center mb-7">
        Les éléments marqués d&apos;un astérisque sont obligatoires.
      </h1>
      <div className="lg:px-[7rem] px-[4rem] text-primary text-default ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-center lg:text-start gap-5 lg:gap-5"
        >
          <p className="text-title text-primary-var-1 font-bold">
            Informations personnelles
          </p>
          <hr />
          {/* NAMES */}
          <div className="flex flex-col gap-1 lg:gap-">
            <label htmlFor="first_name" className="font-bold">
              Votre Nom *
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Nom de famille"
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1 lg:gap-">
            <label htmlFor="email" className="font-bold">
              Adresse courriel *
            </label>
            <input
              name="email"
              type="text"
              placeholder="Courriel"
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font"
              onChange={handleChange}
            />
          </div>
          {/* PASSWORD */}
          <div className="flex flex-col gap-1 lg:gap-">
            <label htmlFor="password" className="font-bold">
              Mot de passe *
            </label>
            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font"
              onChange={handleChange}
            />
          </div>
          {/* ADRESS */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="city" className="font-bold">
                Ville *
              </label>
              <input
                type="text"
                name="city"
                placeholder="Ville"
                className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="postale" className="font-bold">
                Code Postal *
              </label>
              <input
                type="number"
                name="postale"
                placeholder="Code Postale"
                className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="adress" className="font-bold">
              Adresse *
            </label>
            <input
              type="text"
              name="address"
              placeholder="Adresse"
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
              onChange={handleChange}
            />
          </div>
          {/* Numero */}
          <div>
            <label htmlFor="adress" className="font-bold">
              Numéro de téléphone *
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Numéro de téléphone"
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
              onChange={handleChange}
            />
          </div>
          <p className="text-title text-primary-var-1 font-bold mt-4 lg:mt-7">
            Informations enfants
          </p>
          <hr />
          {/* CHILDS */}
          <div className="flex flex-col gap-4">
            {/* NAMES */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="child_lastName" className="font-bold">
                  Nom de famille *
                </label>
                <input
                  type="text"
                  name="child_lastName"
                  placeholder="Nom"
                  className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label htmlFor="child_firstName" className="font-bold">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="child_firstName"
                  placeholder="Prénom"
                  className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5  justify-start">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="schoolLvl" className="font-bold">
                  Niveau Scolaire
                </label>
                <select
                  name="schoolLvl"
                  placeholder="choisissez une option"
                  className="p-2 border-grey-font border text-grey-font rounded-md w-full shadow-sm shadow-grey-font "
                  onChange={handleChange}
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
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="child_age" className="font-bold">
                  Age
                </label>
                <input
                  type="number"
                  name="child_age"
                  placeholder="Age"
                  className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div>
            <hr className="mt-7 mb-2" />
            <p className=" text-default font-bold text-center">2ème enfant</p>
            <button
              className="btn flex justify-center items-center w-28 mx-auto"
              onClick={handleTwoChilds}
            >
              {twoChilds ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
            </button>
          </div>
          {twoChilds ? (
            <div>
              <div className="flex flex-col gap-1 lg:gap-">
                <label htmlFor="twoChild_firstName" className="font-bold">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="twoChild_firstName"
                  placeholder="Prénom"
                  className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="twoChild_schoolLvl" className="font-bold">
                    Niveau Scolaire
                  </label>
                  <select
                    name="twoChild_schoolLvl"
                    placeholder="choisissez une option"
                    className="p-2 border-grey-font border text-grey-font rounded-md w-full shadow-sm shadow-grey-font "
                    onChange={handleChange}
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
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="twoChild_age" className="font-bold">
                    Age
                  </label>
                  <input
                    type="number"
                    name="twoChild_age"
                    placeholder="Age"
                    className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <hr className="mb-7" />
          <button
            type="submit"
            className="p-1 lg:w-[70%] lg:mx-auto text-center btn"
          >
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
