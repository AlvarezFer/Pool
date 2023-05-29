import React from "react";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contacto</h3>
            <p>Teléfono: +1-123-456-7890</p>
            <p>Email: info@marbellapiscinas.com</p>
            <p>Dirección: 1234 Calle Principal, Ciudad, País</p>
          </div>
          <div className="col-md-4">
            <h3>Enlaces rápidos</h3>
            <ul>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#portafolio">Portafolio</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Síguenos en redes sociales</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/piscinasconstructor">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/piscinasconstructor">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/piscinasconstructor">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                © {new Date().getFullYear()} Marbella Piscinas. Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
