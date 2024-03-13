


let request = (pais_code) => {

    let myURL= `https://date.nager.at/api/v3/publicholidays/2024/${pais_code}`;

    fetch( myURL )
      .then(response => response.json() ) /* Convierte el response a JSON */
      .then(result => {

        /* Callback por éxito: Procese el result */
        
        let div = document.getElementById("info_feriados");
        div.innerHTML= "";

       render_info(result,pais_code);

      
      })
      .catch(error => {
        
        /* Callback por fallo: Procese el error */

        console.log( error );

      });
 }

 
 
 let render_info = (fetch_result,pais_code) => {

    let plantilla_final="";
    let Pais="";
    let div_bandera = document.getElementById("Pais_img");

    switch (pais_code) {
      case "EC":
        Pais="Ecuador";
       
        break;
      case "AR":
        Pais="Argentina";
        
        break;
      case "CL":
        Pais="Chile";
  
        break;
      case "PE":
        Pais="Peru";
    
        break;
      case "CO":
        Pais="Colombia";
     
        break;
      case "PY":
        Pais="Paraguay";
       
        break;
      case "UY":
        Pais="Uruguay";
    
        break;
      case "BO":
        Pais="Bolivia";
      
        break;
      case "BR":
        Pais="Brasil";
     
        break;
      case "VE":
        Pais="Venezuela";
        break; 
    }

    div_bandera.innerHTML=`<img id="bandera" ; class="img-fluid  rounded" ; src="public/images/${Pais}.jpg">`;
    let h3= document.getElementById("head_h3");
    h3.innerHTML= `<h3 style="padding-top: 20px" >Los Feriados de ${Pais} son:</h3>`;


    let div = document.getElementById("info_feriados");
    console.log(fetch_result);

    for(let element of fetch_result)
    {

      let date = element.date;
      let name = element.localName;

      let plantilla = `<div style="padding-top: 10px">
                            <spam>Dia: ${date} </spam>
                       </div>
                       <div style="padding-bottom:10px">
                             <spam>Nombre: ${name} </spam>
                       </div>`;

      plantilla_final = plantilla_final + plantilla;

    }
  
    div.innerHTML=plantilla_final;       
 }


 let click_opciones = document.getElementById("dropdownMenuButton");

click_opciones.addEventListener('click', (event) => {

   console.log(click_opciones.value);

   if(click_opciones.value != "")
   {
    request(click_opciones.value);
   }

});

