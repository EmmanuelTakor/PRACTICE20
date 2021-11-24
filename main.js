// let variableA = document.querySelector("#varA");
// let variableB = document.querySelector("#varB");
// let variableAResultBox =document.querySelector("#varABox");
// let variableBResultBox =document.querySelector("#varBBox");
// let ResultBox = document.querySelector("#resultBox");
// let NewCardLauncher = document.querySelector("#NewCard");
// NewCardLauncher.addEventListener("click", newCard);
// let newCardResultB = document.querySelector("#newCardResultBox");
 
// let message = "";

// function randomFunction() {
//    let result= Math.floor(Math.random() * 25);
//    return result
// }

// console.log("random:" + randomFunction())



// function firstVar() {
//   let randA = Math.floor(Math.random() * 40) +1;
//   return randA
// }
// console.log(firstVar())

// function secondVar() {
//     let result = Math.floor(Math.random() * 11 )

//     console.log(result)

//     if (result< 4){
//         return 1
//     }
//     if (result > 4){
//         return 10
//     }

//   }
//   console.log(secondVar())
  

//   function calc() {
  
// }
// calc()

// function game() {

//     let firstCard = randomFunction();
//     let lastCard = randomFunction();
//     let sum = firstCard + lastCard;
//     if (sum < 21){
//         message = "You're below score.Do you want to play another card?";
//     }
//     else if (sum == 21){
//         message = "Congrats you win!";
//     }
//     else {
//         message = "Sorry you lost!"
//     }

//     ResultBox.textContent= "Result: " + sum + " " + message;
//     console.log(message)

//     variableAResultBox.textContent= firstCard;
// variableBResultBox.textContent= lastCard;
// }
// game()

// function newCard(){
//     let newCard = randomFunction();
//     sum += newCard;

//     newCardResultB.textContent = newCard;
//     ResultBox.textContent= "Result: " + sum + " " + message;
//     console.log(message)
//     game()

// }
// newCard()


// let Takor = ["Profession: Fullstack Web Application Developper", "lovesPizza: false","Age: 27"];

// console.log(Takor[1]);
// console.log(Takor[2]);
// Takor[1] = "lovesFufuAndEru: true";
// console.log(Takor[1]);
// Takor.push(3);

// console.log(Takor)
// Takor.pop()
// console.log(Takor)

// for (let i = 0; i < Takor.length; i++){
//     console.log(Takor[i])
// }
// for (let i = 0; i == Takor.length; i++){
//     console.log(Takor[i])
// }

// let isAdult = false;

// let canHandleSecrets = false;

// if( !isAdult && !canHandleSecrets){
//     showAnswer()
// }


// function showAnswer(){
// console.log("Showing answer")
// }

// let person1 ={
//     profession:"Fullstack Developper",
//     isIntelligent:"true"
// }

// console.log(person1.profession)


// let country = {
//     nameofCountry:"Cameroon",
//     hasAPresident:"true",
//     ageOfPresident: 86,
//     touristicSites:["limbe","Douala","Bafoussam"]
// }

// console.log(country)
// console.log("man")

// let person1 = {
//     personName: {
//         firstName : "Emmanuel",
//         lastName : "Takor"
//     },
//     age:28,
//     country:"Cameroon",
//     isMultilingual: "true",
//     languagesSpoken : ["English","French","Pidgin"],
//      aboutMe: function(){
//        console.log( "Hi.My name is " + person1.personName.firstName + person1.personName.lastName + ". I am from " + person1.country + " .I am " + person1.age + " and I speak " + person1.languagesSpoken + ".")
//      }

// }
// console.log(person1.aboutMe())

// let list = [1,2,3,4,5,6,7,8,9]
// let message =""

// function pushToArray(){
// let randomNumber = Math.floor(Math.random() * 50) +3
//     list.push(randomNumber)
//     if(randomNumber < 10){
//         console.log("number is less than 10")
//     }
//     if(randomNumber > 10 && randomNumber < 20){
//         console.log("number is greater than 10 but less than 20")
//     }
//     if(randomNumber > 20 && randomNumber < 30){
//         console.log("number is greater than 20 but less than 30")
//     }
//     if(randomNumber > 30 && randomNumber < 40){
//         console.log("number is greater than 30 but less than 40")
//     }
//     if(randomNumber > 40 && randomNumber < 50){
//         console.log("number is greater than 40 but less than 50")
//     }
//     console.log("Random number is " +randomNumber)
//     console.log(message)
//     console.log(list)
// }
// pushToArray()
// pushToArray()
// pushToArray()
// pushToArray()
// pushToArray()


