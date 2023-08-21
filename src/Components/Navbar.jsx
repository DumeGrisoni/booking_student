import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { name: 'Tarifs', link: '/pricing' },
    { name: 'Présentation', link: '/presentation' },
    { name: 'Contacts', link: '/contact' },
    { name: 'Réserver', link: '/bookings' },
  ];
  return (
    <>
      <nav
        className={` ${
          !isOpen ? 'h-[60px]' : 'h-[300px]'
        } transition-all ease-out duration-300 lg:pt-0 w-full lg:h-[60px] lg:sticky fixed z-10 top-0 right-0 lg:left-0 bg-secondary border-b pb-4 lg:pb-0 border-b-grey-font lg:px-[100px] text-grey-font xl:px-[200px] shadow-md shadow-secondary-blur px-7`}
      >
        {/* Links Container */}
        <div className="flex items-center justify-center lg:justify-between h-full gap-[30px]">
          <div className="flex justify-center items-center text-center">
            {/* LOGO */}
            <NavLink
              exact
              to="/"
              className="lg:relative absolute left-0 top-0  ml-3 mt-3 lg:ml-0 lg:mt-0"
            >
              <span className=" flex items-center justify-center text-title text-primary gap-2 ">
                <img src={Logo} className="lg:w-[50px] w-[25px]" />
                J&apos;accroche{' '}
                <span className="text-primary-var-1 text-[30px]">+</span>
              </span>
            </NavLink>
            {!isOpen ? (
              <FiMenu
                className="text-primary text-font-headline-mobile lg:text-title lg:hidden absolute right-0 top-0 mr-3 mt-3 "
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <AiOutlineClose
                className="text-primary text-font-headline-mobile lg:text-title lg:hidden absolute right-0 top-0 mr-3 mt-3 "
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
          {/* LINKS */}
          <ul
            className={`lg:flex-1 justify-around items-center flex-col lg:flex-row gap-[30px] lg:mt-0 mt-16 transition-all lg:duration-100 duration-300 ease-in-out ${
              isOpen ? 'flex lg:static' : 'flex lg:static top-[-500px] absolute'
            } `}
          >
            {Links.map((link) => (
              <li key={link.name} className="lg:py-0 py-1">
                <NavLink
                  to={link.link}
                  exact
                  className="hover:text-primary-var-1 text-title lg:font-normal font-bold text-grey-font ease-in-out transition-all duration-100"
                  activeClassName="active"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
