// Importando las clases Animal y Dog desde el archivo './09-protected'
import { Animal, Dog } from './09-protected';

// Creando una instancia de Animal llamada 'animal' con nombre 'elite'
const animal = new Animal('elite');

// Llamando al método greeting de la clase Animal
animal.greeting(); // Output: Hello, I'm elite

// Creando una instancia de Dog llamada 'cheis' con nombre 'cheis' y dueño 'nico'
const cheis = new Dog('cheis', 'nico');

// Llamando al método greeting de la clase Dog
cheis.greeting(); // Output: Hello, I'm cheis

// Llamando al método woof de la clase Dog con 2 ladridos
cheis.woof(2);
