const menuHanburguer= document.querySelector('.menu-hamburguer');
 menuHanburguer.addEventListener('click',()=>{
   toggleMenu();
} );

function toggleMenu(){
    const nav= document.querySelector('.nav-responsive')
   menuHanburguer.classList.toggle('change');

   if (menuHanburguer.classList.contains('change')){
    nav.style.display= 'block';
   } else{
    nav.style.display= 'none';
   }
} 