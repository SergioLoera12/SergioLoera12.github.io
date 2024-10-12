//definimos la ruta de donde consultaremos los recursos
const API_URL='https://jsonplaceholder.typicode.com/';
//obtenemos el elemento del DOM html donde arrojaremos la info
const HTMLResponse = document.querySelector('#app');
//creamos el elemento donde arrojaremos la info
const ul = document.createElement('ul');

fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then((users) => {
        users.forEach((user) => {
            //creamos el elemento li para almacernar cada usuario en el ul
            let elem = document.createElement('li');
            elem.appendChild(
                document.createTextNode(`${user.name} | ${user.website} | ${user.company.name} `)
            );
            //agregamos el name dentro del li y dentro del ul
            ul.appendChild(elem);

        });
        //al final agregamos el ul dentro del div obtenido
        HTMLResponse.appendChild(ul)
      }).catch((error) => {
        console.error('error en la solicitud');
      });
      
