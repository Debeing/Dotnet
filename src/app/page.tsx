import Archives from "./components/Archives";
import Contributor from "./components/Contributor";
import Expert from "./components/Expert";
import Footer from "./components/Footer";
import  { Navbar } from "./components/NavBar"
import Planing from "./components/Planing";
import Teams from "./components/Member";
import WhyCome from "./components/WhyCome";
import Hero from "./components/Hero";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Teams />
      <WhyCome/>
       <Planing/>
       <Expert/>
      <Contributor/>
      <Archives/>
      <Footer/>
    </main>
  );

}