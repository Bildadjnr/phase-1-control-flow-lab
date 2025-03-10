function scuberGreetingForFeet(distance){
  // Write your code here!
   if (distance <= 400) {
     return "This one is on me!";
   } else if (distance > 400 && distance <= 2000) {
     return "That will be twenty bucks.";
   } else if (distance > 2000 && distance < 2500) {
     return "I will gladly take your thirty bucks.";
   } else if (distance > 2500) {
     return "No can do.";
   }
}

function ternaryCheckCity(city){
  // Write your code here!

    let theCity;
    city === "NYC" ? (theCity = "Ok, sounds good.") : (theCity = "No go.");
    return theCity;
}
  

function switchOnCharmFromTip(tip){
  // Write your code here!
  let answer;
  switch (tip) {
    case "generous":
      answer = "Thank you so much.";
      break;
    case "not as generous":
      answer = "Thank you.";
      break;
    default:
      answer = "Bye.";
      break;
  }
  return answer;
}