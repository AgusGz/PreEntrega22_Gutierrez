function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b === 0) {
      return "No es posible dividir por cero.";
    }
    return a / b;
  }
  
  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  
  let operacion = prompt("Ingresa la operación que deseas realizar (+, -, *, /):");
  
  let resultado;
  
  if (operacion === "+") {
    resultado = sumar(num1, num2);
  } else if (operacion === "-") {
    resultado = restar(num1, num2);
  } else if (operacion === "*") {
    resultado = multiplicar(num1, num2);
  } else if (operacion === "/") {
    resultado = dividir(num1, num2);
  } else {
    resultado = "Operación no válida";
  }

  alert("Resultado: " + resultado);
  