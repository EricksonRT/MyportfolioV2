import { useState } from 'react';

const AddProject = () => {
  const [data, setData] = useState({
    work_title: '',
    work_image: '',
    work_description: '',
    work_technologies: [''],
  });
  const saveData = (e) => {
    setData;
  };
  return (
    <div className="form">
      <form>
        <div className="form_group">
          <label className="form_label" htmlFor="">
            Titulo del proyecto
          </label>
          <input className="form_input" type="text" name="" id="" />
        </div>
        <div className="form_group">
          <label className="form_label" htmlFor="">
            Imagen de fondo
          </label>
          <input
            className="form_input"
            type="text"
            name=""
            id=""
            placeholder="nombre.jpg"
          />
        </div>
        <div className="form_group">
          <div className="form_group">
            <label className="form_label" htmlFor="">
              Descripción
            </label>
            <textarea className="form_textarea" name="message" id=""></textarea>
          </div>
        </div>
        <div className="form_group">
          <div className="form_group">
            <label className="form_label" htmlFor="">
              Tecnologias usadas
            </label>
            <div className="flex-tech">
              <input type="checkbox" name="" id="" value={'html'} />
              HTML
              <input type="checkbox" name="" id="" value={'css'} />
              CSS
              <input type="checkbox" name="" id="" value={'js'} />
              JS
              <input type="checkbox" name="" id="" value={'sass'} />
              SASS
              <input type="checkbox" name="" id="" value={'react'} />
              React
              <input type="checkbox" name="" id="" value={'mysql'} />
              MySql
              <input type="checkbox" name="" id="" value={'firebase'} />
              Firebase
              <input type="checkbox" name="" id="" value={'bootstrap'} />
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