// let discount ="";

// function discountCalculator(){
// let age = Math.floor(Math.random() * 150)
// if (age < 6){
// discount= "100%"
// console.log("Passenger's age is " + age + ".Passenger is less than 6 and as such is not to pay.Passenger benefits's of a " + discount + " discount.")
// }
// if (age >= 6 && age <= 17){
//     discount= "100%"
//     console.log("Passenger's age is " + age + ".Passenger is in the children age group and as such benefits of a " + discount + " discount.")
//     }
//     if (age >= 18 && age <= 26){
//         discount= "50%"
//         console.log("Passenger's age is " + age + ".Passenger is in student age group and as such benefits of a " + discount + " discount.")
//         }
//         if (age >= 27 && age <= 66){
//             discount= "0%"
//             console.log("Passenger's age is " + age + ".Passenger is in Adult age group and as such benefits of a " + discount + " discount.")
//             }
//             if (age > 66){
//                 discount= "80%"
//                 console.log("Passenger's age is " + age + ".Passenger is in adult citizen age group and as such benefits of a " + discount + " discount.")
//                 }
// }

// discountCalculator()
// discountCalculator()
// discountCalculator()
// discountCalculator()

// let students =[
//     {
//         studentName:"Chanceline",
//         score:2
//     }
//     ,{
//         studentName:"Praise",
//         score:17
//     } ,{
//         studentName:"Paul",
//         score:3
//     } ,{
//         studentName:"Merlin",
//         score:13
//     } ,{
//         studentName:"James",
//         score:10
//     }
//      ,{
//         studentName:"Prince",
//         score:20
//     }
// ]

// let highestScore = "";
// let names="";

// function highestScoreCalculator() {
//     for(let i = 0;i< students.length; i++){
//         if(students[i].score > highestScore){
//             console.log(students[i].studentName)
//             names = students[i].studentName
//             highestScore= students[i].score
//             console.log(highestScore.length - 1)

//         }
//     }
//    let finalResult = Array.from(names).length -1;
//    console.log(finalResult)
// }
// highestScoreCalculator()
// highestScoreCalculator()
// highestScoreCalculator()

// let list = [1,2,3,4,5,"Takor",7]
// console.log(list.length[5])



// function game() {
    
//     let currentHand =   Math.floor(Math.random()*3)
// let hands = ["rock","paper","scissors"]
// for(let i = 0;i < hands.length; i++){
//     console.log(hands[currentHand])
// }
// }
// game()
// game()
// game()
// game()
// game()
// game()

//  function game(){
//     let currentHand =   Math.floor(Math.random()*3)
//     currentHand[]
//     console.log(currentHand)
//  }
//  game()
//  game()
//  game()

// let hands = ["rock","paper","scissors"]

// function hand(){
//     let randHand = Math.floor(Math.random()* 3)
//     return hands[randHand]

// }
// console.log(hand())

// hand()
// hand()
// hand()
// hand()
// hand()


// let fruitShelf = []
// let foodShelf = []

// let basketItem = ["mango","orange","pear","rice","beans","stew"]

// for(let i = 0; i < basketItem.length; i++){
//     if(basketItem[i] == "mango" || basketItem[i] == "orange"|| basketItem[i] == "pear"){
//         fruitShelf.push(basketItem[i])
//     }
//     else if(basketItem[i]=="rice"|| basketItem[i] == "beans" || basketItem[i] == "stew" ){
//         foodShelf.push(basketItem[i])
//     }
    
// }
// console.log(fruitShelf)
// console.log(foodShelf)

// for(let i = 0; i < basketItem.length; i++){
//     if(basketItem[i] == "mango"){
//         fruitShelf.push(basketItem[i])
//     }
//     else if(basketItem[i]=="rice"|| basketItem[i] == "beans" || basketItem[i] == "stew" ){
//         foodShelf.push(basketItem[i])
//     }
    
// }
// console.log(fruitShelf)
// console.log(foodShelf)

// let ulElement = document.querySelector("#ulElement");

let box = document.querySelector("#contentBox");
let ulElement = document.querySelector("#ulElement")

const myInputs = []
let button = document.querySelector("#input-button");
let input = document.querySelector("#input-el");
// let leads = input.value

// button.addEventListener("click" , saveLead)

// function saveLead(){
//   for(let i = 0; i < myInputs.length; i++){
//       console.log(myInputs[i])
//       ulElement.innerHTML += "<li>" + myInputs[i] + "</li>";
//   }
// }


// myInputs.push(input.value)
// box.textContent= myInputs;
// console.log(myInputs)

