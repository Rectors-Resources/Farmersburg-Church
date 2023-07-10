import { Outlet } from "react-router-dom";
import NavBar from "./assets/components/navBar/NavBar";
import Footer from "./assets/components/footer/footer";


function App() {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer/>
    </>
  );
}

export default App;
