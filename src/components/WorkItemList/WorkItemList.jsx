const WorkItemList = (props) => {
  const { data } = props;
  return (
    <div className="list-card_card">
      <h1 className="text-center">{data.work_title}</h1>
      <div className="list-card_img_container">
        <img
          className="list-card_img"
          src={data.work_image}
          alt={data.work_title}
        />
      </div>
      <div className="list-card_container">
        <p className="list-card_description text-justify line-height">
          {data.work_description}
        </p>
        <hr />
        <div className="flex">
          <div className="list-card_technologies">
            <h5>{"< Técnologias usadas />"}:</h5>
          </div>
          <div className="">
            <h5>asdkasdkjs, sfksdf, sdfsd, ldklsdkfl, asdjk</h5>
          </div>
        </div>
      </div>
      {/* {data.work_technologies.forEach((technologie) =>
    technologies.push(technologie)
  )} */}
      {/* <h5>{technologies}</h5> */}
    </div>
  );
};
export default WorkItemList;
