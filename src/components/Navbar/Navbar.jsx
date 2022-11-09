import logo from "../../assets/img/icons/logoReact.png"
export const Nabvar = () => {
    return <>

        <nav className="nav">
        <div className="nav__logo">
                <a href="#">
                <img src={logo} alt="logo"/>
                 </a>
            </div>
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
                <input type="checkbox" className="nav__check" name="" value="X" id=""/>
        </ul>
      </nav>

    </>
}