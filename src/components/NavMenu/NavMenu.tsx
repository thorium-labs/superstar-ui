import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../providers/AppProvider";
import { LinkButton } from "../Buttons";
import { ArrowRight, Cross, DotsVertical, Logo } from "../Icons";
import Connect from "../Icons/Connect";
import Disconnect from "../Icons/Disconnect";
import "./NavMenu.css";

const NavMenu: React.FC = () => {
  const [menu, setMenu] = useState<"open" | "close">("close");
  const { connectWallet, clientAddr, disconnectWallet } = useAppContext();

  const menuLinks = [
    {
      link: "/",
      text: "Home",
      sum: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      src: "/assets/home.png",
    },
    {
      link: "/ticket",
      text: "Buy Tickets",
      sum: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      src: "/assets/tickets.png",
    },
    {
      link: "/results",
      text: "Results",
      sum: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      src: "/assets/results.png",
    },
    {
      link: "/about",
      text: "About",
      sum: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      src: "/assets/about.png",
    },
  ];

  return (
    <>
      <nav
        className={clsx(
          "nav min-h-8 p-4 flex items-center justify-between w-full bg-zinc-900 sticky top-0 z-20",
          menu === "open" && "blur-md"
        )}
      >
        <button onClick={() => setMenu("open")}>
          <DotsVertical className="w-[24px] h-[24px]" />
        </button>
        <Link to="/" className="flex items-center justify-center">
          <Logo className="logo" />
          <p className="text-xl">
            <span className="text-ss-orange-500">SUPER</span>
            <span className="text-orange-500">STAR</span>
          </p>
        </Link>
        {clientAddr ? (
          <LinkButton onClick={disconnectWallet}>
            <Disconnect className="w-[24px] h-[24px] hover:fill-ss-orange-500" />
          </LinkButton>
        ) : (
          <LinkButton onClick={connectWallet}>
            <Connect className="w-[26px] h-[26px] hover:fill-ss-orange-500" />
          </LinkButton>
        )}
      </nav>
      <div
        className={clsx(
          "absolute z-30 h-screen w-screen bg-zinc-700/50",
          menu,
          menu == "open" ? "flex" : "hidden"
        )}
      >
        <ul className={clsx("relative w-full h-full z-40 flex")}>
          <button
            onClick={() => setMenu("close")}
            className="border border-zinc-50 rounded-full absolute top-5 left-5 p-2 z-40 hover:border-orange-500"
          >
            <Cross className="h-[24px] w-[24px] hover:fill-orange-500" />
          </button>
          {menuLinks.map(({ link, text, sum, src }, i) => {
            return (
              <React.Fragment key={`menu-${i}`}>
                <li className="nav-li relative flex-1 transition-all duration-300">
                  <Link
                    to={link}
                    className="nav-link flex items-start justify-center flex-col px-4 gap-2 h-full transition-all duration-300 hover:bg-gradient-to-b from-transparent via-transparent to-zinc-500/70"
                  >
                    <img
                      className="nav-link-img opacity-0 transition-all w-[4rem] duration-300"
                      alt={link}
                      src={src}
                    />
                    <p className="nav-link-text text-3xl font-bold transition-all duration-300">
                      {text}
                    </p>
                    <p className="nav-link-sum text-sm text-zinc-400 transition-all duration-300">
                      {sum}
                    </p>
                    <button className="nav-link-button border border-zinc-600 p-2 rounded-full transition-all duration-300">
                      <ArrowRight className="fill-white w-6 h-6" />
                    </button>
                  </Link>
                </li>
                {i != menuLinks.length - 1 && (
                  <span className="block h-full w-[1px] bg-zinc-600/50" />
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
