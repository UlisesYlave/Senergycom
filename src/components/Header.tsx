import "./Header.css";
import {useState} from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <img src="../assets/senergycom-logo.png" alt="senergycom-logo" className="nav-logo" />
      <div className={`nav-items ${isOpen && "open"}`} >
          <a href="#home">Inicio</a>
          <a href="#us">Nosotros</a>
          <a href="#contact">Contacto</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  );
  
}
