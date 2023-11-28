window.onload = function() {
    var nav = document.getElementById('menu');
        var offset = nav.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= offset) {
            nav.classList.add('fixed');
            fotoInicio = document.getElementById('fotoInicio');
            fotoInicio.style.display = 'none';
            nombreInicio = document.getElementById('nombreInicio');
            nombreInicio.style.display = 'block';
            
            
        } else {
            nav.classList.remove('fixed');
            fotoInicio = document.getElementById('fotoInicio');
            fotoInicio.style.display = 'block';
            nombreInicio = document.getElementById('nombreInicio');
            nombreInicio.style.display = 'none';
        }
    });

    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
    function toggleMenu() {
        var menu = document.querySelector('#menuHamburguesa');
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }

    document.querySelectorAll('#menuHamburguesa a').forEach(function(link) {
        link.addEventListener('click', toggleMenu);
    });

   
}