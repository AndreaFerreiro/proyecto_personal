import '../styles/App.scss';
import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import obj from '../images/obj.jpeg';
import { useLocation, matchPath } from 'react-router';
import { Form, Link, Route, Routes, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Inicio from './Inicio';
import Store from './Store';
import Notes from './Notes';
import Orders from './Orders';
import { useEffect, useState } from 'react';
function App() {
  
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route
          path="/Almacén"
          element={
            <Store
            />
          }
        />
        <Route 
        path="/Notas" 
        element={<Notes
           />
          } 
        />
        <Route path="/Pedidos" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
