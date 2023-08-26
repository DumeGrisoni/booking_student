import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Login = () => {
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        providers={[]}
        localization={{
          variables: {
            sign_in: {
              email_label: 'Votre adresse Email',
              email_input_placeholder: 'Votre Email',
              password_label: 'Votre mot de passe',
              password_input_placeholder: 'Mot de passe',
              button_label: 'Connexion',
              link_text: "Vous n'avez pas encore de compte ? Inscrivez-vous",
            },
            forgotten_password: {
              link_text: 'Mot de passe oublié ?',
            },
            sign_up: {
              link_text: 'Vous avez déjà un compte ? Connectez-vous',
            },
          },
        }}
        appearance={{
          theme: ThemeSupa,
          className: {
            container: ' flex justify-center items-center p-10 ',
            button: ' px-16 max-w-[200px]',
          },
          style: {
            button: { background: '#4D56A5', color: '#EBEBDE' },
          },
        }}
      />
    </div>
  );
};

export default Login;
