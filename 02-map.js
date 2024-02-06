let letteres = ['a', 'b', 'c', 'd', 'e', 'f'];
//el metodo map transforma los elementos de un arreglo pero no modifica el original
const  newarray = letteres.map(item => (item + '++'));
;
// let newarray = [];
// for (let miarregloRecorre = 0; miarregloRecorre < letteres.length; miarregloRecorre++) {
//     const element = letteres[miarregloRecorre];
//     newarray.push(element + '++');
//     console.log(element);
// };

//undenfined
console.log(letteres);
console.log('new: ' + newarray);

