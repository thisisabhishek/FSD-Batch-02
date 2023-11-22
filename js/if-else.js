// let str = 'FullStackDevelopomentCourse-Batch02'

// let length = str.length;

// let i = Math.floor(Math.random()*length)

// console.log(str.charAt(i))

// Bar application

let age = 10;
age %= 2; 
console.log(age)
let country = "USA"
// USA - 16

if(age == 18) {
    console.log("Woo! You did it.")
    console.log("Welcome to our Bar")
}
else if(age > 18 && age < 25) {
    console.log("Ok. You are allowed, but be careful")
    console.log("Welcome to our Bar")
}
else if(age > 25) {
    console.log("You are always welcome")
    console.log("Welcome to our Bar")
}
else {
    if(country == "USA" && age > 16) {
        console.log("Woo! You did it in USA")
        console.log("Welcome to our Bar")
    }
    else {
        console.log("You are under age")
    }
}











