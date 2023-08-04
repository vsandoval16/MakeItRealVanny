let array =  ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
array.splice(4, 5, 'Quinto');
array.splice(5, 5, 'Sexto');
array.splice(6, 6, 'Soy el último elemento');
console.log(array)