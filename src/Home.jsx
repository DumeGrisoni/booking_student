import TaxBanner from './Components/TaxBanner.jsx';
import OfferBanner from './Components/OfferBanner.jsx';
import logo from './assets/logo.svg';
import image from './assets/image.jpg';

function Home() {
  return (
    <div className="px-[8rem] my-text flex flex-col gap-[50px]">
      <section className="flex flex-col items-center mx-auto gap-[50px]">
        <TaxBanner />
        <OfferBanner />
      </section>
      <div className="flex">
        {/* SECTION TEXTE */}
        <section className="flex flex-1 flex-col justify-start items-start gap-[30px] text-primary text-justify mb-8">
          <div className="text-headline text-primary flex gap-3 justify-center items-center">
            <img src={logo} alt="Logo" width={80} />
            <h1 className="font-bold">J&apos;accroche </h1>
            <h2 className="text-primary-var-1 text-[70px] font-bold">+</h2>
          </div>
          <h2 className="text-primary-var-1 text-title">Cours particuliers</h2>
          <div className="flex flex-col gap-[30px] text-default">
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
        {/* SECTION IMAGE */}
        <section className="flex-1">
          <img
            src={image}
            alt="photo du professeur"
            className="w-[400px] m-10 mx-auto shadow-lg rounded-md shadow-grey-font"
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
