import Button from './Utils/Button';

const FormInput = () => {
  return (
    <div className="form-input">
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="p-1 w-full rounded-md border border-grey-font"
      />
      <div className="flex gap-3 w-full">
        <input
          name="postalCode"
          type="text"
          placeholder="Code Postale"
          className="p-1 border-grey-font border rounded-md w-[50%]"
        />
        <input
          name="city"
          type="text"
          placeholder="Ville"
          className="p-1 border-grey-font border rounded-md w-[50%] "
        />
      </div>
      <input
        name="adress"
        type="text"
        placeholder="Adresse"
        className="p-1 w-full border-grey-font border rounded-md"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        className="p-1 w-full border border-grey-font rounded-md"
      />
      <Button>Envoyer</Button>
    </div>
  );
};

export default FormInput;
