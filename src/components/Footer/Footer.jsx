import Wave from "../../assets/img/icons/Wave/Wave";
import logoGithub from "../../assets/img/icons/social/github.svg";
import logolinkedin from "../../assets/img/icons/social/linkedin.svg";
import logoEmail from "../../assets/img/icons/social/mail.svg";
import logoPhone from "../../assets/img/icons/social/smartphone.svg";
export const Footer = () => {
  const fecha = new Date();
  return (
    <>
      <div className="header">
        <Wave />
      </div>
      {/* content flex */}
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
      <div className="content flex">
        <p>
          <b>Mi portafolio</b>|
        </p>
        <p> &#169; 2022 - {fecha.getFullYear()} realizado por Erick Irusta</p>
      </div>
    </>
  );
};
export default Footer;
