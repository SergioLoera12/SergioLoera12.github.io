// Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com/';

// Obtenemos el elemento del DOM HTML donde arrojaremos la info
const HTMLResponse = document.querySelector('#appcomments');

// Creamos el elemento donde arrojaremos la info
const ol = document.createElement('ol'); // Cambiado de ul a ol para lista ordenada

fetch(`${API_URL}/comments`) // Cambiado de users a comments
  .then(response => response.json())
  .then((comments) => {
    comments.forEach((comment) => {
      // Creamos el elemento li para almacenar cada comentario en el ol
      let elem = document.createElement('li');
      elem.appendChild(
        document.createTextNode(`${comment.postId} | ${comment.id} | ${comment.name} ${comment.email} | ${comment.body}`)
      );
      // Agregamos el comentario dentro del li y dentro del ol
      ol.appendChild(elem);
    });
    // Al final, agregamos el ol dentro del div obtenido
    HTMLResponse.appendChild(ol);
  })
  .catch((error) => {
    console.error('Error en la solicitud:', error);
  });
