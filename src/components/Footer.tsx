import "./Footer.css";

export function Footer() {
  return (
    <footer id="footer">
        <img className="nav-logo"src="/assets/senergycom-logo.png" alt="senergycom-logo" />
        <div className="footer-menu">
            <section>
                <h2>Ubicación</h2>
                <h3>Av. Jose Leal 527 Of. D Lince-Lima</h3>
            </section>
            <section>
                <h2>Correo</h2>
                <h3>jantayhua@senergycom.com</h3>
            </section>
            <section>
                <h2>Teléfono</h2>
                <h3>(+51) 994009344</h3>
            </section>    
        </div>
        
    </footer>
  );
}