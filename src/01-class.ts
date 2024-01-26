// Crear una instancia de la clase Date con la fecha 12 de febrero de 1993
const date2 = new Date(1993, 1, 12);

// Obtener la hora de la instancia de Date
date2.getHours();

// Obtener la representación en milisegundos de la fecha
date2.getTime();

// Obtener la representación ISO de la fecha
date2.toISOString();

// Imprimir la instancia de Date (date2)
console.log(date2);

// Declarar una variable sin utilizar (puedes eliminarla si no la necesitas)
// let myVar;

// Definir una clase llamada MyDate
class MyDate {
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
}

// Crear una instancia de la clase MyDate con la fecha 13 de marzo de 2023
const myDate = new MyDate(2023, 3, 13);

// Imprimir la instancia de MyDate (myDate)
console.log(myDate);

const myDate = new MyDate(2023, 3, 13);
console.log(myDate);
