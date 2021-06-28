let tagTBody = document.querySelector("#listaPlanes tbody");

let pUrl = "https://my-json-server.typicode.com/wjeon21/myFakeAPI/deportes";


fetch (pUrl,
      {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          } 
      }
) 
 .then(response => response.json()) 
 .then(data => { 
    
   let listaDeporte = data;

    listaDeporte.forEach(element => {
        
        let tagFila = document.createElement("tr");
        let tagCodigo = document.createElement("td");
        let tagNombrePlan = document.createElement("td");
        let tagPlazo = document.createElement("td");
        let tagAnualidad = document.createElement("td");
       // let tagBoton = document.createElement("button");

        tagFila.setAttribute("id", element.id);
        tagCodigo.innerHTML = element.codigo;
        tagNombrePlan.innerHTML = element.nombrePlan;
        tagPlazo.innerHTML = element.plazo;
        tagAnualidad.innerHTML = element.anualidad;
       // tagBoton.innerHTML = element.boton;

        tagFila.appendChild(tagCodigo);
        tagFila.appendChild(tagNombrePlan);
        tagFila.appendChild(tagPlazo);
        tagFila.appendChild(tagAnualidad);
        //tagFila.appendChild(tagBoton);

        tagTBody.appendChild(tagFila);

        tagFila.onclick = function (e){
            let container = e.target.parentElement;
           let urlNew = pUrl + "/" + container.id;
           fetch (urlNew)
           .then (resp => resp.json())
           .then (datos => {
               console.log (datos);
           });
        }        
    });        
    }     
); 
