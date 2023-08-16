import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebookIcon.svg';
import instagramIcon from '../assets/instagramIcon.svg';
import emailIcon from '../assets/emailIcon.svg';
const Footer = () => {
  return (
    <section className=" h-[80px] lg:h-[150px] flex-col lg:flex-row flex text-title w-full lg:justify-center gap-[50%] items-center border-t border-grey-font">
      {/* LEFT PART > TOP PART */}
      <div className=" text-primary lg:items-start items-center flex flex-col gap-5 lg:gap-7">
        <p>Siret : 952 620 045 00015</p>
        <Link
          to="/"
          className="text-primary-var-1 hover:text-primary transition-all"
        >
          Mentions légales
        </Link>
      </div>
      {/* RIGHT PART > BOTTOM PART */}
      <div className="flex flex-col gap-10 items-center">
        <h2 className="text-primary ">Contacts</h2>
        <ul className="flex gap-10">
          <li>
            <Link to="/">
              <img src={facebookIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={instagramIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={emailIcon} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
