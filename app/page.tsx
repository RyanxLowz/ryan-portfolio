import { Footer, Navbar } from "@/(components)";
import {
  About,
  Projects,
  Experiences,
  Hero,
  WhatsNew,
} from "../sections";

export default function Main() {
  return (
    <main className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Projects />
      </div>
      <div className="relative">
        <Experiences />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <div className="relative">
        <Footer />
        <div className="gradient-03 z-0" />
      </div>
    </main>
  );
}