// function thankYou(){
//     box.innerHTML += " " + "Thank you for buying!"
// }

// box.innerHTML += "<button onclick= thankYou()>Buy!</button>"
// function saveLead(){
//   myInputs.push(input.value)
//   for(let i = 0; i < myInputs.length; i++){
//     let listItems = `<li><a target='_blank' href=' ${myInputs[i]} "'>${myInputs[i]}</a></li>`;
    
//       ulElement.innerHTML = listItems;
//       console.log(myInputs[i])
//       myInputs.pop(input.value)
//       input.value = ""
//   }
// }



// function render(){
//     console.log(myInputs[i])
//     let li = document.createElement("li");
// li.innerHTML += myInputs[i]
// ulElement.appendChild(li)
// }

// const recipient = ["James","Peter","Paul","Marie" ]

// const sender = "Takor";

// let greeting = `Hello ${recipient}, how are you? Cheers! ${sender}.`

// recipient.forEach(function (e) {
//   console.log(`Hello ${e}, how are you? Cheers! ${sender}.`)
// })

// // console.log(greeting)
const colorChanger = document.querySelector("#color");

colorChanger.addEventListener("click", random)

const colors = ["red","blue","green","green","black","pink","violet","grey","brown","aqua","skyblue","chocolate","beige","azure","blueviolet","forestgreen","gold","indiangrey","indigo"]


  // for(i = 0; i < colors.length; i++){
    // if (color == "red"){
    //   document.body.style.backgroundColor = "red";
      
    // }
    // else if (color == "blue"){
    //   document.body.style.backgroundColor = "blue";
    // }
    // else if (color == "green"){
    //   document.body.style.backgroundColor = "green";
     
    // }
    // else if (color == "black"){
    //   document.body.style.backgroundColor = "black";
      
    // }
    // else if (color == "pink"){
    //   document.body.style.backgroundColor = "pink";
      
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "violet";
    
    // }


  function random(){
    let color = colors[Math.floor(Math.random() * 15)]
    // return backgroundStyleColor

    if (color == "red"){
      document.body.style.backgroundColor = "red";
      
    }
    else if (color == "blue"){
      document.body.style.backgroundColor = "blue";
    }
    else if (color == "green"){
      document.body.style.backgroundColor = "green";
     
    }
    else if (color == "black"){
      document.body.style.backgroundColor = "coral";
      
    }
    else if (color == "pink"){
      document.body.style.backgroundColor = "pink";
      
    }
    else if (color == "violet"){
      document.body.style.backgroundColor = "violet";
    
    }
    else if (color == "chocolate"){
      document.body.style.backgroundColor = "chocolate";
    
    }
    else if (color == "beige"){
      document.body.style.backgroundColor = "beige";
    
    }
    else if (color == "azure"){
      document.body.style.backgroundColor = "azure";
    
    }
    else if (color == "blueviolet"){
      document.body.style.backgroundColor = "blueviolet";
    
    }
    else if (color == "forestgreen"){
      document.body.style.backgroundColor = "forestgreen";
    
    }
    else if (color == "gold"){
      document.body.style.backgroundColor = "gold";
    
    }
    else if (color == "indiangrey"){
      document.body.style.backgroundColor = "indiangrey";
    
    }
    else if (color == "indigo"){
      document.body.style.backgroundColor = "indigo";
    
    }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "maroon";
    
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "magenta";
    
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "greenyellow";
    
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "hotpink";
    
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "lawngreen";
    
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "cornflowerblue";
    
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "crimson";
    
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "cyan";
    
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "olive";
    
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "darkolive";
    
    // }
    // else if (color == "violet"){
    //   document.body.style.backgroundColor = "darkgrey";
    
    // }

    else {
      document.body.style.backgroundColor = "black";
    
    }

}
console.log(random())

// if (colors[i] == "red"){
//   document.body.style.backgroundColor = "red";
// }
// else if (colors[i] == "blue"){
//   document.body.style.backgroundColor = "blue";
// }
// else if (colors[i] == "green"){
//   document.body.style.backgroundColor = "green";
// }
// else if (colors[i] == "black"){
//   document.body.style.backgroundColor = "black";
// }
// else if (colors[i] == "pink"){
//   document.body.style.backgroundColor = "pink";
// }
// else if (colors[i] == "violet"){
//   document.body.style.backgroundColor = "violet";
// }

function randomColorGenerator(){
 let backgroundColor = colors[Math.floor(Math.random() * 8)]
  return backgroundColor
  console.log(backgroundColor);
}
randomColorGenerator()