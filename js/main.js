
// Código Nav //
let nav = document.getElementById("menSoc");

function menus() {
  let Desplazamiento_actual = window.pageYOffset;

  if (Desplazamiento_actual >= 40) {
    nav.classList.remove("bg-dark");
    nav.className = "bg-dark1";
    nav.style.transition = "1s";
  } else {
    nav.classList.remove("bg-dark1");
    nav.className = "bg-dark";
    nav.style.transition = "1s";
  }
}

window.addEventListener("load", function () {
  menus();
});

window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  menus();
});


// Validación del formulario Jquery //

$(document).ready(function () {
  $("#formulario").validate({
  rules: {
      nombre: {
      required: true,
      minlength: 3,
      maxlength: 15,
      },
      correo: {
      required: true,
      minlength: 10,
      maxlength: 50,
      },
      mensaje: {
      required: true,
      minlength: 10,
      maxlength: 100,
      },
  },
  messages: {
      nombre: {
      required: "Debe ingresar Nombre y Apellido",
      minlength: "El usuario debe tener un mínimo de 3 carácteres",
      maxlength: "El usuario debe tener un máximo de 15 carácteres",
      },
      correo: {
      required: "Debe ingresar un correo Válido",
      minlength: "El correo debe tener un mínimo de 10 carácteres",
      maxlength: "El correo debe tener un máximo de 50 carácteres",
      },
      mensaje: {
      required: "Debe ingresar mensaje",
      minlength: "El mensaje debe tener como minimo 10 carácteres",
      maxlength: "El mensaje debe tener un máximo de 100 carácteres",
      },
  },
  });
});

//Código de cambio de color//
function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	document.body.style.background = color;
	document.getElementById("hexadecimal").innerHTML = color;
	document.getElementById("text").innerHTML = "Copiar Color";
}

//codigo  del google maps  xD//

function iniciarMap() {
    var coord = { lat: -33.4488897, lng: -70.6692655 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}
