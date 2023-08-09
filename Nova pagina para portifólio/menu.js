var menuitem = document . querySelectorAll('.item-menu')

function selectlink(){
    menuitem.forEach((item)=>
    item.classList.rremove('ativo')
)
    this.classList.add('ativo')
}
menuitem.forEach((item)=>
    item.addEventListener('click', selectlink)

)

//Expandir o menu 

var btnexpandir = document.querySelector('#btn-expandir')
var menuSide = .document.querySelector ('menu-lateral')

