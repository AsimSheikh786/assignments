// ------------JAVA SCRIPT CHAPTER 1 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 1 PRACTICE ASSIGNMENT------------

alert("Error! Please enter a valid password");

alert("Welcome to JS Land...\n Happy Coding!");

alert("Welcome to JS Land...");

alert("Happy Coding!");

alert("Hello... I can run JS through my web browser's console");



// ------------JAVA SCRIPT CHAPTER 2 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 2 PRACTICE ASSIGNMENT------------

var username;

var myName = "Shaikh Muhammad Asim";

var message = "Hello World";
alert(message);

var name, age, course;
name="Ahmed";
age = "16 years old";
course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);

var piz = "PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(piz);

var email = "example@gmail.com";
alert ("My email addtress is" +" "+ email);

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book" + " " + book);

document.write("Yah! I can write HTML content through JavaScript<br/>");

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert (design);



// ------------JAVA SCRIPT CHAPTER 3 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 3 PRACTICE ASSIGNMENT------------

var age = 15;
alert("I am " + age + " years old");

var visit = 14;
alert("You have visited this site "+ visit + " times");

var birthYear = 1990;
document.write("<br/>My birth year is"+" "+ birthYear);
document.write("<br/><br/>Data type of my declared variable is number<br/><br/>")

var name= "John Doe", productTitle= "T-Shirts", quantity= 5;
document.write(name+" ordered "+ quantity+" "+productTitle+ " on XYZ Clothing Store. <br/><br/>");



// ------------JAVA SCRIPT CHAPTER 4 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 4 PRACTICE ASSIGNMENT------------

var name, age, variable;

var $name, _age, variable3, my4th_variable, $my_5thVariable;  //legal variable
// var #name, -age, 3rdVariable, my4th-variable, %$my_5thVariable;  //illegal variable 

document.write("<h1> Rules for naming JS variables </h1> <br/>");
document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable <br/>");
document.write("Variables must begin with a letter, $ or _ .  For example $name, _name or name <br/>");
document.write("Variable names are case sensitive. <br/>");
document.write("Variable names should not be JS keywords. <br/><br/>");




// ------------JAVA SCRIPT CHAPTER 5 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 5 PRACTICE ASSIGNMENT------------

var a= 8, b= 5;
var c= a+b;
document.write("Sum of " + a + " and " + b + " is " + c + "<br/>");

var c= a-b;
document.write("Subtraction of " + a + " and " + b + " is " + c + "<br/>");
var c= a*b;
document.write("Multiplication of " + a + " and " + b + " is " + c + "<br/>");
var c= a/b;
document.write("Division of " + a + " and " + b + " is " + c + "<br/>");
var c= a%b;
document.write("Modulus of " + a + " and " + b + " is " + c + "<br/><br/>");

var d;
document.write("Value after variable declaration is undefined <br/>");
d= 5;
document.write("“Initial value is 5 <br/>");
e= d++;
document.write("Value after increment is 6 <br/>");
e= e+7;
document.write("Value after addition is 13 <br/>");
f= e--;
document.write("Value after decrement is 12 <br/>")
g= f%3;
document.write("The remainder is 0 <br/> <br/>");

var ticket= 600, ticketNums= 5;
var total= ticket*ticketNums;
document.write("Total cost to buy " + ticketNums + " tickets to a movie is " + total + " PKR. <br/> <br/>");

document.write("Table of 7 <br/>");
for(var i=1;i<=10;i++){
    document.write("7 X " + i + " = " + 7*i + "<br/>");
}

var c= 22, f;
f= (c*9/5)+32;
document.write("<br/>" + c + "'C is " + f + "'F <br/>");
var f= 65, c;
c= (f-32)*5/9;
document.write(f + "'F is " + c + "'C <br/><br/>");

var item1= 650, item2= 150, ship= 100;
var total = (item1*3)+(item2*7)+ship;
document.write("<h1> Shopping Cart </h1> <br/><br/>");
document.write("Price of item 1 is " + item1 + "<br/>");
document.write("Quantity of item 1 is 3 <br/>");
document.write("Price of item 2 is " + item2 + "<br/>");
document.write("Quantity of item 2 is 7 <br/>");
document.write("Shipping charges is 100 <br/> <br/>");
document.write("Total cost of your order is " + total + "<br/><br/>");

var tMarks= 980, oMarks= 804;
var per= (oMarks/tMarks)*100;
document.write("<h1> Marks Sheet </h1> <br/><br/>");
document.write("Total Marks: " + tMarks + "<br/>");
document.write("Marks Obtained: " + oMarks + "<br/>");
document.write("Percentage " + per + "% <br/> <br/>");

