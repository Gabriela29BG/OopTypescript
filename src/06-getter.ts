// Definición de la clase MyDate
export class MyDate {
    // Constructor que inicializa las propiedades year, month y _day con valores predeterminados
    constructor(
      public year: number = 1993,
      public month: number = 7,
      private _day: number = 9
      //Al anteponer un guion bajo al nombre de una propiedad, estás indicando a otros desarrolladores (y también a ti mismo) que esa propiedad debería considerarse como privada y no debería ser accesible directamente desde fuera de la clase.
    ) {}
  
    // Método para formatear la fecha en un formato legible
    printFormat(): string {
      // Asegura que _day y month tengan siempre dos dígitos
      const day = this.addPadding(this._day);
      const month = this.addPadding(this.month);
  
      // Retorna la fecha formateada
      return `${day}/${month}/${this.year}`;
    }
  
    // Método privado para agregar un cero al frente de valores menores a 10
    private addPadding(value: number) {
      if (value < 10) {
        return `0${value}`;
      }
      return `${value}`;
    }
  
    // Método para agregar una cantidad específica de días, meses o años a la fecha
    add(amount: number, type: 'days' | 'months' | 'years') {
      if (type === 'days') {
        this._day += amount;
      }
      if (type === 'months') {
        this.month += amount;
      }
      if (type === 'years') {
        this.year += amount;
      }
    }
  
    // Getter para obtener el valor del día (propiedad privada _day) 
    get day() {
      return this._day;
    }
  
    // Getter para verificar si el año es bisiesto
    get isLeapYear(): boolean {
      // Lógica para determinar si un año es bisiesto
      if (this.year % 400 === 0) return true;
      if (this.year % 100 === 0) return false;
      return this.year % 4 === 0;
    }
  }
  
  // Crear instancias de MyDate con diferentes combinaciones de parámetros
  const myDate = new MyDate(1993, 7, 10);
  console.log(myDate.printFormat());
  console.log(myDate.day);
  console.log('1993', myDate.isLeapYear);
  
  const myDate2 = new MyDate(2000, 7, 10);
  console.log('2000', myDate2.isLeapYear);
  
  const myDate3 = new MyDate(2001, 7, 10);
  console.log('2001', myDate3.isLeapYear);
  
  const myDate4 = new MyDate(2004, 7, 10);
  console.log('2004', myDate4.isLeapYear);
  