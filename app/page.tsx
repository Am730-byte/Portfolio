import About from "../components/About";
import Tech from "../components/Tech";
import Works from "../components/Works";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import CyberBackground from "../components/CyberBackground";
import Header2 from "../components/ui/header2";

export default function Home() {
  return (
    <CyberBackground>
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Header2 />
        <About />
        <Tech />
        <Works />
        <Experience />
        <Contact />
      </div>
    </CyberBackground>
  );
}
