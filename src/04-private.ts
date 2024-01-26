export class MyDate {
    private year: number; //Al ser private, esta propiedad solo puede ser accedida y modificada dentro de la misma clase.
    private month: number;
    private day: number;
  
    constructor(year: number, month: number, day: number) {
      this.year = year;
      this.month = month;
      this.day = day;
    }
  
    printFormat(): string {
      const day = this.addPadding(this.day);
      const month = this.addPadding(this.month);
      return `${day}/${month}/${this.year}`;
    }
  
    private addPadding(value: number) {
      if (value < 10) {
        return `0${value}`;
      }
      return `${value}`;
    }
  
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
  
    getDay() {
      return this.day; // Método que devuelve el valor de la propiedad day
    }
  }
  
  const myDate = new MyDate(1993, 7, 10);
  console.log(myDate.printFormat());
  console.log(myDate.getDay()); // Imprimir el valor de day utilizando el método getDay(), si no esamos aciendo diirectamente sino atraves de un metodo.