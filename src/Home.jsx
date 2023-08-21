import TaxBanner from './Components/TaxBanner.jsx';
import OfferBanner from './Components/OfferBanner.jsx';
import logo from './assets/logo.svg';
import image from './assets/image.jpg';

function Home() {
  return (
    <div className="px-[2rem] lg:px-[8rem] lg:my-text flex flex-col gap-[20px] lg:gap-[50px]">
      <section className="flex flex-col items-center mx-auto gap-[20px] lg:gap-[50px]">
        <TaxBanner />
        <OfferBanner />
      </section>
      <div className="flex flex-col sm:flex-row">
        {/* SECTION IMAGE */}
        <section className="flex-1 lg:mt-10">
          <img
            src={image}
            alt="photo du professeur"
            className=" w-[250px] lg:w-[400px] m-5 lg:m-10  mx-auto shadow-lg rounded-md shadow-grey-font"
          />
        </section>
        {/* SECTION TEXTE */}
        <section className="flex lg:flex-1 flex-col justify-start items-start gap-[20px] lg:gap-[30px] text-primary text-justify mb-8">
          <div className="text-headline text-primary flex gap-2 lg:gap-3 justify-center items-center">
            <img src={logo} alt="Logo" className="lg:w-[100px] w-[50px] " />
            <h1 className="font-bold">J&apos;accroche </h1>
            <h2 className="text-primary-var-1 text-[50px] lg:text-[100px] font-bold">
              +
            </h2>
          </div>
          <h2 className="text-primary-var-1 text-title">Cours particuliers</h2>
          <div className="flex flex-col gap-[20px] lg:gap-[30px] text-default">
            <p>
              Au sein des établissement les professeurs n&apos;ont pas tous les
              moyens et le temps de mettre en place de nouvelles pédagogies
              favorisant l&apos;hétérogénéité des profils et ce malgré la mise
              en place de la différenciation pédagogique.
            </p>
            <p>
              Je m&apos;appelle Julie, je suis une jeune femme hypersensible
              titulaire de deux masters. En observant mes classes, je me suis
              rendu compte du mal-être de nombreux élèves qui étaient prêts à
              renoncer.
            </p>
            <p>
              Avec J&apos;accroche + j&apos;ai le désire de transmettre un
              soutien aux enfants confrontés à des troubles des apprentissages.
              Mon but aujourd&apos;hui est de libérer les enfants de leurs
              difficultés grâce à la découverte de leur propre fonctionnement
              dans les apprentissages et ainsi les rendre heureux
              d&apos;apprendre de manière efficace.
            </p>
            <p>
              Je me déplace sur la région bastiaise, Entre Bastia et Casamozza
              mais n&apos;hésitez pas à me contacter pour tous renseignements.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
