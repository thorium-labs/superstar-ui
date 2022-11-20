import React, { PropsWithChildren } from "react";
import NavMenu from "../NavMenu";
import "./Layout.css";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="layout min-h-screen flex flex-col justify-between items-center">
      <NavMenu />
      <main className="main max-w-6xl flex-1 py-4 px-0">{children}</main>
      <footer className="footer bg-zinc-900 min-h-8 flex items-center justify-center w-full p-4"></footer>
    </div>
  );
};

export default Layout;
