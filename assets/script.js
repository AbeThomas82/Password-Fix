var specialChars = [" ","~","`","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",",",";","<",".",">","/","?"];
var numerals = ["0","1","2","3","4","5","6","7","8","9"];
var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var answer="";
var yesLowers;
var yesUppers;
var yesNumerals;
var yesSpecials;
var smashedPass = "";

function generatePassword(x,y){
    var crazyArray = [];
    var answer=(prompt("How long, in number of characters, would you like your password to be?"));
    console.log(answer);
    x=8;
    y=128;
    while((answer<x) || (answer>y)){

            alert("Invalid response. Please try using a password character amount between "+ x +" and "+ y +" characters in length.");
            var answer=(prompt("How long, in number of characters, would you like your password to be?"));
            console.log(answer);
        }if((answer>=x) && (answer<=y)){
            var yesLowers = confirm("Would you like to use lowercase characters?");
            console.log(yesLowers == true);
            var yesUppers = confirm("Would you like to use uppercase characters?");
            console.log(yesUppers == true);
            var yesNumerals = confirm("Would you like to use numeral characters?");
            console.log(yesNumerals == true);
            var yesSpecials = confirm("Would you like to use special characters?");
            console.log(yesSpecials == true);
            while((yesLowers === false) && (yesUppers === false) && (yesNumerals === false) && (yesSpecials === false)){
                alert("You must select at least one parameter.");
                var yesLowers = confirm("Would you like to use lowercase characters?");
                console.log(yesLowers);
                var yesUppers = confirm("Would you like to use uppercase characters?");
                console.log(yesUppers);
                var yesNumerals = confirm("Would you like to use numeral characters?");
                console.log(yesNumerals);
                var yesSpecials = confirm("Would you like to use special characters?");    
                console.log(yesSpecials);
            }
        alert("Tabulating preferences. Please stand by...");

        }
        if (yesLowers == true){
            crazyArray = crazyArray.concat(lowerChars);
        }
        if (yesUppers == true){
            crazyArray = crazyArray.concat(upperChars);
        }
        if (yesNumerals == true){
            crazyArray = crazyArray.concat(numerals);
        }
        if (yesSpecials == true){
            crazyArray = crazyArray.concat(specialChars);
        }
        console.log(crazyArray);
        var smashedPass = "";
        for (var i=0; i<answer; i++){
            smashedPass = smashedPass + crazyArray[Math.floor(Math.random()*crazyArray.length)]; 
            console.log(smashedPass);
        }
        return(smashedPass);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);