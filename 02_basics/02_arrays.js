const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

marvelHeros.push(dcHeros); // it basically merge array inside an array

console.log(marvelHeros);
console.log(marvelHeros[3] [0]); // syntax to get value of array inside an array


const allHeros = marvelHeros.concat(dcHeros); // concat basically mearge two arrays and give a new array with all values
console.log(allHeros);

const all_new_heros = [...marvelHeros, ...dcHeros]; // works same as concat, spread basically spread each element of array and mearge them into new one and give a new array
console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];
const real_another_array = anotherArray.flat(Infinity); // flat = Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

