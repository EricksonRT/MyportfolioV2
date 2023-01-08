const AddToFirebase=()=>{
    return(<>
    <div className="container">
      <h1 className="header">Nuevo elemento</h1>
      <div className="form">
        <form  >
          <div className="form_group">
            <label className="form_label" htmlFor="">
              Nombre
            </label>
            <input
              className="form_input"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="form_group">
            <label className="form_label" htmlFor="|">
              Correo Electrónico
            </label>
            <input
              className="form_input"
              type="email"
              name=""
              id=""
              
            />
          </div>
          <div className="form_group">
            <label className="form_label" htmlFor="">
              Asunto
            </label>
            <select
              className="form_select"
              name=""
              id=""
              
            >
              <option defaultValue="none">
                Selecciona el que se ajuste a su motivo
              </option>
              <option value="Desarrollo Web">Desarrollo de sitio web</option>
              <option value="Consulta">Consulta</option>
              <option value="Propuesta">Propuesta</option>
              <option value="Asunto particular">Otro</option>
            </select>
            <div className="form_group">
              <label className="form_label" htmlFor="">
                Describe tu mensaje
              </label>
              <textarea
                className="form_textarea"
                name="message"
                id=""
                
              ></textarea>
            </div>
          </div>
          <button
            
            className="form_btn"
            type="submit">
            Enviar email
          </button>
        </form>
      </div>
    </div>
    </>)
}
export default AddToFirebase;