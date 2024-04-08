import Image from "next/image";
import Navbar from "./component/Navbar";
import LandingSection from  "@/app/(home)/component/landingSection";
import Skills from "./component/Skills";
import Projects from "./component/Project";
import Footer from "./component/Footer";


export default function Home() {
  return (
      <div className="min-h-screen bg-black overflow-hidden">
          <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
              <div className="max-w-7xl mx-auto p-5 ">
                    <Navbar/>
                    <LandingSection/>
              </div>
              <div className="h-10 x1:h-32 bg-gradixent-to-t from-black absolute -bottom-5 left-0 x1:bottom-0 w-full"></div>              
          </div>
          <div className="max-w-7xl mx-auto p-5 mt-20">
                <Skills/>
                <Projects/>
                <Footer/>
          </div>
      </div>                  
  );
}
