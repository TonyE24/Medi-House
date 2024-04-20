const formulario = document.getElementById('formulario');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

//Escribir Filas
  try
  { 
      const respuesta = await fetch('https://sheet.best/api/sheets/9293c51f-ac1b-48dd-8846-7fe9af2055da', {
        method: 'POST',
        node:'cors',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.username.value,
            "Password": formulario.pass.value
        })
      });

     const contenido = await respuesta.json();
     console.log(contenido);
  } catch(error){
    console.log(error);
    }

    exito.classList.add('activo');
});