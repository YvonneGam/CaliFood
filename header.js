let menuOpen = false;


function menuLinks() {
    if(!menuOpen) {
        document.getElementById('menu-btn').classList.add('open');
         document.getElementById('openmenu').classList.remove('d-none'); 
        menuOpen = true;
    } else {
        document.getElementById('menu-btn').classList.remove('open');
       document.getElementById('openmenu').classList.add('d-none'); 
        menuOpen = false;
    }
};

