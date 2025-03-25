// calculating age

let username = "Igiraneza Aime";
const birthyear= 2000;
const currentyear= 2025;

let age= currentyear - birthyear; 

console.log(`my name is${username} and i'm ${age}`);

// calculating birth year

const calBirthYear = (age) => currentyear-age  ;{
    console.log(`My birth year is  ${calBirthYear(25)}`);
}

// object destructuring

const object = {
    name : "Igiraneza Aime",
    ages : 25,
    country : "Rwanda"
};

const  {name, ages, country} = object;

console.log(`${name} is ${ages} years old and she live in ${country}`);

// array destructuring

const colors = ["red", "white", "black",  "yellow"];

const [fcolor, scolor] = colors;

console.log(`First color is ${fcolor} and second color ${scolor}`)


// rest operator

function addition(...numbers){
    return numbers.reduce((result, n) => result+n, 0)
}
console.log(addition(20,30,10,50,45));

// spread operator

const array1 = [2,5,7,9];
const array2 = [4,6,8,1];
const mergedArray = [...array1, ...array2];
console.log(mergedArray)


//promises

const dataFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Data fetched successfully");
        },
        2000
    );
    });
};

dataFetch()
.then((data) => console.log(data))
.catch((error) => console.error(error));
