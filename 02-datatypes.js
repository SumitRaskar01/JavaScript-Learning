/*
    ->Javascript is dynamically typed language, Which means the datatype of the variable is determined by the value it hold at runtime.
    ->We can change throughout the program as we assign different values to them.

    ->There are 2 types of Datatypes i.e Primitive and Reference (Non-Primitive)

    ->Primitive-
        ->Number
            const age = 30;

        ->String
            const name = "Batman";

        ->Boolean
            isLoggedIn = false;

        ->null
            const temperature = null;

        ->undefined
            let city;

        ->Symbol
            const id = Symbol('123');
            const anotherId = Symbol('123');
            Above two examples have different values although we passed same value.

        ->BigInt
            const bigNumber = 1284937821938n;
            bigInt has n at the end

    ->Reference (Non-Primitive)
        ->Arrays.
            const heros = ["Batman", "Ironman", "Thor", "Captain America",]

        ->Objects.
            const person = {
                name : "Batman",
                age : 30
            }
        ->Fucntions.
            You can declare function as a variable.
            const myFucntion = function()
            {
                console.log("Hello World");
            }
*/

const age = 30;
console.log(age);

const name = "Batman";
console.log(name);

const isLoggedIn = false;
console.log(isLoggedIn);

const temperature = null;
console.log(temperature);

let city;
console.log(city);

const id = Symbol("123");
console.log(id);

const anotherId = Symbol("123");
console.log(anotherId);
console.log(id === anotherId);

const heros = ["Batman", "Ironman", "Thor", "Captain America"];
console.log(heros);

const person = {
  name: "Batman",
  age: 30,
};
console.log(person);

const myFunction = function () {
  console.log("Hello World");
};
console.log(myFunction);

console.table([
  age,
  name,
  isLoggedIn,
  temperature,
  city,
  id,
  anotherId,
  heros,
  person,
  myFunction,
]);

/*
    To know the Datatype of a variable we can use typeof()
    Example- console.log(typeof (age));

    Note- type of function is function(object)
*/

console.log(typeof age);
console.log(typeof name);
console.log(typeof isLoggedIn);
console.log(typeof temperature);
console.log(typeof city);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof person);
console.log(typeof myFunction);

/*
    You can declare undefined using const.
    To declare undefined you have to use let keyword.
*/