// Definición de la clase MyDate
export class MyDate {
    constructor(
      public year: number = 1993,
      private _month: number = 7,
      private _day: number = 9
    ) {}
  
    // Método para formatear la fecha en un formato legible
    printFormat(): string {
      const day = this.addPadding(this._day);
      const month = this.addPadding(this._month);
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
        this._day += amount;
      }
      if (type === 'months') {
        this._month += amount;
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
      if (this.year % 400 === 0) return true;
      if (this.year % 100 === 0) return false;
      return this.year % 4 === 0;
    }
  
    // Getter para obtener el valor del mes (propiedad privada _month)
    get month() {
      return this._month;
    }
  
    // Setter para validar y asignar el valor del mes
    set month(newValue: number) {
      if (newValue >= 1 && newValue <= 12) {
        this._month = newValue;
      } else {
        // Lanzar un error si el nuevo valor está fuera del rango permitido
        throw new Error('Month out of range');
      }
    }
  }
  
  // Crear una instancia de MyDate con una fecha inicial
  const myDate = new MyDate(1993, 7, 10);
  
  // Imprimir la representación en cadena de la fecha
  console.log(myDate.printFormat());
  
  // Cambiar el valor del mes usando el setter
  myDate.month = 4;
  console.log('run', myDate.month);
  
  // Intentar asignar un valor fuera del rango permitido debería lanzar un error
  try {
    myDate.month = 78;
  } catch (error) {
    console.log('Error:', error.message);
  }
  