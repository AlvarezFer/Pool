import imgChildren from "../imagenes/children.jpeg";
import piscinaGreen from "../imagenes/piscinaagua.jpeg";
import piscinaNat from "../imagenes/piscinanat.jpeg";
import piscinaRel from "../imagenes/piscina2.jpeg";
import piscinaLent from "../imagenes/piscinalent.jpeg";
import piscinaMano from "../imagenes/piscinamano.jpeg";
import "../Styles/header.css";

const Header = () => {
  return (
    <>
      <div className="cont-title">
        {" "}
        <h1 className="title">Construimos la piscina de tus sueños</h1>{" "}
      </div>
      <div className="container-img">
        <div className="container-row">
          <div className="container-div">
            <img src={imgChildren} alt="Imagen de niños en la piscina" />
          </div>
          <div className="container-div">
            <img src={piscinaGreen} alt="Imagen de piscina" />
          </div>
          <div className="container-div">
            <img src={piscinaRel} alt="Imagen de piscina" />
          </div>
        </div>
        <div className="container-row">
          <div className="container-div">
            <img src={piscinaMano} alt="Imagen de piscina" />
          </div>
          <div className="container-div">
            <img src={piscinaNat} alt="Imagen de piscina" />
          </div>
          <div className="container-div">
            <img src={piscinaLent} alt="Imagen de piscina" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
