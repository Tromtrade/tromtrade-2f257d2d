import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCallButton from "./StickyCallButton";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <StickyCallButton />
  </div>
);

export default Layout;
