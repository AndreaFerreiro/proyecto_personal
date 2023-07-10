import { Link } from "react-router-dom";
import '../styles/layout/inicio.scss';
import perfil from '../images/perfil-de-usuario.webp';
const Inicio = () => {
  return (
    <main className="general">
      <div className="divTitle">
      <h1 className="title">Tu almacén vitual</h1>
      <Link to="/Perfil" title="Perfil">
      <img className="perfil" src={perfil}></img>
      </Link>
      </div>
      <div className="welcome_reminder">
        <section className="welcome">
          <p>
            Bienvenid@ a tu almacén virtual!! Espero que tengas un buen día.
          </p>
        </section>
        <section className="reminder">
          <p>No tienes recordatorios asignados a esta fecha</p>
        </section>
      </div>
      <section className="sectionsLinks">
        <Link className="sectionsLinks__a" to="/Notas" title="Notas">
          <section className="sectionsLinks__notes sectionsLinks__all">
            <p className="sectionsLinks__notes--text">notas</p>
          </section>
        </Link>
        <Link
          className="sectionsLinks__a"
          to="/Pedidos"
          title="Pedidos"
        >
          <section className="sectionsLinks__calendar sectionsLinks__all">
            <p className="sectionsLinks__calendar--text">pedidos</p>
          </section>
        </Link>
        <Link className="sectionsLinks__a" to="/Almacén" title="Almacen">
          <section className="sectionsLinks__store sectionsLinks__all">
            <p className="sectionsLinks__store--text">almacén</p>
          </section>
        </Link>
      </section>
    </main>
  );
};
export default Inicio;