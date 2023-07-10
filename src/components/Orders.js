import { useState } from 'react';
import '../styles/layout/listapedidos.scss';
const Orders = () => {
  const [showForm, setShowForm] = useState('collapsed');
  const handleShowForm = (ev) => {
    ev.preventDefault();
    if (showForm === 'collapsed'){
      setShowForm ('');
    } else {
      setShowForm ('collapsed');
    }
  }
  return (
    <main className="mainpedidos">
      <h2 className="mainpedidos__title">Pedidos</h2>
      <buttom onClick={handleShowForm} className="mainpedidos__buttomadd">Nuevo pedido</buttom>
      <section className="mainpedidos__sectionform collapsed">
        <form className="formadd">
          <label className="formadd__label" id="article" name="article">
            <input
              className="formadd__label--input"
              type="text"
              placeholder="artículo"
              name=""
              id=""
            />
          </label>
          <label className="formadd__label" id="ref" name="ref">
            <input
              className="formadd__label--input"
              type="text"
              placeholder="ref"
              name="ref"
              id="ref"
            />
          </label>
          <label className="formadd__label" id="amount" name="amount">
            <input
              className="formadd__label--input"
              type="number"
              placeholder="cantidad"
              name="amount"
              id="amount"
            />
          </label>
          <label className="formadd__label" id="date" name="date">
            <input
              className="formadd__label--input"
              type="date"
              placeholder="fecha pedido"
              name="date"
              id="date"
            />
          </label>
          <label className="formadd__label" id="pickupdate" name="pickupdate">
            <input
              className="formadd__label--input"
              type="date"
              placeholder="fecha recogida"
              name="pickupdate"
              id="pickupdate"
            />
          </label>
          <label className="formadd__label" id="name" name="name">
            <input
              className="formadd__label--input"
              type="text"
              placeholder="nombre cliente"
              name="name"
              id="name"
            />
          </label>
          <label className="formadd__label" id="tel" name="tel">
            <input
              className="formadd__label--input"
              type="number"
              placeholder="teléfono contacto"
              name="tel"
              id="tel"
            />
          </label>
          <input className="formadd__submit" type="submit" value="Guardar" />
        </form>
      </section>
      <section className="sectionlist">
        <ul className="sectionlist__list">
          <li className="sectionlist__list--element">
            <p>Nombre Artículo</p>
            <p>Ref</p>
            <p>Cantidad</p>
            <p>Fecha pedido</p>
            <p>Fecha recogida</p>
            <p>Nombre cliente</p>
            <p>Teléfono de contacto</p>
            {/*checkbox*/}
          </li>
        </ul>
      </section>
    </main>
  );
};
export default Orders;