import logo from "../../../assets/img/icons/Copywriter.svg";
const Home = () => {
  return (
    <>
      <div className="container header">
        <h1>Un poco de mí...</h1>
        <div className="flex mt-10">
          <img className="img-thumbail" src={logo} alt="logo" />
          <div className="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            ipsam alias ex eveniet laudantium mollitia eaque id? Aperiam, minus.
            Itaque fugit obcaecati dolorum quo, alias accusamus fuga! Quo, cum
            aspernatur?
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
