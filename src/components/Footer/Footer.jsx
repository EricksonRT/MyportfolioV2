import Wave from "../../assets/img/icons/Wave/Wave";
import logo from "../../assets/img/icons/Wave.svg";
export const Footer = () => {
  return (
    <>
      <div className="header">
        {/* <div className="inner-header flex">
          <h1>Simple CSS Waves</h1>
        </div> */}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={0}
                fill="rgba(37, 146, 255)" //onda1
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(61, 138, 214,0.5)" //onda2
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255,255,255,0.3)" //onda3
              />
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      <div className="content flex">
        <p>
          <b>Mi portafolio</b>|
        </p>
        <p>realizado por Erick Irusta</p>
      </div>
    </>
  );
};
export default Footer;
