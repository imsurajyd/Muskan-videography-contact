import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-(--background) text-(--text) font-sans selection:bg-(--gold) selection:text-black">
      <Navbar />

      <Hero />

      <Services />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
