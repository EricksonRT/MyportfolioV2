import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  // Cuerpo del array
  const [dataForm, setDataForm] = useState({});
  // Seteo de contenido para enviar
  const valueData = (e) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  // Envia el mail con EmailJs
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(dataForm);
    emailjs
      .sendForm(
        "service_3w5ugkt",
        "template_xasifnl",
        form.current,
        "6nBDDJnTvEBU1E8ek"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container">
      <h1 className="header">Contácta conmigo 💻</h1>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form_group">
            <label className="form_label" htmlFor="form-name">
              Nombre
            </label>
            <input
              className="form_input"
              type="text"
              name="user_name"
              id="form-name"
              onChange={valueData}
            />
          </div>
          <div className="form_group">
            <label className="form_label" htmlFor="form-email">
              Correo Electrónico
            </label>
            <input
              className="form_input"
              type="email"
              name="user_email"
              id="form-email"
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
                name="message"
                id="form-textarea-message"
                onChange={valueData}
              ></textarea>
            </div>
          </div>
          <button className="form_btn" type="submit">
            Enviar email
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
