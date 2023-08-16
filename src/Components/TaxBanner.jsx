import Button from './Button';

const TaxBanner = () => {
  return (
    // BANNER PROMO
    <section className="flex flex-col items-center text-center justify-center gap-[30px] w-[550px] font-bold">
      <h1 className="text-headline text-primary">
        50% <br /> de déduction d&apos;impôts pour tous !
      </h1>
      <h2 className="text-title text-primary-var-1 w-[80%]">
        J’accroche + est une entreprise déclarée !
      </h2>
      <Button onClick={console.log('ca marche')}>
        Voir la démarche à suivre
      </Button>
    </section>
  );
};

export default TaxBanner;
