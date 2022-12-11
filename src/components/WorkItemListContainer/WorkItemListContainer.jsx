import WorkItemList from "../WorkItemList/WorkItemList";

const WorkItemListContainer = (props) => {
  const { data } = props;
  return (
    <div className="container">
      <div className="list-card">
        {data.map((data) => (
          <WorkItemList key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
export default WorkItemListContainer;
