/* eslint-disable no-unused-vars */
import { useAuth } from '../../lib/hooks/Auth';
import { supabase } from '../../lib/helpers/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Admin = () => {
  const [childs, setChilds] = useState();
  useEffect(() => {
    try {
      const { data, error } = supabase
        .from('childs')
        .select()
        .then((resultChild) => {
          setChilds(resultChild.data);
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      alert(error);
    }
  }
  const navigate = useNavigate();
  const { user } = useAuth();
  const id = import.meta.env.VITE_SUPABASE_ID;
  return (
    <div>
      {user.id === id ? (
        <div className="flex flex-col gap-7 lg:px-[4rem] px-[2rem] text-default text-primary">
          <div>
            <button className="btn p-1" onClick={handleSignOut}>
              Déconnexion
            </button>
          </div>
          <div className="flex flex-col gap-7">
            <div>{user.user_metadata.name}</div>
            <div>Tous les enfants</div>
            <div className="flex flex-col gap-3">
              {childs?.map((child) => (
                <div key={child.id} className="flex flex-row gap-7">
                  <span>{child.first_name}</span>
                  <span>{child.last_name}</span>
                  <span>{child.age}</span>
                  <span>{child.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>{navigate('/')}</>
      )}
    </div>
  );
};

export default Admin;
