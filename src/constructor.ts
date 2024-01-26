// Definición de la clase MyDate
export class MyDate {
    // Constructor que inicializa las propiedades year, month y day con valores predeterminados
    constructor(
      public year: number = 1993,
      public month: number = 7,
      private day: number = 9
    ) {}
  
    // Método para formatear la fecha en un formato legible
    printFormat(): string {
      // Asegura que el día y el mes tengan siempre dos dígitos
      const day = this.addPadding(this.day);
      const month = this.addPadding(this.month);
  
      // Retorna la fecha formateada
      return `${day}/${month}/${this.year}`;
    }
  
    // Método privado para agregar un cero al frente de valores menores a 10
    private addPadding(value: number): string {
      if (value < 10) {
        return `0${value}`;
      }
      return `${value}`;
    }
  
    // Método para agregar una cantidad específica de días, meses o años a la fecha
    add(amount: number, type: 'days' | 'months' | 'years') {
      if (type === 'days') {
        this.day += amount;
      }
      if (type === 'months') {
        this.month += amount;
      }
      if (type === 'years') {
        this.year += amount;
      }
    }
  
    // Método para obtener el valor del día
    getDay(): number {
      return this.day;
    }
  }
  
  // Crear instancias de MyDate con diferentes combinaciones de parámetros
  const myDate = new MyDate(1993, 7, 10);
  console.log(myDate.printFormat());
  console.log(myDate.getDay());
  
  const myDate2 = new MyDate();
  console.log('() =>', myDate2.printFormat());
  
  const myDate3 = new MyDate(2022);
  console.log('(2022) =>', myDate3.printFormat());
  
  const myDate4 = new MyDate(2022, 3);
  console.log('(2022, 3) =>', myDate4.printFormat());
  