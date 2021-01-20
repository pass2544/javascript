const people = ["Aaron", "Mel" , "John"];
const one = 1;
const str = "HEllo world";
const b = true;
const employee = {
    firstName: "Thaptana",
    lastname: "Jantree",
};
function sayHello(person){
    console.log("hello " + person.firstName);
}
console.log(typeof people);
console.log(typeof sayHello)
console.log(employee instanceof Array);
sayHello(employee);