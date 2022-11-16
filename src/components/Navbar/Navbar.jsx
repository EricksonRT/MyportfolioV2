import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/icons/Logo_portfolio.png';
import logoToggle from '../../assets/img/icons/menu_gugel.svg';
export const Nabvar = () => {
  useEffect(() => {
    const checkUpdate = () => {
      let checkMenu = document.querySelector('#checkMenu');
      // if (screen.width < 670) checkMenu.checked=false
      checkMenu.checked = screen.width < 670 ? true : false;
    };
    window.addEventListener('resize', checkUpdate);
    return () => {
      window.removeEventListener('resize', checkUpdate);
    };
  }, []);
  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <img className="nav__img" src={logoToggle} alt="checkMenu" />
        <input
          type="checkbox"
          className="nav__check"
          name="checkMenu"
          id="checkMenu"
        />
        <ul className="nav__ul">
          <li className="nav__itemlist">
            <Link className="nav__itemref active" to="/about/">
              <b>Sobre mi</b>
            </Link>
            <div className="nav--line"></div>
          </li>
          <li className="nav__itemlist">
            <Link className="nav__itemref" to="/projects/">
              <b>Proyectos</b>
            </Link>
          </li>
          <li className="nav__itemlist">
            <Link className="nav__itemref" to="/jobs/">
              <b>Trabajos</b>
            </Link>
          </li>
          <li className="nav__itemlist">
            <Link className="nav__itemref" to="/contact/">
              <b>Contacto</b>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
