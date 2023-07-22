import { Link } from "react-router-dom";
import '../styles/layout/inicio.scss';
import perfil from '../images/perfil-de-usuario.webp';
import contenedores from '../images/contenedores.jpeg';
const Inicio = () => {
  return (
    <main className="general">
      <aside className="aside">
        <section className="divTitle">
          <h1 className="title">Tu almacén virtual</h1>
          <Link to="/Perfil" title="Perfil">
            <img className="perfil" src={perfil}></img>
          </Link>
        </section>
        <div className="containerLists">
          <section className="nav">
          <ul className="nav__list">
            <Link to="/Almacén" className="nav__list--element"><li>Almacén</li></Link>
            <Link to="/Notas" className="nav__list--element"><li>Notas</li></Link>
            <Link to="/Pedidos" className="nav__list--element"><li>Pedidos</li></Link>
          </ul>
        </section>
        <section className="config">
          <ul className="config__list">
            <li className="config__list--element">Configuración</li>
          </ul>
        </section>
        </div>
      </aside>
      <section className="principal">
        <article className="hero">
          <h1 className="hero__title">Todos tus productos bajo control</h1>
          <p className="hero__description">Deja a un lado las desordenadas libretas y crea tu propio almacén virtual. 
            Controla el stock de tus productos, no te dejes atrás ningún pedido y toma notas de todo lo que necesites.
            Ahora lo tienes más fácil que nunca con <strong>Tu Almacén Virtual</strong>!!
          </p>
        </article>
        <article className="containerImg">
          <img className="containerImg__img" src={contenedores}></img>
        </article>
      </section>
    </main>
  );
};
export default Inicio;