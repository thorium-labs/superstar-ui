import React, { PropsWithChildren } from "react";
import NavMenu from "../NavMenu";
import "./Layout.css";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="layout min-h-screen flex flex-col justify-between items-center">
      <NavMenu />
      <main className="main max-w-6xl flex-1 p-4 w-full">{children}</main>
    </div>
  );
};

export default Layout;
