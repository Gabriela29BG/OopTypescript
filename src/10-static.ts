// Imprimir el valor de PI de la clase Math
console.log('Math.PI', Math.PI);

// Encontrar el valor máximo entre un conjunto de números usando Math.max
console.log('Math.max', Math.max(1, 2, 2, 8, 1, 0, 3, 3, 3, 3));

// Definición de la clase MyMath
class MyMath {
  // Propiedad estática de solo lectura PI
  static readonly PI = 3.14;

  // Método estático para encontrar el valor máximo entre un conjunto de números
  static max(...numbers: number[]) {
    // Utilizar reduce para encontrar el valor máximo
    return numbers.reduce((max, item) => (max >= item ? max : item), 0);
  }
}

// Imprimir el valor de PI de la clase MyMath
console.log('MyMath.PI', MyMath.PI);

// Encontrar el valor máximo entre un conjunto de números usando el método estático max
console.log('MyMath.max', MyMath.max(12, 2, 1, 1112, 9));

// Encontrar el valor máximo entre un conjunto de números usando el método estático max y el operador spread
const numbers = [12, 2, 1, 1112, 9, 3000];
console.log('MyMath.max', MyMath.max(...numbers));

// Encontrar el valor máximo entre un conjunto de números negativos
console.log('MyMath.max', MyMath.max(-1, -9, -8));
