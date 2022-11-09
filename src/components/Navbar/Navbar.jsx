import logo from "../../assets/img/icons/logoReact.png"
export const Nabvar = () => {
    return <>

        <nav className="nav">
        <div className="nav__logo">
                <a href="#">
                <img src={logo} alt="logo"/>
                 </a>
        </div>
          <label className="nav__label">Menu</label>
          <input type="checkbox" className="nav__check" name="" id="checkMenu" />
        <ul className="nav__ul">
          <li className="nav__itemlist">
                    <a className="nav__itemref" href="#about">Sobre mi</a>
                    <div className="nav--line"></div>
          </li>
          <li className="nav__itemlist">
            <a className="nav__itemref" href="#">Proyectos</a>
          </li>
          <li className="nav__itemlist">
            <a className="nav__itemref" href="#">Trabajos</a>
          </li>
          <li className="nav__itemlist">
            <a className="nav__itemref" href="#">Contacto</a>
            </li>
        </ul>
      </nav>

    </>
}