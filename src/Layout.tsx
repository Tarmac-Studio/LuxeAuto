import React, { ReactNode } from "react";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
