import { useState } from 'react';
import AddJob from './AddJob';
import AddProject from './AddProject';

const AddToFirebase = () => {
  const [type, setType] = useState('');
  // Retorna el componente 1 o 2 dependiendo del valor
  const optionSelected = (type) => {
    return type === 'AddProject' ? <AddProject /> : <AddJob />;
  };
  // Setea el tipo
  const selectOption = (e) => {
    setType(e.target.value);
  };
  return (
    <>
      {type === '' ? (
        <div className="container">
          <h1 className="header">Selección de tipo</h1>
          <select
            className="form_select"
            name="select-type"
            id="select-type"
            onChange={selectOption}
          >
            <option value="-">Selección</option>
            <option value="AddProject">Nuevo Proyecto</option>
            <option value="AddJob">Nuevo trabajo</option>
          </select>
        </div>
      ) : (
        optionSelected(type)
      )}
    </>
  );
};
export default AddToFirebase;
