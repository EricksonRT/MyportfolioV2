import Wave from "../../assets/img/icons/Wave/Wave";
import logoGithub from "../../assets/img/icons/social/github.svg";
import logolinkedin from "../../assets/img/icons/social/linkedin.svg";
import logoEmail from "../../assets/img/icons/social/mail.svg";
import logoPhone from "../../assets/img/icons/social/smartphone.svg";
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
      <div className="flex-icons">
        <div className="flex-icons_end">
          <img
            className="flex-icons__icon-social-end"
            src={logoGithub}
            alt="icon-github"
          />
          <img
            className="flex-icons__icon-social-end"
            src={logolinkedin}
            alt="icon-linkedin"
          />
        </div>
        <div className="flex">
          <img
            className="flex-icons__icon-social"
            src={logoEmail}
            alt="icon-email"
          />
          <p>ericlaureano.irusta@gmail.com</p>
        </div>
        <div className="flex">
          <img
            className="flex-icons__icon-social"
            src={logoPhone}
            alt="icon-phone"
          />
          <p>+54 1122517800</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
