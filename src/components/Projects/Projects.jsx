import { useEffect, useState } from 'react';
import { Get_information } from '../Get_information/Get_information';
import Loading from '../Loading/Loading';
import WorkItemListContainer from '../WorkItemListContainer/WorkItemListContainer';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    Get_information()
      .then((resp) => setData(resp))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <div className="flex text-white">
        <h1>Mis proyectos </h1>
        <br />,
      </div>
      {loading ? (
        <Loading />
      ) : (
        <WorkItemListContainer key={data.id} data={data} />
      )}
    </>
  );
};
export default Projects;
