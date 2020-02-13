/**
 * Custom Javascript
 */
import "instant.page"

document.getElementById("menu_toggle").addEventListener('mousedown', (e)=>{
    e.preventDefault();
    const navigation = document.getElementById('topbar');
    navigation.classList.toggle('open');
    navigation.classList.contains('open') ? e.target.innerText = 'SCHLIESSEN' : e.target.innerText = "MENÜ";
})
document.querySelectorAll('.liDropdown').forEach(dropdown => dropdown.addEventListener('mouseup', (e)=>{
    const el = dropdown.parentNode.parentNode;
    el.getElementsByTagName('ul')[0].classList.toggle('hidden');
    el.getElementsByTagName('svg')[0].classList.toggle('rotate-180');
}))
function parallax() {
    if (document.getElementById('hero')){
        const headerHeight = document.getElementById("hero").offsetHeight;
        let scrollTop = (window.scrollY < (headerHeight / 2)) ? window.scrollY : headerHeight / 2;
        document.getElementById("hero").style.transform = `translate3D(0,${scrollTop / 8}px,0)`;
        document.getElementById("hero-sub").style.transform = `translate3D(0,${scrollTop / 6}px,0)`;
        //document.getElementById("hero-sub").style.opacity = `${1 - Math.pow(scrollTop, 1.1) / 4000}`;
    } 
}
document.addEventListener("scroll", parallax, { passive: true });
