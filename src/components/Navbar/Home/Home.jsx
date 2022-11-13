import logo from "../../../assets/img/icons/Copywriter.svg";
const Home = () => {
  return (
    <>
      <div className="container header">
        <h1>Técnico Programador | Desarollador de Software</h1>
        <div className="flex mt-2">
          <img className="img-thumbail" src={logo} alt="logo" />
          <div className="mt-2">
            <h4>
              Esta es la segunda versión de mi portafolio, dentro de él, podrás
              ver las distintas secciones que contienen:
            </h4>
            <ul className="flex__ul">
              <li>Información general sobre mí.</li>
              <li>Mis proyectos, junto con las técnologias utilizadas.</li>
              <li>Trabajos/páginas que desarollé.</li>
              <li>
                Un formulario de contacto por si te interesa enviarme un correo
                o consulta.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
