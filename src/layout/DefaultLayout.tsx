import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


function DefaultLayout() {

  return (
    <div className=" flex flex-col min-h-[100vh] max-w-[1920px] m-[0_auto]">
      <Header />
      <div className="flex-1 ">
       <Outlet />  
      </div>
      <Footer />
    </div>
    
  );
}

export default DefaultLayout;
