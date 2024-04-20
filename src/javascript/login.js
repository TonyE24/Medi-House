
const sheetName = 'HojaLogin'; // Cambia al nombre de tu hoja
const scriptProp = PropertiesService.getScriptProperties();

function intialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName(sheetName);
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;
    const newRow = headers.map(function (header) {
      return e.parameter[header];
    });
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}








/*

const formulario = document.getElementById('formulario');
const registro= document.getElementById('registro');
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


    //Leer Filas
    try { 
        const respuesta = await fetch('https://sheet.best/api/sheets/9293c51f-ac1b-48dd-8846-7fe9af2055da');

        const contenido = await respuesta.json();
        console.log(contenido);
    } catch(error){
        console.log(error);
    }


//Actualizar Filas
  try
  { 
      const respuesta = await fetch('https://sheet.best/api/sheets/9293c51f-ac1b-48dd-8846-7fe9af2055da', {
        method: 'PATCH',
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


    //Eliminar Filas
    try
    { 
        const respuesta = await fetch('https://sheet.best/api/sheets/9293c51f-ac1b-48dd-8846-7fe9af2055da', {
        method: 'DELETE',  
         });
           
        const contenido = await respuesta.json();
        console.log(contenido);
    } catch(error){
        console.log(error);
    }

    registro.classList.remove('activo');
    exito.classList.add('activo');
});




*/



/*const scriptURL = 'https://script.google.com/macros/s/AKfycbz-YbdZ70A1nvh2T3b4AbUsJR_TYEEqaVh7etAm4DOBw76TxzdHFBfLWht6a3L7Ki8l4g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})*/
