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

    var habilidades = document.querySelector('#habilidades');
    var position = habilidades.getBoundingClientRect().top;

    var llenarBarras = function() {
        var barras = document.querySelectorAll('.barra-progreso');
        barras.forEach(function(barra) {
            barra.style.width = barra.getAttribute('data-width');
            barra.classList.add('llenar');
        });
    };

    if (window.pageYOffset >= position) {
        llenarBarras();
    }

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= position) {
            llenarBarras();
            console.log('hola');
        }
    });
}