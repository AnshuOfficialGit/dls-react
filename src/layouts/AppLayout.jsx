import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import Header from "../components/common/Header";
const AppLayout = () => {
  const location = useLocation();
  return (
    <>
      <Nav />
      {location.pathname === "/" ? <Header /> : ""}
      <div className="main-content">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default AppLayout;
