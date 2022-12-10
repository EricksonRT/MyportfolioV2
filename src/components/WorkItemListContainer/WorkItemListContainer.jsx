const WorkItemListContainer = (props) => {
  const { data } = props;
  // let technologies = '';
  console.log(data);
  return data.map((data) => (
    <div className="container" key={data.id}>
      <div className="">
        <h1>{data.work_title}</h1>
        <h2>{data.work_description}</h2>
        {/* {data.work_technologies.forEach((technologie) =>
          technologies.push(technologie)
        )} */}
        {/* <h5>{technologies}</h5> */}
        <img src={data.work_image} alt={data.work_title} />
      </div>
    </div>
  ));
};
export default WorkItemListContainer;
