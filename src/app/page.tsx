import Archives from "./components/Archives";
import Footer from "./components/Footer";
import  { Navbar } from "./components/Hero"
import WhyCome from "./components/WhyCome";



export default function Home() {
  return (
    <main>
      <Navbar />
      <WhyCome/>
      <Archives/>
      <Footer/>
    </main>
  );

}