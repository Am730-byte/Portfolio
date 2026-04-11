import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "../components";

export default function Home() {
  return (
    <main style={{ width: "100%", background: "#050816", position: "relative", zIndex: 0 }}>
      <div style={{ width: "100%", background: "#050816" }}>
        <Navbar />
        <Hero />
      </div>

      <About />
      <Tech />
      <Works />

      <div style={{ position: "relative", zIndex: 0 }}>
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  );
}
