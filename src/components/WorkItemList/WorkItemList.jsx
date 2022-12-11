const WorkItemList = (props) => {
  const { data } = props;
  return (
    <div className="list-card_card">
      <h1>{data.work_title}</h1>
      <p className="list-card_description">{data.work_description}</p>
      {/* {data.work_technologies.forEach((technologie) =>
    technologies.push(technologie)
  )} */}
      {/* <h5>{technologies}</h5> */}
      <img
        className="list-card_img"
        src={data.work_image}
        alt={data.work_title}
      />
    </div>
  );
};
export default WorkItemList;