var dollar= 163.48, saudi= 43.54;
var pkr= dollar+saudi;
document.write("<h1> Currency in PKR </h1><br/> <br/>");
document.write("1 Dollar = " + dollar + "Rs and 1 Saudi = " + saudi + "Rs <br/>");
document.write("Total currency in PKR : " + pkr + "<br/><br/>");

var a= 7;
var b= a+5*10/2;
document.write("Answer of 7+5*10/2 is : " + b + "<br/> <br/>");

var currentYear= 2020, birthYear= 1998;
var age= currentYear-birthYear;
document.write("<h1> Age Calculator </h1> <br/><br/>")
document.write("Current Year : " + currentYear + "<br/>");
document.write("Birth Year : " + birthYear + "<br/>");
document.write("Your age is : "+ age + "<br/><br/>");

document.write("<h1>The Geometrizer</h1><br/><br/>");
var r= 30;
var c= 2*3.142*r;
var a= 3.142*r*r;
document.write("Radius of a circle : "+ r+ "<br/>");
document.write("The Circumference is : "+ c+ "<br/>");
document.write("The Area is : "+ a+ "<br/><br/>");

document.write("<h1>The Lifetime Supply Calculator</h1><br/><br/>");
var favoriteSnack= "Chocolates", currentAge= 18, maximumAge= 65,  amountPerDay= 3;
var total= (maximumAge-currentAge)*amountPerDay;
document.write("Favourite snack : "+ favoriteSnack+ "<br/>");
document.write("Current age : "+ currentAge+ "<br/>");
document.write("Estimated maximum age "+ maximumAge+ "<br/>");
document.write("Amount of snacks per day "+ amountPerDay+ "<br/>");
document.write("You will need "+ total+" "+favoriteSnack+ " to last you until the ripe old age of "+ maximumAge+ "<br/><br/>");




// ------------JAVA SCRIPT CHAPTER 6-9 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 6-9 PRACTICE ASSIGNMENT------------

var i=15;
document.write("Result<br/> The Value of a is : "+ i+ "<br/>________________________________<br/><br/>");
j= ++i;
document.write("The value of ++a is : "+ j+"<br/>");
document.write("Now the value of a is : " + j+ "<br/><br/>");
k=j++;
document.write("The value of a++ is : "+ k + "<br/>");
document.write("Now the value of a is : " + k+ "<br/><br/>");
l=--k;
document.write("The value of --a is : "+ l+"<br/>");
document.write("Now the value of a is : " + l+ "<br/><br/>");
m=l--;
document.write("The value of a-- is : "+ m + "<br/>");
document.write("Now the value of a is : " + m+ "<br/><br/>");

var a = 2, b = 1;
document.write("a is : "+a+"<br/>"+ "b is : "+b+"<br/>");
var c= --a - --b + ++b + b--;
document.write("Result of --a - --b + ++b + b-- is : "+c+"<br/><br/>");

var name= prompt("Enter your name");








// ------------JAVA SCRIPT CHAPTER 9-11 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 9-11 PRACTICE ASSIGNMENT------------

var city=prompt("Enter city name");
if(city=="karachi"){
    alert("Welcome to city of lights");
}else{
    alert("Welcome to the "+city);
}

var gender=prompt("Enter your gender");
if(gender=="female"){
    alert("Good Morning Ma’am");
}else{
    alert("Good Morning Sir");
}

var color=prompt("Enter color of road traffic signal");
if(color==="red"){
    alert("Must Stop");
}else if(color==="yellow"){
    alert("Ready To Move");
}else if(color==="green"){
    alert("Move Now");
}else{
    alert("Your color is incorrect");
}

var fuel=prompt("Enter fuel quantity in litres");
if(fuel<=0.25){
    alert("Please refill the fuel in your car");
}else{
    alert("No need to refill the fuel rightnow");
}

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}else{
    alert("given condition for variable a is false");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}else{
    alert("given condition for variable b is false");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}else{
    alert("condition 1 is false")
}
if (c === 13){
    alert("condition 2 is true");
}else{
    alert("condition 2 is false");
}
if (++c < 14){
    alert("condition 3 is true");
}else{
    alert("condition 3 is false");
}
if(c === 14){
    alert("condition 4 is true");
}else{
    alert("condition 4 is false");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}else{
    alert("The cost is not equals");
}

var a= prompt("Enter true or false")
if (a=="true"){
    alert("True");
}else{
    alert("False");
}

if("car" > "cat"){
    alert("cat is smaller than car");
}

