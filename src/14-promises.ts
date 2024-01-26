import axios from 'axios';

(async () => {

  // Función que devuelve una promesa que se resuelve después de un tiempo específico
  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise;
  }

  // Función que realiza una solicitud GET utilizando axios
  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  // Función asíncrona que utiliza await para esperar la respuesta de una solicitud GET con axios
  async function getProductsAsync() {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    return response.data;
  }

  // Bloque principal ejecutado de manera asíncrona
  console.log('---'.repeat(10));

  // Espera 3000 milisegundos utilizando la función delay
  const delayResponse = await delay(3000);
  console.log(delayResponse);

  console.log('---'.repeat(10));

  // Realiza una solicitud GET y muestra la respuesta
  const productsResponse = await getProducts();
  console.log(productsResponse.data);

  // Realiza una solicitud GET utilizando la función asíncrona getProductsAsync y muestra la respuesta
  const productsAsyncResponse = await getProductsAsync();
  console.log(productsAsyncResponse);
})();