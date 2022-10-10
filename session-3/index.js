// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
 let a = 5;
 const b = 10;
 let c = a + b;

 console.log(c)

 function sayHey() {
    console.log('Hey!');
 };

 function conversation() {
    sayHey();
    console.log("How are you?")
    console.log("Goodbye")
 };

 conversation();

 function futureAge(name, age) {
    const future = age + 5
    return "Hi " + name + " You will be " + future + " in 5 years."
 }

 console.log(futureAge("salma", 25))