// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
// }

const createInstructor = (firstName, lastName) => 
({
    firstName,
    lastName
});





// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"


const favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}





// (I changed the variable in order to avoid redeclaration)
// var instructor2 = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
// }


const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!"
    }
}





// ANIMAL FUNCTION
const createAnimal = (species, verb, noise) => {
    const animal = {
        species,
        [verb]: () => noise
    }
    return animal;
}