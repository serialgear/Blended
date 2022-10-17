// function sum(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// function mult(a, b) {
//   return a * b;
// }

// function div(a, b) {
//   return a / b;
// }

// function calculator(a, b, clb) {
//   return clb(a, b);
// }

// console.log(calculator(10, 5, mult));

// console.log(action);

// function displayResult() {
//   const action = prompt("Choose action");
//   switch (action) {
//     case "+":
//       console.log(calculator(10, 5, sum));
//       break;

//     case "-":
//       console.log(calculator(10, 5, sub));
//       break;

//     case "*":
//       console.log(calculator(10, 5, mult));
//       break;

//     case "/":
//       console.log(calculator(10, 5, div));
//       break;

//     default:
//       console.log("Не вірний оператор");
//   }
// }

// function displayResult(calc, act) {
//   const action = prompt("Choose action");
//   switch (action) {
//     case "+":
//       console.log(calc(10, 5, act));
//       break;

//     case "-":
//       console.log(calc(10, 5, act));
//       break;

//     case "*":
//       console.log(calc(10, 5, act));
//       break;

//     case "/":
//       console.log(calc(10, 5, act));
//       break;

//     default:
//       console.log("Не вірний оператор");
//   }
// }

function calculator(a, b, clb) {
  return clb(a, b);
}

function displayResult(calc) {
  const action = prompt("Choose action");
  switch (action) {
    case "+":
      console.log(calc(10, 5, (a, b) => a + b));
      break;

    case "-":
      console.log(calc(10, 5, (a, b) => a - b));
      break;

    case "*":
      console.log(calc(10, 5, (a, b) => a * b));
      break;

    case "/":
      console.log(calc(10, 5, (a, b) => a / b));
      break;

    default:
      console.log("Не вірний оператор");
  }
}

displayResult(calculator);
