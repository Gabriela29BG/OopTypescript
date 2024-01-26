// Definición de la clase MyService
export class MyService {

    // Propiedad estática para almacenar la única instancia de MyService
    static instance: MyService | null = null;
  
    // Constructor privado para evitar la creación directa de instancias
    private constructor(private name: string) {}
  
    // Método para obtener el nombre de la instancia
    getName() {
      return this.name;
    }
  
    // Método estático para crear una instancia única de MyService
    static create(name: string) {
      // Verifica si ya hay una instancia, si no, la crea
      if (MyService.instance === null) {
        console.log('debería entrar una vez');
        MyService.instance = new MyService(name);
      }
      // Devuelve la instancia existente o recién creada
      return MyService.instance;
    }
  }
  
  // Uso de la clase MyService
  const myService1 = MyService.create('service 1');
  console.log(myService1.getName());
  
  const myService2 = MyService.create('service 2');
  console.log(myService2.getName());
  
  const myService3 = MyService.create('service 3');
  console.log(myService3.getName());
  
  // Comprobación de igualdad entre las instancias
  console.log(myService1 === myService2); // Debería ser true
  