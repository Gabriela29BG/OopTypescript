// Definir una clase llamada MyDate
export class MyDate {
    // Propiedades de la clase con un valor predeterminado
    year: number = 0;
    month: number;
    day: number;

    // Constructor de la clase que toma los parámetros y los asigna a las propiedades
    constructor(year: number, month: number, day: number) {
        this.year = year;   // Asignar el año
        this.month = month; // Asignar el mes
        this.day = day;     // Asignar el día
    }

    // Método para devolver una cadena que representa la fecha en un formato específico
    printFormat(): string {
        return `${this.day}/${this.month}/${this.year}`;
    }

    // Método para agregar una cantidad específica de días, meses o años a la fecha
    add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this.day += amount; // Aumentar los días
        }
        if (type === 'months') {
            this.month += amount; // Aumentar los meses
        }
        if(type === 'years') {
            this.year += amount; // Aumentar los años
        }
    }
}

// Crear una instancia de la clase MyDate con la fecha 9 de julio de 1993
const myDate = new MyDate(1993, 7, 9);

// Imprimir la representación en cadena de la fecha en el formato definido
console.log(myDate.printFormat());

// Agregar 3 días a la fecha y volver a imprimir la representación en cadena
myDate.add(3, 'days');
console.log(myDate.printFormat());

// Agregar 1 mes a la fecha y volver a imprimir la representación en cadena
myDate.add(1, 'months');
console.log(myDate.printFormat());

// Imprimir las propiedades day, month y year por separado
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
