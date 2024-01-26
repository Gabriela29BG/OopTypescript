// Definición de la clase Animal
export class Animal {
    // Constructor que inicializa la propiedad name
    constructor(public name: string) {}
  
    // Método para indicar que el animal se está moviendo
    move() {
      console.log('Moving along!');
    }
  
    // Método para obtener un saludo con el nombre del animal
    greeting() {
      return `Hello, I'm ${this.name}`;
    }
  }
  
  // Definición de la clase Dog que extiende de la clase Animal
  export class Dog extends Animal {
    // Constructor que inicializa las propiedades name y owner, llamando al constructor de la clase base (Animal)
    constructor(
      name: string,
      public owner: string
    ) {
      super(name);
    }
  
    // Método específico para que el perro ladre cierta cantidad de veces
    woof(times: number): void {
      for (let index = 0; index < times; index++) {
        console.log('Woof!');
      }
    }
  }
  
  // Crear una instancia de Animal llamada fifi
  const fifi = new Animal('Fifi');
  fifi.move(); // Muestra 'Moving along!'
  console.log(fifi.greeting()); // Muestra 'Hello, I'm Fifi'
  
  // Crear una instancia de Dog llamada cheis con un dueño llamado 'Nico'
  const cheis = new Dog('Cheis', 'Nico');
  cheis.move(); // Muestra 'Moving along!'
  console.log(cheis.greeting()); // Muestra 'Hello, I'm Cheis'
  cheis.woof(5); // Muestra 'Woof!' cinco veces
  console.log(cheis.owner); // Muestra el dueño 'Nico'
  