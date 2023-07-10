import '../styles/layout/store.scss';
import obj from '../images/obj.jpeg';
import { useState } from 'react';
import lupa from '../images/lupa.png';
import añadir from '../images/añadir.png';
const Store = () => {
  //buscador
  //colapsar o mostrar
  const [showSearch, setShowSearch] = useState('collapsed');
  const [showAdd, setShowAdd] = useState('collapsed');
  const [productList, setProductList] = useState([]);
  let element = {
    name: '',
    ref: '',
    categorie: '',
    stock: '',
  };
  const [product, setProduct] = useState(element);
  const handleNewProduct = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };
  const handleAddProduct = (event) => {
    setProductList([...productList, product]);
  };
  const renderList = () => {
    return productList.map((eachProduct) => {
      return (
        <li key={product.ref} className="data__containerlist--element">
          <article className="dataelement">
            <div className="dataelement__img">
              <img className="dataelement__img--src" src={obj} />
            </div>
            <div className="dataelement__text">
              <p className="dataelement__text--title">{product.name}</p>
              <div className="dataelement__text--ref">
                <p className="dataelement__text--questionref">Ref:</p>
                <p className="dataelement__text--answerref">{product.ref}</p>
              </div>
              <div className="dataelement__text--cat">
                <p className="dataelement__text--questioncat">Categoría:</p>
                <p className="dataelement__text--answercat">
                  {product.categorie}
                </p>
              </div>
              <div className="dataelement__text--stock">
                <p className="dataelement__text--questionstock">Stock:</p>
                <p className="dataelement__text--answerstock">
                  {product.stock}
                </p>
              </div>
            </div>
          </article>
        </li>
      );
    });
  };
  const handleResetProduct = (ev) => {
    ev.preventDefault();
    setProduct({
      name: '',
      ref: '',
      categorie: '',
      stock: '',
    });
  };
  const handleShowSearch = (ev) => {
    ev.preventDefault();
    if (showSearch === 'collapsed') {
      setShowSearch('');
      setShowAdd('collapsed')
    } else if (showSearch === '') {
      setShowSearch('collapsed');
    }
  };
  const handleShowAdd = (ev) => {
    ev.preventDefault();
    if (showAdd === 'collapsed') {
      setShowAdd('');
      setShowSearch('collapsed')
    } else if (showAdd === '') {
      setShowAdd('collapsed');
    }
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <main>
      <section className="container">
        <img
          src={lupa}
          title="buscar articulo"
          className={`container__searchButtonStore`}
          onClick={handleShowSearch}
        ></img>
        <img
          src={añadir}
          title="buscar articulo"
          className={`container__searchButtonStore`}
          onClick={handleShowAdd}
        ></img>
      </section>
      <section className="sectionForms">
        <div className={`sectionForms__searchForm ${showSearch}`}>
          <p className="sectionForms__searchForm--title">
            ¿Qué artículo necesitas?
          </p>
          <form className="sectionForms__searchForm--form">
            <input
              className="input js_in_search_desc sectionForms__form--input"
              type="text"
              placeholder="Artículo"
              id="name"
            />
            <input
              className="input js_in_search_race sectionForms__form--input"
              type="text"
              name="ref"
              placeholder="Ref"
              id="ref"
            />
          </form>
        </div>
        <div className={`sectionForms__add ${showAdd}`}>
          <p className="sectionForms__title">Añadir nuevo artículo</p>
          <form onSubmit={handleSubmit} className="sectionForms__addForm">
            <label className="sectionForms__addForm--label" id="name">
              <span id="name">Nombre del artículo:</span>
              <input
                className="sectionForms__addForm--input input_name"
                type="text"
                placeholder="Nombre articulo"
                id="name"
                name="name"
                onInput={handleNewProduct}
                value={product.name}
              />
            </label>
            <label className="sectionForms__addForm--label" id="ref">
              <span id="ref">Referencia del artículo:</span>
              <input
                className="sectionForms__addForm--input input_ref"
                type="text"
                placeholder="Ref"
                id="ref"
                name="ref"
                onInput={handleNewProduct}
                value={product.ref}
              />
            </label>
            <label className="sectionForms__addForm--label" id="categorie">
              <span id="categorie">En que categoría deseas colocarlo?</span>
              <input
                className="sectionForms__addForm--input input_cat"
                type="text"
                placeholder="Categoria"
                id="categorie"
                name="categorie"
                onInput={handleNewProduct}
                value={product.categorie}
              />
            </label>
            <label className="sectionForms__addForm--label" id="stock">
              <span id="stock">Con cuánto stock cuentas?</span>
              <input
                className="sectionForms__addForm--input input_stock"
                type="number"
                placeholder="Stock"
                id="stock"
                name="stock"
                onInput={handleNewProduct}
                value={product.stock}
              />
            </label>
            <p className="articleform__message"></p>
            <input
              className="sectionForms__addForm--submit"
              type="submit"
              value="Añadir artículo a la lista"
              onClick={handleAddProduct}
            />
            <button
              onClick={handleResetProduct}
              className="sectionForms__addForm--reset"
            >
              <i className="fa-regular fa-trash-can articleform__reset--trash"></i>
              Reset
            </button>
          </form>
        </div>
      </section>
      <section className="title-categories">
        <p className="categories__title">categorias</p>
      </section>
      <section className="categories">
        <article className="categories__cat1 categories__cat">
          <p>CAT1</p>
        </article>
        <article className="categories__cat2 categories__cat">
          <p>CAT2</p>
        </article>
        <article className="categories__cat3 categories__cat">
          <p>CAT3</p>
        </article>
        <article className="categories__cat4 categories__cat">
          <p>CAT4</p>
        </article>
        <article className="categories__cat5 categories__cat">
          <p>CAT5</p>
        </article>
        <article className="categories__cat6 categories__cat">
          <p>CAT6</p>
        </article>
      </section>
      <section className="data">
        <ul className="data__containerlist">
          {renderList()}
          <li className="data__containerlist--element">
            <article className="dataelement">
              <div className="dataelement__img">
                <img className="dataelement__img--src" src={obj} />
              </div>
              <div className="dataelement__text">
                <p className="dataelement__text--title">Artículo 1</p>
                <div className="dataelement__text--ref">
                  <p className="dataelement__text--questionref">Ref:</p>
                  <p className="dataelement__text--answerref">75854878</p>
                </div>
                <div className="dataelement__text--cat">
                  <p className="dataelement__text--questioncat">Categoría:</p>
                  <p className="dataelement__text--answercat">Objetos</p>
                </div>
                <div className="dataelement__text--stock">
                  <p className="dataelement__text--questionstock">Stock:</p>
                  <p className="dataelement__text--answerstock">20</p>
                </div>
              </div>
            </article>
          </li>
          <li className="data__containerlist--element">
            <article className="dataelement">
              <div className="dataelement__img">
                <img className="dataelement__img--src" src={obj} />
              </div>
              <div className="dataelement__text">
                <p className="dataelement__text--title">Articulo 2</p>
                <div className="dataelement__text--ref">
                  <p className="dataelement__text--questionref">Ref:</p>
                  <p className="dataelement__text--answerref">75854879</p>
                </div>
                <div className="dataelement__text--cat">
                  <p className="dataelement__text--questioncat">Categoría:</p>
                  <p className="dataelement__text--answercat">Objetos</p>
                </div>
                <div className="dataelement__text--stock">
                  <p className="dataelement__text--questionstock">Stock:</p>
                  <p className="dataelement__text--answerstock">20</p>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </main>
  );
};
export default Store;
