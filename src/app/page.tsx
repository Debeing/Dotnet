import Archives from "./components/Archives";
import Contributor from "./components/Contributor";
import Expert from "./components/Expert";
import Footer from "./components/Footer";
import  { Navbar } from "./components/NavBar"
import Planing from "./components/Planing";
import WhyCome from "./components/WhyCome";
import Hero from "./components/Hero";
import They from "./components/They";
import Member from "./components/Member";
import Archive_1 from "./components/Archive_1";



export default function Home() {
  return (
    <main className=" min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Member/>
      <WhyCome/>
       <Planing/>
       <Expert/>
      <Contributor/>
      <They/>
      <Archives/>
      <Archive_1/>
      <Footer/>
    </main>
  );

}