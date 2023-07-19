import { Link } from "react-router-dom";
import '../styles/layout/landingpage.scss';
import Logo1 from '../images/LogoAlmacenNegro.png';
const Landing = () => {
  return (
    <main className="landingpage">
      <section className="landingContainer">
        <img
          className="landingContainer__logo"
          src={Logo1}
        />
        <article className="landingContainer__article">
          <p className="landingContainer__article--title">
            Crea tu almacén virtual
          </p>
          <p className="landingContainer__article--paragraph">
            Stock, recordatorios, pedidos y mucho más
          </p>
        </article>
        <Link to="/Inicio">
          <button className="landingContainer__buttom">Comenzar</button>
        </Link>
      </section>
    </main>
  );
};
export default Landing;