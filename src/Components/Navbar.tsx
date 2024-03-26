import React, { useEffect, useState } from "react";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

import { IoMdSearch } from "react-icons/io";
import RoFlag from "../assets/flag/ro-flag.svg";

import useRoutesHelper from "../hooks/useRoutesHelper";
import layoutConstants from "../constants/layoutConstants";

import logo from "../assets/netflix-logo.png";
import avatar from "../assets/avatar-svgrepo-com.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const navbarPages = [
  { id: 1, name: "Pagina principala", url: "/" },
  { id: 2, name: "Seriale", url: "/serials" },
  { id: 3, name: "Filme", url: "/movies" },
  { id: 4, name: "Noi si populare", url: "/new-and-popular" },
  { id: 5, name: "Lista mea", url: "/my-list" },
  { id: 6, name: "Rasfoieste dupa limba", url: "/search-by-language" },
];

function Navbar() {
  const { currentUrl } = useRoutesHelper();

  const [activeLink, setActiveLink] = useState<string>("/");

  useEffect(() => {
    const paramsStartingIndex = currentUrl.indexOf("?");

    const getSlicedString = () => {
      if (paramsStartingIndex > 0) {
        return currentUrl.substring(0, paramsStartingIndex);
      }
      return currentUrl;
    };

    setActiveLink(`/${getSlicedString()}`);
  }, [currentUrl]);

  return (
    <>
      <nav
        style={{ height: layoutConstants.NAVBAR_HEIGHT }}
        className="bg-netflix-black fixed top-0  w-full z-50 flex flex-row items-center pr-[60px] pl-[60px] py-3"
      >
        <Link to="/">
          <img src={logo} alt="logo" width={80} className="mr-5" />
        </Link>

        <div className="flex flex-row justify-between items-center w-full">
          <ul className="flex flex-row ">
            {navbarPages.map((page) => {
              return (
                <Link
                  key={page.id}
                  to={page.url}
                  className={`${
                    page.url === activeLink
                      ? "navbar-btn-selected"
                      : "navbar-btn"
                  }`}
                >
                  {page.name}
                </Link>
              );
            })}
          </ul>

          <div className="flex flex-row items-center">
            <IoMdSearch className="text-white text-[30px] cursor-pointer" />
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneIcon
                color="action"
                style={{
                  color: "white",
                  fontSize: 30,
                  marginLeft: 20,
                }}
              />
            </Badge>

            <img
              src={avatar}
              alt="avatar"
              className="w-[35px] ml-[20px] cursor-pointer"
            />
            <img
              src={RoFlag}
              alt="romania"
              className="w-[30px] ml-[20px] cursor-pointer"
            />
          </div>
        </div>
      </nav>
      <div
        style={{
          height: layoutConstants.NAVBAR_HEIGHT,
        }}
      />
    </>
  );
}

export default Navbar;
