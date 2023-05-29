import React from "react";
import "../Styles/main.css";

const Description = () => {
  return (
    <>
      <div className="sobre-nosotros" id="nosotros">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una empresa especializada en la construcción de piscinas
          personalizadas y de alta calidad. Nuestro objetivo es crear espacios
          acuáticos que reflejen los sueños y deseos de nuestros clientes.
        </p>
        <hr />
        <h3>Nuestra Historia</h3>
        <p>
          Nuestra empresa fue fundada hace 10 años por un grupo de amigos
          apasionados por la construcción de piscinas. Desde entonces, hemos
          construido cientos de piscinas en todo el país, siempre manteniendo
          los más altos estándares de calidad y satisfacción del cliente.
        </p>
        <hr />

        <h3>Nuestra Filosofía</h3>
        <p>
          Creemos en la importancia de escuchar a nuestros clientes y trabajar
          estrechamente con ellos para crear el diseño de la piscina perfecta.
          Además, nos comprometemos a utilizar solo los materiales de la más
          alta calidad y a cumplir siempre con los plazos acordados.
        </p>
        <hr />

        <h3>Nuestros Servicios</h3>
        <ul>
          <li>Hormigon</li>
          <li>Naturales</li>
          <li>Desbordantes</li>
        </ul>
        <hr />
        <br />
        <h4>Testimonios</h4>
        <br />
        <div className="testimonios-container">
          <div className="testimonio">
            <ul>
              <li>
                "El equipo de construcción hizo un trabajo increíble con mi
                nueva piscina. La piscina es hermosa y el proceso de
                construcción fue sin problemas. Definitivamente recomendaría
                esta empresa a cualquiera que esté buscando construir una
                piscina". - Lucas Haendel
              </li>
            </ul>
          </div>
          <div className="testimonio ">
            <ul>
              <li>
                "Gracias al equipo de construcción por hacer realidad mi sueño
                de tener una piscina en mi patio trasero. Ahora puedo disfrutar
                de mi piscina todo el verano con mi familia y amigos". - Sofia
                Vargas
              </li>
            </ul>
          </div>
          <div className="testimonio">
            <ul>
              <li>
                "La construcción se completó en tiempo récord y el equipo fue
                extremadamente profesional y atento a cada una de mis
                necesidades. ¡Recomiendo altamente esta empresa de construcción
                de piscinas a cualquiera que esté buscando construir la piscina
                de sus sueños!". - Martin Castro
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Description;
