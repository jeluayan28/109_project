import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { logo, menu, close } from '../assets';

const NewNavbar = ({ onStatusClick, onNewsClick, onLogoutClick }) => { // Added onLogoutClick as a prop
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const newNavLinks = [
    { id: "status", title: "Status", onClick: onStatusClick }, // Add onClick function here
    { id: "news", title: "News", onClick: onNewsClick }, // Add onClick function here
    { id: "logout", title: "Logout", onClick: onLogoutClick }, // Add onClick function here
  ];

  return (
    <nav className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-black text-[18px] font-Montserrat font-bold cursor-pointer flex">
            Senior Bridge
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {newNavLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-black"
              } hover:text-customPurple text-[18px] font-Montserrat font-bold cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                if (link.onClick) link.onClick(); // Call onClick function for Status, News, and Logout
              }}
            >
              <div>{link.title}</div>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {newNavLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-black" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    if (link.onClick) link.onClick(); // Call onClick function for Status, News, and Logout
                  }}
                >
                  <div>{link.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
