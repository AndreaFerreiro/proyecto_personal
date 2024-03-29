import '../styles/layout/store.scss';
import obj from '../images/obj.jpeg';
import { useState, useEffect } from 'react';
import lupa from '../images/lupa.png';
import añadir from '../images/añadir.png';
import ls from '../services/localStorage';
import api from '../services/api';
import GetAvatar from './GetAvatar';
const Store = () => {
  const [showSearch, setShowSearch] = useState('collapsed');
  const [showAdd, setShowAdd] = useState('collapsed');
  const [productList, setProductList] = useState(ls.get('products', []));
  let element = {
    name: '',
    ref: '',
    img:'',
    category: '',
    stock: '',
  };
  useEffect(() => {
    api.getAllProducts()
    .then(dataJson => {
        setProductList(dataJson);
    })
  }, [])
  console.log(productList)
  const [product, setProduct] = useState(element);
  useEffect(() => {
    ls.set('products', productList);
  }, [productList]);
  const handleNewProduct = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };
  const handleAddProduct = (event) => {
    setProductList([...productList, product]);
    api.addProduct(product)
      .then( (dataCreate) => {
          if( dataCreate.success === true ) {
            setProduct({
              name: '',
              ref: '',
              img:'',
              category: '',
              stock: '',
            });
            setShowAdd( 'collapsed' );
            api.getAllProducts()
            .then( (dataGetProducts) => {
                setProductList(dataGetProducts);
            });
          }else{
            return('Ha habido un error')
          }  
      })
  };
  const [nameSearch, setNameSearch] = useState('');
  const [catSearch, setCatSearch] = useState('');
  const handleSearchName = (ev) => {
    const search = ev.target.value;
    setNameSearch(search.toLowerCase());
  };
  const handleSearchCat = (ev)=>{
    const search = ev.target.value;
    setCatSearch(search.toLowerCase());
  }
  const [range, setRange] = useState('10');
  const handleRangeStock = (ev) => {
    const rangeStock = ev.target.value;
    setRange(rangeStock);
  };
  /*
  const filteredProducts = productList
    .filter((eachProduct) =>
      eachProduct.name.includes(nameSearch)
    )
    .filter((eachProduct) => 
      eachProduct.category.includes(catSearch)
    );
    //.filter((eachProduct) => parseInt(eachProduct.stock) <= parseInt(range));*/
  const renderList = () => {
    return productList.map((eachProduct) => {
      return (
        <li key={eachProduct._id} className="data__containerlist--element">
          <article className={parseInt(eachProduct.stock)>parseInt(range)?"dataelement":"dataelement warning"}>
            <div className="dataelement__img">
              <img className="dataelement__img--src" src={eachProduct.img} />
            </div>
            <div className="dataelement__text">
              <p className="dataelement__text--title">{eachProduct.name}</p>
              <div className="dataelement__text--ref">
                <p className="dataelement__text--questionref">Ref:</p>
                <p className="dataelement__text--answerref">
                  {eachProduct.ref}
                </p>
              </div>
              <div className="dataelement__text--cat">
                <p className="dataelement__text--questioncat">Categoría:</p>
                <p className="dataelement__text--answercat">
                  {eachProduct.category}
                </p>
              </div>
              <div className="dataelement__text--stock">
                <p className="dataelement__text--questionstock">Stock:</p>
                <p className="dataelement__text--answerstock">
                  {eachProduct.stock}
                </p>
              </div>
              <div className='dataelement__emojis'>
                <span id={eachProduct._id} className='dataelement__emojis--trash' onClick={deleteProduct()}>🗑</span>
                <span id={eachProduct._id} className='dataelement__emojis--edit'>✏️</span>
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
      img:'',
      categorie: '',
      stock: '',
    });
  };
  const handleShowSearch = (ev) => {
    ev.preventDefault();
    if (showSearch === 'collapsed') {
      setShowSearch('');
      setShowAdd('collapsed');
    } else if (showSearch === '') {
      setShowSearch('collapsed');
    }
  };
  const handleShowAdd = (ev) => {
    ev.preventDefault();
    if (showAdd === 'collapsed') {
      setShowAdd('');
      setShowSearch('collapsed');
    } else if (showAdd === '') {
      setShowAdd('collapsed');
    }
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const productImg = product.img
  const handleImg = (productImg) => {
    handleNewProduct('image', productImg);
  };
  const deleteProduct = () => {
    api.deleteFromApi()
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
          <form
            onSubmit={handleSubmit}
            className="sectionForms__searchForm--form"
          >
            <input
              className="input js_in_search_desc sectionForms__form--input"
              type="text"
              placeholder="Artículo"
              id="name"
              value={nameSearch}
              onInput={handleSearchName}
            />
            <select onSelect={handleSearchCat} className="input sectionForms__form--input">
              <option value="">Todos</option>
              <option value="cat1">Cat1</option>
              <option value="cat2">Cat2</option>
            </select>
            <label htmlFor="range" className="sectionForms__form--label">
              <span>Stock máximo</span>
              <input
                onChange={handleRangeStock}
                htmlFor="range"
                type="range"
                min="0"
                max="100"
                list="stockmarks"
                className="sectionForms__form--range"
                value={range}
              ></input>
              <datalist id="stockmarks">
                <option value="0" label="0" />
                <option value="10" />
                <option value="20" />
                <option value="30" />
                <option value="40" />
                <option value="50" label="50" />
                <option value="60" />
                <option value="70" />
                <option value="80" />
                <option value="90" />
                <option value="100" label="100" />
              </datalist>
            </label>
            <span>{range}</span>
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
            <GetAvatar
              text="Subir foto de articulo"
              avatar={product.img}
              updateAvatar={handleImg}
              id="img"
            />
            <label className="sectionForms__addForm--label">
              <span>En que categoría deseas colocarlo?</span>
              <input
                className="sectionForms__addForm--input input_cat"
                type="text"
                placeholder="Categoria"
                id="category"
                name="category"
                list="categoryList"
                onInput={handleNewProduct}
                value={product.category}
              />
              <datalist id="categoryList">
                <option value="Cat1"></option>
                <option value="Cat2"></option>
              </datalist>
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
      {/*
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
  </section>*/}
      <section className="data">
        <h4 className='data__title'>Productos almacenados</h4>
        <ul className="data__containerlist">{renderList()}</ul>
      </section>
    </main>
  );
};
export default Store;
