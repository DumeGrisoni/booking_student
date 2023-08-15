import TaxBanner from './Components/TaxBanner.jsx';
import OfferBanner from './Components/OfferBanner.jsx';

function Home() {
  return (
    <div className="px-[8rem] my-text">
      <div className="flex">
        <section className="flex-col justify-between items-center mx-auto">
          <TaxBanner />
          <OfferBanner />
        </section>
      </div>
    </div>
  );
}

export default Home;
