//1. Variables y constantes: Tipos, Tipos personalizados
type Producto = {
    id: number;
    nombre: string;
    precio: number;
};

//Se crea una instancia del tipo Producto
let producto: Producto = {
    id: 1,
    nombre: "frijol",
    precio: 20000
};

//console.log(producto);

//2. Operadores (aritméticos, booleanos)

function numeroPar(number: number): boolean {
    // Un número es par si el resto de su división por 2 es 0
    return number % 2 === 0;
}

//   console.log(numeroPar(4)); // true
//   console.log(numeroPar(7)); // false
//   console.log(numeroPar(0)); // true
//   console.log(numeroPar(-2)); // true

//3. Estructuras de decisión (if, switch, ternarios)

function clasificarNumero(number: number) {
    if (number > 0) {
        console.log("Número positivo");
    } else if (number < 0) {
        console.log("Número negativo");
    } else {
        console.log("Número cero");
    }

    switch (number) {
        case 0:
            console.log("Cero");

        case 1:
            console.log("Número positivo");

        case -1:
            console.log("Número negativo");
            break;
        default:
            console.log("Número no reconocido");
    }
};

//console.log(clasificarNumero(-1));

//4. Estructuras de iteración (while, for, foreach, map)

let names: string[] = ['alexis', 'juliana', 'felipe', 'adela', 'pilar'];

function getNames(names: string[]) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    };
};

//getNames(names)


//Estructuras de Datos y Funciones

//1. Arrays | Listas

//Tarea 1: Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.

let numeros: number[] = [1, 2, 3, 4, 5];

let total :number = numeros.reduce((acumulador, elemento) => {
    return acumulador + elemento
});

//console.log(total);

//Tarea 2: Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.

let nombres: string[] = ['alexis', 'juliana', 'felipe', 'adela', 'pilar'];

function concatArray(array: string[]) {
    return array.join('');
}

//console.log(concatArray(nombres));

//Tarea 3: Define un array de objetos User con propiedades id y name, e imprime el nombre de cada usuario en consola.

type User = {
    id: number;
    name: string;
};

const users: User[] = [
    {
        id: 1,
        name: 'alexis'
    },
    {
        id: 1,
        name: 'juliana'
    },
    {
        id: 1,
        name: 'felipe'
    },
    {
        id: 1,
        name: 'pilar'
    },
    {
        id: 1,
        name: 'adela'
    }
];

users.forEach(user => {
    //console.log(user.name);
});

//Tarea 4: Implementa una función que reciba un array de números y retorne el mayor valor.

let arrayNumber: number[] = [6, 3, 8, 4, 5, 1, 10, 2];

function returnNumber(numbers: number[]): number {
    return Math.max(...numbers);
};

//console.log(returnNumber(arrayNumber));

function findMaxValue(numbers: number[]): number {
    if (numbers.length === 0) {
        console.error("Array esta vacio");
    }

    let maxValue = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }
    return maxValue;
};

//console.log(findMaxValue(arrayNumber));

//2. Objetos

//Tarea1: Define un objeto Car con propiedades marca, modelo y año. Crea una instancia de Car e imprime sus propiedades en consola.

interface Car {
    marca: string,
    modelo: string,
    year: number
}

let car: Car = {
    marca: 'toyota',
    modelo: 'txl',
    year: 2018
};

//console.log(car);

//Tarea 2: Con base en el objeto Car, crea una clase que posea un metodo estatico que reciba un objeto Car y retorne un string con la información del carro.

class CarInfo {
    static getInfo(car: Car): string {
        return `Marca: ${car.marca}, Modelo: ${car.modelo}, year: ${car.year}`
    };
};

//console.log(CarInfo.getInfo(car));


//Tarea 3: Implementa una función que reciba un objeto Car y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.

function info(car: Car) {
    car.year++
    return car
};

//console.log(info(car));

function info2(car: Car) {
    return {
        ...car,
        year: car.year++
    };
}

//console.log(info2(car));

//3. Funciones

// Tarea1: Implementa una función que reciba un array de números y retorne el mayor valor.

let arrayNumber2: number[] = [4, 3, 6, 4, 5, 2, 10, 8];
function firstFunction(array: number[]): number {
    let maxValue = array[0]
    array.forEach(number => {
        number > maxValue ? number = maxValue : number;
    });
    return maxValue;
};

//console.log(findMaxValue(arrayNumber2));


//Tarea 2: Implementa una funcion que reciba rest parameters y retorne error si almenos uno de los parametros pasados no es del tipo de los dos primeros parametros. 
//Asegurarse que los dos primeros parametros sean del mismo tipo.

function validate(para1: string, para2: string, para3: any): string {
    return typeof para1 && typeof para2 !== typeof para3 ? `Para3: ${typeof para3}, no es del mismo tipo de para1 y para2` : `Para3: ${typeof para3}, es del mismo tipo de para1 y para2`;
};

console.log(validate("hola", "Alexis", "1"));
