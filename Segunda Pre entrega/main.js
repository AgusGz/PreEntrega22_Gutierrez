const operaciones = [
  {
    nombre: "Suma",
    operacion: function(a, b) { return a + b; }
  },
  {
    nombre: "Resta",
    operacion: function(a, b) { return a - b; }
  },
  {
    nombre: "Multiplicación",
    operacion: function(a, b) { return a * b; }
  },
  {
    nombre: "División",
    operacion: function(a, b) { return a / b; }
  }
];

const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));

let mensajeOperaciones = "Operaciones disponibles:\n";
for (let i = 0; i < operaciones.length; i++) {
  mensajeOperaciones += `${i + 1}. ${operaciones[i].nombre}\n`;
}

const operacionElegida = parseInt(prompt(mensajeOperaciones)) - 1;

if (operacionElegida >= 0 && operacionElegida < operaciones.length) {
  const resultado = operaciones[operacionElegida].operacion(num1, num2);
  alert(`Resultado de ${operaciones[operacionElegida].nombre}: ${resultado}`);
} else {
  alert("Operación no válida");
}
