function validarFormulario() {
  let esNumeroValido = validarNumero();       
  let sonCaracteresValidos = validarCaracteres(); 

  if (!esNumeroValido || !sonCaracteresValidos) {
    return false;
  }

  alert("Formulario enviado correctamente");
  return true;
}

function validarNumero() {
  let telefono = document.getElementById("telefono").value;
  if (isNaN(telefono)) {
    alert("Teléfono no es correcto, debe ser numérico");
    return false;
  }
  return true;
}

function validarCaracteres() {
  let entradas = document.querySelectorAll(".entrada");
  let valido = true;
  entradas.forEach((entrada) => {
    if (entrada.value.length > 100) {
      alert("Las entradas no pueden tener más de 100 caracteres");
      valido = false;
    }
  });
  return valido;
}