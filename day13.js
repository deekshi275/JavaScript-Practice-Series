// let units = Number(prompt("enter units"));

// let amount = 0;

// if (isNaN(units) || units < 0 ) {
//   alert("pls provide proper input");
// }
// else{

//   if (units > 400) {
//     amount += (units - 400) * 10;
//     units = units - 400;
//   }
//   if (units > 300) {
//     amount += (units - 300) * 8;
//     units = units - 300;
//   }
//   if (units > 200) {
//     amount += (units - 200) * 6;
//     units = units - 200;
//   }
//   if (units > 100) {
//     amount += (units - 100) * 4;
//     units = units - 100;
//   }
//   if (units > 0) {
//     amount += (units - 0) * 2;
//     units = units - 0;
//   }

// }
// console.log(amount);

// let amount = prompt('enter a amount')

// if (amount>=500){
// notes = Math.floor(amount/500)
// amount= amount-notes*500
// console.log('500 notes ',notes)
// }
// if (amount>=200){
// notes = Math.floor(amount/200)
// amount= amount-notes*200
// console.log('200 notes ',notes)
// }
// if (amount>100){
// notes = Math.floor(amount/100)
// amount= amount-notes*100
// console.log('100 notes ',notes)
// }
// if (amount>50){
// notes = Math.floor(amount/50)
// amount= amount-notes*50
// console.log('50 notes ',notes)
// }
// if (amount>10){
// notes = Math.floor(amount/10)
// amount= amount-notes*10
// console.log('10 notes ',notes)
// }
// if (amount>5){
// notes = Math.floor(amount/5)
// amount= amount-notes*5
// console.log('5 notes ',notes)
// }
// if (amount>2){
// notes = Math.floor(amount/2)
// amount= amount-notes*2
// console.log('2 notes ',notes)
// }
// console.log(amount)

//write a check the given mobile number or not

// let number = Number(prompt('enter a number'))

// if (isNaN(number) || number < 0 || number.toString().length !== 10) {
//   alert('provide proper input')
// }
// else{
//   console.log('correct number')
// }

//write a program to check program to check goodmorning good after and good night

// let hour = new Date().getHours();

// if (hour >= 5 || hour < 12) {
//   console.log("Good Morning");
// }
// else if (hour >= 12 || hour < 17) {
//   console.log("Good Afternoon");
// }
// else if (hour >= 17 || hour < 21) {
//   console.log("Good Evening");
// }
// else {
//   console.log("Good Night");
// }

//check input given or not

// let inp = prompt('enter a input')
// if (inp==''){
//     alert('pls provide')
// }else{
//     console.log(inp)
// }

//atm machine

console.log("well come to deekshi bank");

let balence = 0;
let agine = true;

while (agine) {
  let op = prompt(
    "select the option 1.deposit, 2.withdrow, 3.balence",
  ).toLocaleLowerCase();

  if (op === "1" || op === "d" || op === "deposit") {
    let d = Number(prompt("enter amount to deposit"));
    if (d < 0 || isNaN(d)) {
      alert("enter correct amount");
    } else {
      balence += d;
      console.log("your balence is", balence);
    }
  }
  if (op === "2" || op === "withdrow" || op === "w") {
    let w = Number(prompt("enter a withdrow amount"));
    if (w < 0 || isNaN(w)) {
      alert("insuficant balens");
    } else if (w > balence) {
      alert("insuficeant balence");
    } else {
      balence -= w;
      console.log("amount withdrow sucessfully", w);
      console.log("your balence is", balence);
    }
  }
  if (op === "3" || op === "b" || op === "balence") {
    console.log(balence);
  }
  agine = confirm("yes or no");
}
console.log('thanks for the time')
