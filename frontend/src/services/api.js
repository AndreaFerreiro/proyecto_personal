const sendToApi = (data) => {
    return fetch('http://localhost:4000/api/products', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' },
    })
    .then((response) => response.json())
    .then((data) => {
        return data;
    });
    
};
const deleteFromApi = () => {
    return fetch ('http://localhost:4000/api/products', {
        method: 'DELETE',
        headers: {'content-type':'application/json'},
    })
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al eliminar el producto');
        }
      })
      .then(data => {
        console.log('Producto eliminado:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}
const editProductApi = (data) => {
    return fetch ('http://localhost:4000/api/products', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al actualizar el producto');
        }
      })
      .then(data => {
        console.log('Producto actualizado:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}
const getAllProductsApi = async () => {
    const fetchApi = await fetch ('http://localhost:4000/api/products');
    const dataJson = await fetchApi.json();
    return dataJson;
}
  
const objToExport = { sendToApi:sendToApi, getAllProductsApi:getAllProductsApi, deleteFromApi:deleteFromApi, editProductApi:editProductApi};
  
export default objToExport;