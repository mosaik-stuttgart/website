/**
 * Custom Javascript
 */

document.getElementById("menu_toggle").addEventListener('mousedown', (e)=>{
    e.preventDefault();
    const navigation = document.getElementById('topbar');
    navigation.classList.toggle('open');
    navigation.classList.contains('open') ? e.target.innerText = 'SCHLIESSEN' : e.target.innerText = "MENÜ";
})
document.querySelectorAll('.liDropdown').forEach(dropdown => dropdown.addEventListener('mouseup', (e)=>{
    el = dropdown.parentNode.parentNode;
    el.getElementsByTagName('ul')[0].classList.toggle('hidden');
    el.getElementsByTagName('svg')[0].classList.toggle('rotate-180');
}))
function parallax() {
    if (document.getElementById('hero')){
        const headerHeight = document.getElementById("hero").offsetHeight;
        let scrollTop = (window.scrollY < (headerHeight / 3)) ? window.scrollY : headerHeight / 3;
        document.getElementById("hero").style.transform = `translate3D(0,${scrollTop / 5}px,0)`;
        document.getElementById("hero-sub").style.transform = `translate3D(0,${scrollTop / 3.5}px,0)`;
        document.getElementById("hero-sub").style.opacity = `${1 - Math.pow(scrollTop, 1.1) / 2000}`;
        console.log('hurray')
    } 
}
document.addEventListener("scroll", parallax, { passive: true });
