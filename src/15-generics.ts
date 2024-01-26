import { Dog } from './09-protected';

// Función genérica que toma un valor de tipo T y devuelve el mismo valor
function getValue<T>(value: T) {
  const array: T[] = [value];
  return value;
}

// Ejemplos de llamadas a la función genérica con tipos específicos
getValue<number>(12).toFixed();  // Se espera que 'value' sea de tipo number, por lo que toFixed es válido
getValue<string>('12').toLowerCase();  // Se espera que 'value' sea de tipo string, por lo que toLowerCase es válido
getValue<number[]>([11, 1, 1]).forEach;  // Se espera que 'value' sea de tipo number[], por lo que forEach es válido

// Creación de una instancia de la clase Dog y llamada a la función genérica con el tipo Dog
const fifi = new Dog('fifi', 'nico');
getValue<Dog>(fifi).greeting;  // Se espera que 'value' sea de tipo Dog, por lo que greeting es válido

// Ejemplo de uso con Promise y axios (aunque axios no se incluye en el código proporcionado)
// getValue<Promise<boolean>>(axios.get<string[]>);