var math= +prompt("Enter your Math marks out of 100");
var english= +prompt("Enter your english marks out of 100");
var science= +prompt("Enter your science marks out of 100");
var oMarks = math+english+science;
var per= (oMarks/300)*100;
document.write("<h1>Mark Sheet</h1> <br/> <br/>");
document.write("Total marks is : 300 <br/>");
document.write("Mark obtained is : "+ oMarks+ "<br/>");
document.write("Percentage : "+per+ "%<br/>");
if(per>=80){
    document.write("Grade : A+1 <br/> Remarks : Excellent <br/><br/>");
}else if(per>=70){
    document.write("Grade : A <br/> Remarks : Good <br/><br/>");
}else if(per>=60){
    document.write("Grade : B <br/> Remarks : You need to improve <br/><br/>");
}else{
    document.write("Fail <br/><br/>");
}

var a=2;
var b= +prompt("A Secret Number Game","Enter your secret number from 1 to 10");
if(b==2){
    alert("Bingo! Correct answer");
}else if(b==3){
    alert("Close enough to the correct answer");
}else if(b==1){
    alert("Close enough to the correct answer");
}else{
    alert("Sorry! Your answer is incorrect");
}

var d=+prompt("Enter your number");
var e= d%3
if (e==0){
    alert("Your number is divisible by 3");
}else {
    alert("Your number is not divisible by 3");
}

var g=+prompt("Enter your number");
var h= d%2
if (h==0){
    alert("Your number is Even number");
}else {
    alert("Your number is Odd number");
}

var a= +prompt("Enter temperature in C'");
if(a>=40){
    alert("It is too hot outside");
}else if(a>=30){
    alert("The Weather today is Normal");
}else if(a>=20){
    alert("Today’s Weather is cool");
}else{
    alert("OMG! Today’s weather is so Cool");
}

var a= +prompt("Enter your First number");
var b= prompt("Enter your Operator");
var c= +prompt("Enter your Second number");
if(b==="+"){
    var d= a+c;
    alert("Your answer is "+ d);
}else if(b==="-"){
    var d= a-c;
    alert("Your answer is "+ d);
}else if(b==="*"){
    var d= a*c;
    alert("Your answer is "+ d);
}else if(b==="/"){
    var d= a/c;
    alert("Your answer is "+ d);
}else if(b==="%"){
    var d= a%c;
    alert("Your answer is "+ d);
}else{
    alert("Your operator is incorrect");
}




// ------------JAVA SCRIPT CHAPTER 12-13 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 12-13 PRACTICE ASSIGNMENT------------
var n=0123456789;
var al="abcdefghijklmnopqrstuvwxyz";
var alf="ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// var num=prompt("Enter an number then I will check it's positive or negative or zero");
// for ( var i=0; i<num.length; i++){
//     if( num[i]==="-"){
//         alert("Your number is negative");
//     }else if( num[i]==="+"){
//         alert("Your number is positive");
//     }else if( num[i]==n){
//         alert("Your number is positive");
//     }else if (num[i]==0){
//         alert("Your answer is 0");
//     }else if(num[i]==al){
//         alert("Your input is incorrect");
//     }else if(num[i]==alf){
//         alert("Your input is incorrect");
//     }else{
//         alert("Your input is incorrect");
//     }
// }

var a = prompt("Enter a letter");
if (a=="a"||a=="e"||a=="i"||a=="o"||a=="u"){
    alert("Your letter is Vowel");
}else{
    alert("Your letter is not Vowel");
}

var password = prompt("Enter your Password");
var confirmPassword = prompt("Confirm your Password");
if (password==confirmPassword){
    alert("Your password is correct");
}else{
    alert("Your password is incorrect");
}

var time = +prompt("Enter time in 24 hours");
if (time<18){
    alert("Good day");
}else{
    alert("Good evening");
}

var time = +prompt("Enter time in 24 hours like 1500 or 1530");
if (time<1200){
    alert("Good morning");
}else if(time>=1200&&time<1700) {
    alert("Good afternoon");
}else if(time>=1700&&time<2100) {
    alert("Good evening");
}else if(time>=2100&&time<2400) {
    alert("Good night");
}else{
    alert("Your time is incorrect");
}




// ------------JAVA SCRIPT CHAPTER 14-16 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 14-16 PRACTICE ASSIGNMENT------------

var studentsName= [];

var stringArray= ["karachi", "lahore", "multan", "islamabad"];
var numArray= [2,4,6,8,10,12];
var booleanArray= ["true", "false", 0, 1, "white", "black", "yes", "no", "+", "-"];
var mixArray= ["true", "false", 0, 1, "white", "black", "yes", "no", "+", "-"];

var qualification= ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"];
for( var i=0; i<=7;i++){
    document.write(i+1 +") "+ qualification[i] + "<br/>");
}

