const iconomenu = document.querySelector('.iconomenu')
const menu = document.querySelector('.menu-navegacion')


iconomenu.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != iconomenu){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})