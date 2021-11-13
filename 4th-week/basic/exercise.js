// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

let courseName = 'Academind 100 Days of Code';
let coursePrice = 79000;
let courseGoal = ['Learn HTML, CSS & JS', 'Create something Exciting', 'Share my projects'];
let course = {
  name: 'Academind 100 Days of Code',
  price: 79000,
  goal: ['Learn HTML, CSS & JS', 'Create something Exciting', 'Share my projects'],
}

console.log(course.name, course.price, course.goal);
console.log(course.goal[1])

const mainGoals = (goalsList, identifier) => goalsList[identifier];

let check = mainGoals(course.goal, 0);
let check2 = mainGoals(courseGoal, 1);
let check3 = mainGoals(courseGoal, 2);
let check4 = mainGoals(courseGoal, 4);
console.log(`${check} also ${check2} then ${check3}. but something is ${check4}`)