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
  
const getAllProductsApi = async () => {
    const fetchApi = await fetch ('http://localhost:4000/api/products');
    const dataJson = await fetchApi.json();
    return dataJson;
}
  
const objToExport = { sendToApi:sendToApi, getAllProductsApi:getAllProductsApi};
  
export default objToExport;