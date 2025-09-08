
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Honors from "./components/Honors";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
//

export default function App() {
  return (

    <div className="font-sans bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Experience />
      <Honors />
      <ContactForm />
      <Footer />
    </div>
  );
}
