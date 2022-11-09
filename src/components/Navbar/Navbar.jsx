import { useEffect } from "react"
import logo from "../../assets/img/icons/logoReact.png"
export const Nabvar = () => {
  useEffect(() => {
    const checkUpdate = () => {
      let checkMenu = document.querySelector("#checkMenu");
      if (screen.width < 616) checkMenu.checked=false
    }
    window.addEventListener("resize", (checkUpdate))
    return (() => {
      window.removeEventListener("resize", checkUpdate)
    })

  }, [])
    return <>
        <nav className="nav">
        <div className="nav__logo">
                <a href="#">
                <img src={logo} alt="logo"/>
                 </a>
        </div>
          <label className="nav__label">Menu</label>
          <input type="checkbox" className="nav__check" name="checkMenu" id="checkMenu" />
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