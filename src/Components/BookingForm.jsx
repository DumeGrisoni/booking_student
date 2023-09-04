/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { supabase } from '../lib/helpers/supabaseClient';
import { useAuth } from '../lib/hooks/Auth';

const BookingForm = (props) => {
  const { user } = useAuth();
  const [childs, setChilds] = useState('');
  const [courses, setCourses] = useState('');
  const [selectedChild, setSelectedChild] = useState();

  useEffect(() => {
    const { data, error } = supabase
      .from('childs')
      .select()
      .eq('user_id', user.id)
      .then((resultChild) => {
        setChilds(resultChild.data);
      });
  }, []);
  const handleChild = (e) => {
    setSelectedChild((prevChilds) => {
      return {
        ...prevChilds,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleCourse = (e) => {
    setCourses((prevCourses) => {
      return {
        ...prevCourses,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    props.onChangeCourses(courses);
    props.onChangeChilds(selectedChild);
  };

  return (
    <form className="form-input font-normal font-sans" onChange={handleChange}>
      <select
        name="courses"
        id="course"
        className="rounded-md border-grey-font border p-2 "
        onChange={handleCourse}
      >
        <option value="default" defaultValue hidden>
          Choisir une option
        </option>
        <option value="cours-1h">Cours particulier 1H</option>
        <option value="cours-8h">Cours particulier 8h</option>
        <option value="cours-8h">Enfant déscolarisé</option>
      </select>
      <select
        name="childs"
        id="childs"
        className="rounded-md border-grey-font border p-2"
        onChange={handleChild}
      >
        <option value="default" defaultValue hidden>
          Nom de l&apos;enfants
        </option>
        {childs?.length > 0 ? (
          childs.map((child) => (
            <option key={child.id} value={child.id}>
              {child.first_name}
            </option>
          ))
        ) : (
          <></>
        )}
      </select>
    </form>
  );
};

export default BookingForm;
