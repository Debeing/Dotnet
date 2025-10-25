import Archives from "./components/Archives";
import Contributor from "./components/Contributor";
import Footer from "./components/Footer";
import  { Navbar } from "./components/Hero"
import Planing from "./components/Planing";
import WhyCome from "./components/WhyCome";



export default function Home() {
  return (
    <main>
      <Navbar />
      <WhyCome/>
       <Planing/>
      <Contributor/>
      <Archives/>
      <Footer/>
    </main>
  );

}