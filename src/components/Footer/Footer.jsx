import Wave from '../../assets/img/icons/Wave/Wave';
import logo from '../../assets/img/icons/Wave.svg';
export const Footer = () => {
  return (
    <>
      <div className="header">
        {/* <div className="inner-header flex">
          <h1>Simple CSS Waves</h1>
        </div> */}
        <Wave />
      </div>
      <div className="content flex">
        <p>
          <b>Mi portafolio</b>|
        </p>
        <p>realizado por Erick Irusta</p>
      </div>
      <div className="flex"></div>
    </>
  );
};
export default Footer;
