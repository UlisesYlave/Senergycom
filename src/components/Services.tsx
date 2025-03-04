import "./Services.css";

export function Services() {
  return (
    <section id="services">
        <h2 className="services-title">Nuestros servicios</h2>
        <h3>Ofrecemos un amplio soporte de estas tecnologías</h3>
        <section className="service-list">
            <article>
                <h2>Energía</h2>
                <h3>✅ <strong>Infraestructura para Data Centers: </strong>
                    Diseño e implementación segura y eficiente.</h3>
                <h3>✅ <strong>Instalaciones Eléctricas Internas: </strong> 
                    Construcción y optimización de sistemas eléctricos.</h3>
                <h3>✅ <strong>Puesta a Tierra y Apantallamiento: </strong>
                    Protección y estabilidad para sistemas eléctricos.</h3>
            </article>

            <article>
                <h2>Seguridad Electrónica</h2>
                <h3>✅ <strong>Detección de Incendios: </strong> 
                    Sistemas de alerta temprana para prevenir emergencias.</h3>
                <h3>✅ <strong>Control de Acceso: </strong> 
                    Gestión segura de entradas y salidas.</h3>
                <h3>✅ <strong>CCTV (Circuito Cerrado de Televisión): </strong>
                    Monitoreo en tiempo real con cámaras de seguridad.</h3>
                <h3>✅ <strong>Sensores Biométricos: </strong>
                    Acceso mediante huellas, rostro o iris.</h3>
            </article>

            <article>
                <h2>Cableado Estructurado</h2>
                <h3>✅ <strong>Diseño, suministro, instalación y certificación de:</strong></h3>
                <h3>🔹Cableado estructurado: Categorías 5e, 6, 6a, 7, 7a</h3>
                <h3>🔹 Fibra óptica: Monomodo y multimodo (interiores y exteriores).</h3>
                <h3>🔹 Gabinetes de comunicaciones: Para infraestructura organizada y segura.</h3>
            </article>
        </section>
    </section>
  );
}