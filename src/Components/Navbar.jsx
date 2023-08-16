import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className=" h-[50px] max-h-[50px] sticky top-0 left-0 w-full bg-secondary border-b border-b-grey-font text-grey-font lg:px-[200px]">
      <ul className="hidden lg:flex h-full justify-between items-center text-default ">
        <li>
          <NavLink
            exact
            to="/"
            className="flex items-center justify-center gap-2 "
          >
            <img src={Logo} width={37} />
            <span className="text-font-title-desktop text-primary flex gap-2 ">
              J&apos;accroche{' '}
              <span className="text-primary-var-1 text-font-headline-desktop">
                +
              </span>
            </span>
          </NavLink>
        </li>
        <li className="hover:text-primary-var-1 transition-all">
          <NavLink activeClassName="active" to="/pricing">
            Tarifs
          </NavLink>
        </li>
        <li className="hover:text-primary-var-1 transition-all">
          <NavLink activeClassName="active" to="/presentation">
            Présentation
          </NavLink>
        </li>
        <li className="hover:text-primary-var-1 transition-all">
          <NavLink activeClassName="active" to="/contact">
            Nous Contacter
          </NavLink>
        </li>
        <li className="hover:text-primary-var-1 transition-all">
          <NavLink activeClassName="active" to="/bookings">
            Réserver
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
