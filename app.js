const fecha = document.querySelector('#fecha');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#enter');
const lista = document.querySelector('#lista');
const botonPasar = document.querySelector('#pasar')

//funcion agregar tarea
function agregarTarea(tarea){
    const elemento =`<li id="elemento">
    <i class="fa-sharp fa-solid fa-circle-check" data="realizado" id="0"></i>
    <p class="text">${tarea}</p>
    <i class="fa-solid fa-circle-minus" data="eliminado" id="0"></i><!--identificador data-->
</li>  `

    lista.insertAdjacentHTML('beforeend',elemento);
}

botonEnter.addEventListener('click', () =>{//le paso una funcion arrow
    const tarea = input.value;
    if(tarea){
        agregarTarea(tarea);
    }else{alert("Ingresa una tarea")};
    input.value ='';
})


botonPasar.addEventListener('click',)

