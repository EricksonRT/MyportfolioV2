import { useEffect, useState } from "react";
import { Get_information } from "../Get_information/Get_information";
import Loading from "../Loading/Loading";
import WorkItemListContainer from "../WorkItemListContainer/WorkItemListContainer";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Get_information()
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <div className="flex">
        <h1>Mis proyectos </h1>,
      </div>
      {loading ? <Loading /> : <WorkItemListContainer />}
    </>
  );
};
export default Projects;
