//Mini-Activity #1
/* 

With key value pairs:
title: <value>
publisher: <value>/producer: <value>
year: <value>,
price: <value>/director: <value>
isAvailable: <value>

*/
let late = {
    title: 'Shibe Doge',
    publisher: 'Universal',
    year: 2009,
    price: 'Free',
    isAvailable: true
};
console.log(late)

//Mini-Activity #2
/* 
    Add properties to our instructor object:
 */

let instructor = {
    name: 'Nico Norse',
    age: 56,
    gender: "Male",
    department: "Humanities",
    courses: ['Philosophy 101', 'Humanities 201'], //with the following items: "Philosophy 101","Humanities 201"
    isActive: true,
    salary: 50000
};
console.log(instructor);

//Mini-Activity #3
/* 
    create using constructor
*/

function laptop (name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
}

let laptop1 = new laptop('Apple', 'Macbook Pro M1 Pro', 120000)
console.log(laptop1);

let laptop2 = new laptop('Asus', 'Asus TUF 14', 75000)
console.log(laptop2);

//Mini-Activity #4
/* 
				Create a constructor function able to receive 3 arguments
					-It should be able to receive two strings and a number
					-Using the this keyword assign properties:
						name, 
						address, 
						age,
						isGreeted: defaultValue false
						-assign the parameters as values to each property.

				Create 2 new objects using our constructor.

				This constructor should be able to create person objects.

				Log the 2 new person objects in the console.
*/

function person (name, address, age) {
    this.name = name,
    this.address = address,
    this.age = age,
    this.isGreeted = false;
};

let person1 = new person('Nico', 'Dasmarinas', 20);
let person2 = new person('Nicole', 'Dasmarinas', 20);

console.log(person1);
console.log(person2);

//Mini-Activity #5
function per (name, address, age) {
    this.name = name,
    this.address = address,
    this.age = age,
    this.isGreeted = false;
    this.greet = function(personToGreet){
        console.log(`Hello! ${personToGreet}`)
        //person4 is globale and it was create with the let keyword
        personToGreet.isGreeted = true;
    }
};

let person3 = new per('Nikonii', 'Ohio', 30);
let person4 = new per('Nikolai', 'Florida', 50);

console.log(person3);
console.log(person4);

person3.greet(person4)
console.log(person3)
