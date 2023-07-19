import { useEffect, useState } from 'react';
import '../styles/layout/listapedidos.scss';
import añadir from '../images/añadir.png';
import pedido from '../images/paquete.jpeg';
import ls from '../services/localStorage';
const Orders = () => {
  const [showForm, setShowForm] = useState('collapsed');
  const [ordersList, setOrdersList] = useState (ls.get('orders',[]));
  let element ={
    article:'',
    ref:'',
    amount:'',
    date:'',
    pickupdate:'',
    name:'',
    tel:''
  }
  const [Order, setOrder] = useState (element);
  useEffect(() => {
    ls.set('orders', ordersList);
  }, [ordersList]);
  const handleNewOrder = (ev) => {
    setOrder({...Order, [ev.target.id]: ev.target.value})
  };
  const handleAddOrder = (ev) => {
    setOrdersList ([...ordersList, Order]);
    setOrder(element);
    setShowForm('collapsed');
  }
  const renderList = () =>{
    return ordersList.map((eachOrder) => {
      return(
        <li key={eachOrder.ref} className="sectionlist__list--element">
            <div className='element__img'>
              <img className='element__img--src' src={pedido}></img>
            </div>
            <div className='element__info'>
              <span>{eachOrder.pickupdate}</span>
              <span>{eachOrder.article}</span>
              <span>{eachOrder.ref}</span>
              <span>{eachOrder.amount}</span>
              <span>{eachOrder.date}</span>
              <span>{eachOrder.name}</span>
              <span>{eachOrder.tel}</span>
            </div>
          </li>
      )
    })
  }
  const handleShowForm = (ev) => {
    ev.preventDefault();
    if (showForm === 'collapsed'){
      setShowForm ('');
    } else {
      setShowForm ('collapsed');
    }
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <main className="mainpedidos">
      <h2 className="mainpedidos__title">Pedidos <img src={añadir} onClick={handleShowForm} className="mainpedidos__buttomadd" title='Nuevo Pedido'></img></h2>
      <section className={`mainpedidos__sectionform ${showForm}`}>
        <form onSubmit={handleSubmit} className="formadd">
          <label className="formadd__label" id="article" name="article">
            <span>Nombre del Artículo:</span>
            <input
              className="formadd__label--input"
              type="text"
              placeholder="artículo"
              name=""
              id="article"
              onInput={handleNewOrder}
              value={Order.article}
            />
          </label>
          <label className="formadd__label" id="ref" name="ref">
          <span>Referencia del Artículo:</span>
            <input
              className="formadd__label--input"
              type="text"
              placeholder="ref"
              name="ref"
              id="ref"
              onInput={handleNewOrder}
              value={Order.ref}
            />
          </label>
          <label className="formadd__label" id="amount" name="amount">
          <span>Número de Artículos:</span>
            <input
              className="formadd__label--input"
              type="number"
              placeholder="cantidad"
              name="amount"
              id="amount"
              onInput={handleNewOrder}
              value={Order.amount}
            />
          </label>
          <label className="formadd__label" id="date" name="date">
          <span>Fecha pedido:</span>
            <input
              className="formadd__label--input"
              type="date"
              name="date"
              id="date"
              onInput={handleNewOrder}
              value={Order.date}
            />
          </label>
          <label className="formadd__label" id="pickupdate" name="pickupdate">
          <span>Fecha recogida:</span>
            <input
              className="formadd__label--input"
              type="date"
              name="pickupdate"
              id="pickupdate"
              onInput={handleNewOrder}
              value={Order.pickupdate}
            />
          </label>
          <label className="formadd__label" id="name" name="name">
          <span>Nombre del Cliente:</span>
            <input
              className="formadd__label--input"
              type="text"
              placeholder="nombre"
              name="name"
              id="name"
              onInput={handleNewOrder}
              value={Order.name}
            />
          </label>
          <label className="formadd__label" id="tel" name="tel">
          <span>Teléfono de contacto</span>
            <input
              className="formadd__label--input"
              type="number"
              placeholder="tel"
              name="tel"
              id="tel"
              onInput={handleNewOrder}
              value={Order.tel}
            />
          </label>
          <input className="formadd__submit" type="submit" value="Guardar" onClick={handleAddOrder}/>
        </form>
      </section>
      <section className="sectionlist">
        <ul className="sectionlist__list">
          {renderList()}
        </ul>
      </section>
    </main>
  );
};
export default Orders;