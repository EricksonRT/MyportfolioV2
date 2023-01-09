import { useState } from 'react';

const AddProject = () => {
  const [technologies, setTechnologies]=useState([]);
  const [data, setData] = useState({
    work_title: '',
    work_image: '',
    work_description: ''
  });
// Guarda los campos de data
  const saveTech=(e)=>{
    setTechnologies([...technologies,  e.target.value]);
  }
// Guarda las technologias usadas
  const saveData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  // objeto final, adjuntando las tecnologias
  const [dataFinal, setDataFinal]=useState({});

const submitFirebase=(e)=>{
e.preventDefault();
// Se combina data + techonolgies sube a firebase
setDataFinal({...data, technologies});
console.log(dataFinal);
}
  console.log(technologies);
  return (
    <div className="form">
      <form onSubmit={submitFirebase}>
        <div className="form_group">
          <label className="form_label" htmlFor="">
            Titulo del proyecto
          </label>
          <input className="form_input" type="text" name="work_title" id="work_title" onChange={saveData}/>
        </div>
        <div className="form_group">
          <label className="form_label" htmlFor="">
            Imagen de fondo
          </label>
          <input
            className="form_input"
            type="text"
            name="work_image"
            id="work_image"
            placeholder="nombre.jpg"
            onChange={saveData}
          />
        </div>
        <div className="form_group">
          <div className="form_group">
            <label className="form_label" htmlFor="">
              Descripción
            </label>
            <textarea className="form_textarea" name="work_description" id="work_description" onChange={saveData}></textarea>
          </div>
        </div>
        <div className="form_group">
          <div className="form_group">
            <label className="form_label" htmlFor="">
              Tecnologias usadas
            </label>
            <div className="flex-tech">
              <input type="radio" name="" id="" value='html' onChange={saveTech}/>
              HTML
              <input type="radio" name="" id="" value='css' onChange={saveTech} />
              CSS
              <input type="radio" name="" id="" value='js' onChange={saveTech}/>
              JS
              <input type="radio" name="" id="" value='sass' onChange={saveTech}/>
              SASS
              <input type="radio" name="" id="" value='react' onChange={saveTech}/>
              React
              <input type="radio" name="" id="" value='mysql' onChange={saveTech}/>
              MySql
              <input type="radio" name="" id="" value='firebase'onChange={saveTech} />
              Firebase
              <input type="radio" name="" id="" value='bootstrap' onChange={saveTech}/>
              Bootstrap
            </div>
          </div>
        </div>

        <button className="form_btn" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};
export default AddProject;
