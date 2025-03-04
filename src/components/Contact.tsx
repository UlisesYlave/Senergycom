import "./Contact.css";

export function Contact() {
  return (
    <section id="contact">
        <h2>Contáctese con nosotros</h2>
        <h3>Permítanos ayudarlo contamos con la mejor calidad.</h3>
          <div className="contact-list">
            <img src="..//assets/contact.png" alt="man-typing"/>
            <form action="https://formsubmit.co/braulises1606@gmail.com" method="POST">
                <label>Contactar por aquí</label>
                <input type="text" name="text" placeholder="Nombre" />
                <input type="email" name="email" placeholder="Correo" />
                <input type="tel" name="tel" placeholder="Teléfono"/>
                <textarea placeholder="Mensaje" name="message"></textarea>
                <button id="contact-button" type="submit">Enviar</button>

                <input type="hidden" name="_next" value="http://localhost:5173/"/>
                <input type="hidden" name="_captcha" value="false"/>
            </form> 
          </div>
    </section>  
  );
}