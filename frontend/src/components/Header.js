import Logo2 from '../images/LogoAlmacenBlanco.png';
import '../styles/layout/header.scss';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <Link to="/" title="Inicio">
        <img className="header__logo" src={Logo2} />
      </Link>
      {pathname !== '/' && (
        <nav>
          <ul className="header__list">
            <Link to="/Almacén" title="Almacén">
              <li className="header__list--element">almacén</li>
            </Link>
            <Link to="/Notas" title="Notas">
              <li className="header__list--element">notas</li>
            </Link>
            <Link to="/Pedidos" title="Pedidos">
              <li className="header__list--element">pedidos</li>
            </Link>
            <Link to="/Inicio" title="Inicio">
              <li className="header__list--element">inicio</li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
