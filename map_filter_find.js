const number = [2, 4, 3, 6, 7, 5, 10];
const output = [];

for(let i = 0; i < number.length; i++){
    const  element = number[i];
    const result = element * element;
    output.push(result);
}

console.log(output);

const result =number.map(function(element){
    return element * element
})
console.log(result);

const result2 = number.map(x => x * x);
console.log(result2);

const bigger = number.filter( x => x > 5);
console.log(bigger);
const oneIsThere = number.find(x => x > 5);
console.log(oneIsThere);