// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
var divideByTwo = function(number){
		console.log(number/2);
	};
	
	divideByTwo(10);
// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
var greeting = function(firstName1, firstName2) {
	console.log("Hello " + firstName "and " + firstName2); 
};
 
	var name = "Ajax";
	var name2 = "Sully";

	greeting(name, name2);
	
// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
//6*x
var cashews = function(price) {
	console.log(6 * price);
}
var cost= 3;
cashews(cost);
// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

var players = function(teams) {
	console.log(teams);
}
var team1 = []; 
for(i=0;i<teammates.length;i+=2){
  team1.push(teammates[i]);
}
players(team1);
var team2 =[];
for(i=1;i<teammates.length;i+=2){
  team2.push(teammates[i]);
   };
 players(team2);
// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
//    Call the function inside of a conditional statement that prints one statement if the value is even or another statement if the value is odd.
//    In pseudocode:
//                  defining my function here(parameter)
//                      returns a value that divides that parameter by 4
//
//                  if (calling the function with parameter divided by 2 is even)
//                      print out a statement saying the number is even
//                  else
//                      print out a statement saying the number is odd
	
	

	var quarter = function(number) {
	console.log("The original number is: " + number)
	return number/4;		           
	 };if(yourNumber % 2===0){
			console.log("the number is even"); 
	}else {console.log("the number is odd");
		
	};
	var yourNumber = 200;
	quarter(yourNumber);
// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
var area = function (length, width){
	console.log(length * width);
}
var perimeter = function(length, width){
	console.log(2 * length + 2 * width);
}
var length = 1;
var width = 4;
area(length, width);
perimeter(width,length); 


// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
//body
var sleepings = function (hours){
	if (hours > 8){
		console.log("Awesome, you got a good nights rest!");
	}
	else{
		console.log("You need to get more zzzs");
	}
};

sleepings(10);
sleepings(4);
sleepings(12);

// 8. Prompt a user to enter a six digit number. Write a function that reverses the number.
//    (split(splits into each character an array, reverse(works for arrays only, join(makes it a string again--ex.array with $signs in it, not adding it))
var number = prompt("Please pick a six digit number");

var reverse = function(number){
	var count = number.split("").length;
		if(count === 6){
			console.log(number.split("").reverse().join(""));
		}else{console.log("Please enter a six digit number")}
};
reverse(number);
// 9. Within the fuction you wrote in #7, write a conditional statement that checks to ensure the user entered a six digit integer.
//    If they have not entered a six digit integer, give them a message about being a failure.

// 10. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
var piggyBank = function (quarters, dimes, nickels, pennies){
	var quarterTotal =quarters * .25; 
	var dimesTotal = dimes * .10;
	var nickelsTotal = nickels * .05;
	var penniesTotal = pennies * .01;
	return "$" + (quarterTotal + dimesTotal + nickelsTotal + penniesTotal).toFixed(2) + "";
	};
	console.log(piggyBank(10, 3, 10, 5));


//.toFixed(2); takes a float (which is all the numbers decimals) and takes it the the decimal state you put i.e.2 popular with money
// 11. Develop a function that determines a person's age by prompting them for their birth year.
var birthYear = prompt("What year were you born?");

var age = function(birth){
	var age = 2016 - birthYear;
	return "You are approximately " + age + " years old";
 };
 console.log(age(birthYear));
// 12. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400 it is a leap year
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is
var leapYear = function (year) {
	if(year % 4 === 0 && year % 100 !==0 || year % 400 === 0){
			console.log("Leap year");
		}else{
			console.log("Not a leap year");
		}
	};
leapYear(1997);
leapYear(1996);
leapYear(1900);
leapYear(2000);
leapYear(2016);
leapYear(2021);
leapYear(2024);
// 13. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number
//        If the phone number is more than 11 digits assume that it is a bad number
    //charAt(0)

  var cleanNumber = function (phone) {
  	phone = phone.toString();
  		if(phone.length < 10 || phone.length > 11){
  			console.log("the number is bad");
  		}else{
  			console.log("thanks");
  		}if(phone.length === 11){
  			if(phone.charAt(0) == 1){
  				var clean = phone.substring(1);
  				console.log(clean);
  			}
  	}
  		};
  			

  cleanNumber(3036971412);
  cleanNumber(123);
  cleanNumber(1234567891011);
  cleanNumber(13036971412);

// 14. Create a function that determines whether a parameter is a number or not (Hint: google "isNan")
//     Iterate over the elements in the following array to determine if each is a number.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
var thing = function(array){
	for(i=0; i<arrayOfAllTheThings.length; i++){
		if(isNaN(array[i])){
			console.log(arrayOfAllTheThings[i] + " is not a number");
		}else{
			console.log(arrayOfAllTheThings[i] + " is a number");
		}
	}
};
thing(arrayOfAllTheThings);
// 15. Create a die rolling function that accepts two parameters (the two six-sided dice) and outputs an array of the two values rolled.
   //math.floor is good for math.random - rounds the number down to its whole number.
dieOne = [1, 2, 3, 4, 5, 6];
dieTwo = [1, 2, 3, 4, 5, 6];

var rollDice = function(dieOne, dieTwo) {
  var roll = [];

  dieOne = dieOne[Math.floor(Math.random() * dieOne.length)];
  dieTwo = dieTwo[Math.floor(Math.random() * dieTwo.length)];
  roll.push(dieOne, dieTwo);
  console.log("Your roll: "+roll);
  return roll;
}

rollDice(dieOne, dieTwo);

// 16. Create another fuction called "whichSide". It will accept the array from above as it's only parameter.
//     This function will mimic a Monopoly board. Start playerOne at the Go space (0) and add the two values from your die array to determine
//     how many spaces the player will move. Log to the console which side of the board the player is on.
//     Hint: each side has 11 spaces. You can call the sides of the board: north, east, south, west or top, right, bottom, left.
var roll = rollDice(dieOne, dieTwo);
var playerOne = 0;

var whichSide = function(roll) {
  var move = roll[0] + roll[1];

    playerOne += move;
    if(playerOne === 10 || playerOne === 20 || playerOne === 30){
      console.log("corner");
    }
    else if(playerOne < 10){
      console.log(playerOne);
      console.log("south");
    }
    else if(playerOne < 20){
      console.log(playerOne);
      console.log("west");
    }

    else if(playerOne < 30){
      console.log(playerOne);
      console.log("north");
    }
    else if(playerOne < 39){
      console.log("east");
    }
    else if(playerOne <= 39){
      console.log("You made it around the board!");
    }
}
whichSide(roll);

whichSide(rollDice(dieOne, dieTwo));
whichSide(rollDice(dieOne, dieTwo));
whichSide(rollDice(dieOne, dieTwo));

// 17. Using the game above, use the same function(s) and add additional code to determine if the player is on a corner spot.
//     Log to the console which corner the player is located.
