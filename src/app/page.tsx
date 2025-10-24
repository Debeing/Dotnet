import Archives from "./components/Archives";
import Footer from "./components/Footer";
import  { Navbar } from "./components/Hero"



export default function Home() {
  return (
    <main>
      <Navbar />
      <Archives/>
      <Footer/>
    </main>
  );

}