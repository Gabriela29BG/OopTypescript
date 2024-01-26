// Definición de la clase abstracta Animal
export abstract class Animal {
    // Propiedad protegida name, accesible desde las clases hijas
    constructor(protected name: string) {}
  
    // Método para indicar que el animal se está moviendo
    move() {
      console.log('Moving along!');
    }
  
    // Método para obtener un saludo con el nombre del animal
    greeting() {
      return `Hello, I'm ${this.name}`;
    }
  
    // Método protegido que puede ser utilizado por clases hijas, pero no desde instancias externas
    protected doSomething() {
      console.log('dooo');
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
        console.log(`Woof! ${this.name}`);
      }
      this.doSomething(); // Llamada al método protegido de la clase base
    }
  
    // Sobrescribe el método move de la clase base
    move() {
      console.log('Moving as a dog'); // Nueva implementación específica para Dog
      super.move(); // Llama al método move de la clase base
    }
  }
  
  // Crear una instancia de Dog llamada cheis con un dueño llamado 'Nico'
  const cheis = new Dog('Cheis', 'Nico');
  
  // Intentar modificar la propiedad name directamente desde fuera de la clase generará un error
  // cheis.name = 'Otro nombre';
  
  // Llamar al método woof con un número de ladridos específico
  cheis.woof(1);
  
  // Intentar llamar al método protegido doSomething directamente desde fuera de la clase generará un error
  // cheis.doSomething();
  
  // Llamar al método move de la clase Dog, que también llama al método move de la clase base
  cheis.move();
  