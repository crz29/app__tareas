const fecha = document.querySelector('#fecha');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#enter');
const lista = document.querySelector('#lista');
const botonPasar = document.querySelector('#pasar');
let id =0;


let Fecha = new Date(Date.UTC);
fecha.innerHTML =Fecha.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric',year:'numeric'});

//funcion agregar tarea
function agregarTarea(tarea,id){
    const elemento =`<li id="elemento">
    <i class="fa-sharp fa-solid fa-circle-check" data="realizado" id=${id}></i>
    <p class="text">${tarea}</p>
    <i class="fa-solid fa-circle-minus" data="eliminado" id=${id}></i><!--identificador data-->
</li>  `

    lista.insertAdjacentHTML('beforeend',elemento);
}

botonEnter.addEventListener('click', () =>{//le paso una funcion arrow
    const tarea = input.value;
    if(tarea){
        agregarTarea(tarea,id,false,false);
    }else{alert("Ingresa una tarea")};
    input.value ='';
    id++;
})


lista.addEventListener('click',function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;
    if(elementData==='realizado')
})

//localStorage