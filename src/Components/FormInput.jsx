import Button from '../Components/Button.jsx';

const FormInput = () => {
  return (
    <div className="form-input">
      <input
        placeholder="Email"
        className="p-1 w-full rounded-md border border-grey-font"
      />
      <div className="flex gap-3">
        <input
          placeholder="Code Postale"
          className="p-1 border-grey-font border rounded-md"
        />
        <input
          placeholder="Ville"
          className="p-1 border-grey-font border rounded-md flex-1 "
        />
      </div>
      <input
        placeholder="Adresse"
        className="p-1 w-full border-grey-font border rounded-md"
      />
      <textarea
        placeholder="Message"
        className="p-1 w-full border border-grey-font rounded-md"
      />
      <Button>Envoyer</Button>
    </div>
  );
};

export default FormInput;
