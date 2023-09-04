/* eslint-disable no-unused-vars */
import { useAuth } from '../../lib/hooks/Auth';
import { supabase } from '../../lib/helpers/supabaseClient';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ParentInfos from '../../Components/Clients/ParentInfos';

const Profile = () => {
  const [childs, setChilds] = useState();
  const { user, session } = useAuth();

  useEffect(() => {
    const { data, error } = supabase
      .from('childs')
      .select()
      .eq('user_id', user.id)
      .then((resultChild) => {
        console.log(resultChild);
        setChilds(resultChild.data);
      });
  }, []);

  const navigate = useNavigate();
  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      alert(error);
    }
  }
  console.log(childs);
  return (
    <div className="flex flex-col gap-7 lg:px-[4rem] px-[2rem] text-default text-primary">
      {session ? (
        <div className="flexflex-col gap-3 lg:gap-7 p-3 xl:p-16">
          <section className="flex justify-between w-full">
            <div className="mb-16">
              <button className="btn p-1" onClick={handleSignOut}>
                Déconnexion
              </button>
            </div>
            <div>
              <NavLink to="/profile/enfant" className="external-link">
                Ajouter un enfant ?
              </NavLink>
            </div>
          </section>
          {/* PARENT */}
          <ParentInfos />
          <div className="flex gap-3 mt-7">
            <span className="text-primary-var-1 font-bold">• Enfant(s) : </span>
            <span className="flex flex-col gap-3">
              {childs?.map((child) => (
                <p key={child.id}>{child.first_name}</p>
              ))}
            </span>
          </div>
          {/* ENFANTS */}
          <div className="flex flex-col gap-7 mt-16">
            <div className="flex justify-between w-full">
              <h2 className="text-title font-bold">Vos enfants</h2>
            </div>
            <hr />
            {childs?.length > 0 ? (
              <div>
                {childs?.map((child) => (
                  <div key={child.id} className="flex flex-col gap-7 mb-7">
                    <div className="flex justify-end items-end">
                      <button className="btn p-1">
                        <NavLink to={`/update/${child.id}`}>Modifier</NavLink>
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Nom de Famille :{' '}
                      </span>
                      <span>{child?.last_name}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Prénom :{' '}
                      </span>
                      <span>{child?.first_name}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Age :{' '}
                      </span>
                      <span>{child?.age} ans</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Niveau Scolaire :{' '}
                      </span>
                      <span className="uppercase">{child?.class}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Hobbies :{' '}
                      </span>
                      <span>{child?.hobbies}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Besoins spécifiques :{' '}
                      </span>
                      <span>{child?.needs}</span>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <span>Vous n&apos;avez pas d&apos;enfants</span>
                <div>
                  <NavLink to="/profile/enfant" className="external-link">
                    Ajouter un enfant ?
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        navigate('/')
      )}
    </div>
  );
};

export default Profile;
