import picture from '../../assets/img/perfil_.png';
export const About = () => {
  return (
    <>
      <div className="container header slide-in-left">
        <h1 className="">Un poco de mi...</h1>
        <div className="flex">
          <div className="card-img">
            <img src={picture} alt="imagen de perfl" />
          </div>
          <div className="description">
            <h3>
              Mi llamo Erick Irusta, aunque legalmente es Eric. <br />
              Me gusta estar constamente aprendiendo cosas nuevas, y mejorar en
              las que ya sé. Dedico buen tiempo a pensar en que proyectos podria
              hacer, o buscar información sobre lo que tengo interés.
            </h3>
            <h3>
              También me gusta intercambiar ideas con distintas personas para
              aprender, y mejorar mi lenguaje y habilidades técnicas.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
