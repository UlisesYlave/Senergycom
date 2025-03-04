import './App.css';
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import {Contact} from "./components/Contact";
import {Us} from "./components/Us";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main >
        <div className="hook">
          <section className="hook-text">
            <h1>Senergycom</h1>
            <h2>Conectando tu mundo con confianza</h2>
            <h3>Nos dedicamos a las areas de <strong>energía</strong>,</h3>
            <h3><strong>seguridad electrónica y cableado</strong></h3>
            <a href="#services">Conócenos</a>
          </section>
          <img src="/assets/security-shield.png" alt="security-shield" />
        </div>
        <Services />
        <Us/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
