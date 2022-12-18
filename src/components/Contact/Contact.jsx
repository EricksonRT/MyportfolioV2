import { useState } from "react";
import sendLogo from "./../../assets/img/icons/send.svg";
const Contact = () => {
  const [dataForm, setDataForm] = useState({});
  const valueData = (e) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(dataForm);
  };
  return (
    <div className="container">
      <h1 className="header">Contácta conmigo 💻</h1>
      <div className="form">
        <form action="">
          <div className="form_group">
            <label className="form_label" htmlFor="form-name">
              Nombre
            </label>
            <input
              className="form_input"
              type="text"
              name="form-name"
              id="form-name"
              onChange={valueData}
              required
            />
          </div>
          <div className="form_group">
            <label className="form_label" htmlFor="form-email">
              Correo Electrónico
            </label>
            <input
              className="form_input"
              type="email"
              name="form-email"
              id="form-email"
              required
              onChange={valueData}
            />
          </div>
          <div className="form_group">
            <label className="form_label" htmlFor="form-select-subject">
              Asunto
            </label>
            <select
              className="form_select"
              name="form-select-subject"
              id="form-select-subject"
              onChange={valueData}
            >
              <option defaultValue="none" required={true}>
                Selecciona el que se ajuste a su motivo
              </option>
              <option value="Desarrollo Web">Desarrollo de sitio web</option>
              <option value="Consulta">Consulta</option>
              <option value="Propuesta">Propuesta</option>
              <option value="Asunto particular">Otro</option>
            </select>
            <div className="form_group">
              <label className="form_label" htmlFor="form-textarea-message">
                Describe tu mensaje
              </label>
              <textarea
                className="form_textarea"
                name="form-textarea-message"
                id="form-textarea-message"
                onChange={valueData}
              ></textarea>
            </div>
          </div>
          <button className="form_btn" onClick={sendEmail} type="submit">
            Enviar email
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
