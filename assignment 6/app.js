// ------------JAVA SCRIPT CHAPTER 21-25 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 21-25 PRACTICE ASSIGNMENT------------

// TASK : 1

var first = prompt("Enter your first name");
var last = prompt("Enter your last name");
var fullName = first+" "+last;
alert("Hi! "+fullName);

//TASK : 2

var model = prompt("Enter your favorite mobile phone model");
var length = 0;
for( var i=1; i<=model.length; i++){
    length++
}
alert("Your Favorite Mobile Model is "+model+ "\n" +"Length of string is "+length);

//TASK : 3

var word = "Pakistani";
var indexNum = word.indexOf("n");
alert("String is : "+ word + "\n" + "Index of 'n' is : "+ indexNum);

//TASK : 4

var word = "Hello World";
var indexNum = word.lastIndexOf("l");
alert("String is : "+ word + "\n" + "Index of last 'l' is : "+ indexNum);

//TASK : 5

var word = "Pakistani";
var char = word[3];
alert("String is : "+ word + "\n" + "Character at index 3 is : "+ char);

//TASK : 6

var first = prompt("Enter your first name");
var space = " ";
var last = prompt("Enter your last name");
var fullName = first.concat(space,last);
alert("Hi! "+fullName);

//task : 7

var city = "Hyderabad";
var word1 = "Islam";
var word2 = city.slice(5);
var city2 = word1+word2;
alert("City : "+city+ "\n"+ "After Replacemnet : "+city2);

//TASK : 8

var message = "Ali and Sami are best friends. They play cricket and football together";
var replace = message.replace(/and/g, "&");
alert(replace);

//TASK : 9

var a = "472"
var b = parseInt(a);
alert("Value : "+ a+"\nData Type : "+ typeof a+"\nValue : "+ b+"\nData Type : "+ typeof b);

//TASK : 10

var word = prompt("Enter any word in small alphabats")
var word2 = word.toUpperCase();
alert("Before : "+word + "\nAfter : "+word2);

//TASK : 11

var word = prompt("Enter any word")
var a = word[0];
var b = word.slice(1);
var x = a.toUpperCase();
var y = b.toLowerCase();
var word2 = x+y;
alert("Before : "+word + "\nAfter : "+word2);

//TASK : 12

var a = 35.36;
var b = a.toString();
var x = b.slice(0,2);
var y = b.slice(3);
var z = x+y;
alert("Value : "+ a+"\nData Type : "+ typeof a+"\nValue : "+ z+"\nData Type : "+ typeof z);

//TASK : 13

// var arr = "!@#$%^&*()_+/-=,./;[]<>?:{}"
var userName = prompt("Enter your name");
var user = userName.toLowerCase();
var a;
for( var i = 0; i<=userName.length; i++ ){
    if(user[i]=="@"){
        a = "@"
    }else if(user[i]=="!"){
        a = "!"
    }else if(user[i]==","){
        a = ","
    }else if(user[i]=="."){
        a = "."
    }
}
if(a=="@"){
    alert("Please enter valid username")
}else if(a=="!"){
    alert("Please enter valid username")
}else if(a==","){
    alert("Please enter valid username")
}else if(a=="."){
    alert("Please enter valid username")
}else{
    alert("Your username is valid");
}

//TASK : 14

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("Welcome to ABC Bakery, what do you want to order Sir/Ma'am");
var c = b.toLowerCase();
for(var i=0; i<=a.length; i++){
    if(c==a[i]){
        var d=c;
        var e=i;
    }
}
if(d==c){
    alert(d+" is available at index "+e+" in our bakery");
}else{
    alert("We are sorry, "+c+" is not available in our bakery");
}

//TASK : 15






//TASK : 16

var university = "University of Karachi";
for(var i=0; i<university.length; i++){
    document.write(university[i]+"<br/>");
}
document.write("<br/><br/>");

//TASK : 17

var word = prompt("Enter any word");
var word2 = word.toLowerCase()
var a = word.length-1;
alert("word : "+word+"\nLast character is : "+word2[a]);

//TASK : 18











// ------------JAVA SCRIPT CHAPTER 26-30 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 26-30 PRACTICE ASSIGNMENT------------

//TASK : 1

var a = +prompt("Enter positive decimal number");
var b = Math.round(a);
var c = Math.floor(a);
var d = Math.ceil(a);
alert("Number : "+a+"\nRound off : "+b+"\nFloor value : "+c+"\nCeil value : "+d);

//TASK : 2

var a = +prompt("Enter negative decimal number");
var b = Math.round(a);
var c = Math.floor(a);
var d = Math.ceil(a);
alert("Number : "+a+"\nRound off : "+b+"\nFloor value : "+c+"\nCeil value : "+d);

//TASK : 3

var a = -4;
a = a.toString();
var b = 5;
b = b.toString();
if(a[0]=="-"){
    var c = a.slice(1);
    document.write("The absolute value of "+a+" is "+c+"<br/>");

}
if(b[0]=="-"){
    var d = b.slice(1);
    document.write("The absolute value of "+b+" is "+d+"<br/>");

}else{
    document.write("The absolute value of "+b+" is "+b+"<br/>");
}

//TASK : 4

var a = Math.random()*6
var b = Math.round(a)
alert("Random Dice Value : "+b);

//TASK : 5

var a = Math.random()
var b = Math.round(a)
if(b==1){
    alert("Heads");
}else{
    alert("Tails")
}

//TASK : 6

var a = Math.random()*100
var b = Math.round(a)
alert("Random number between 1 and 100 : "+b);

//TASK : 7

var a = prompt("Enter your weight like 50kgs 0r 50.2kgs or 50.2kilograms");
var b = parseFloat(a);
alert("The weight of user is "+b+" Kilograms.");

//TASK : 8

var a = Math.random()*10;
var b = Math.round(a);
var c = prompt("This is a secret game, please enter a number between 1 and 10");
if(b==c){
    alert("Bingoo! Your number is correct");
}else{
    alert("Sorry! Try again");
}



// ------------JAVA SCRIPT CHAPTER 31-34 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 31-34 PRACTICE ASSIGNMENT------------

//TASK : 1

var rightNow = new Date();
document.write("Current<br/>"+rightNow+"<br/> <br/>");

//TASK : 2

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var a = new Date();
var b = a.getMonth();
alert("Current month is "+month[b]);

//TASK : 3

var month = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];
var a = new Date();
var b = a.getDay();
alert("Current month is "+month[b]);

//TASK : 4

var month = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
var a = new Date();
var b = a.getDay();
if(month[b]=="Sat"||month[b]=="Sun"){
    alert("Today is Fun Day");
}else{
    alert("Today is "+month[b]);
}

//TASK : 5

var a = new Date();
var b = a.getDate();
if(b<=15){
    alert("First fifteen days of the month.");
}else{
    alert("Last days of the month.");
}

//TASK : 6

var a = new Date();
var b = a.getTime();
var c = b/60000;
document.write("Current Date : "+a+"<br/>");
document.write("Elapsed milliseconds since Jan 1, 1970 : "+b+"<br/>");
document.write("Elapsed minutes since Jan 1, 1970 : "+c+"<br/><br/>");

//TASK : 7

var a = new Date();
var b = a.getHours();
if(b<12){
    alert("It's AM");
}else{
    alert("It's PM");
}

//TASK : 8



//TASK : 9

var a = new Date("June 18, 2015");
var aMili = a.getTime();
var b = new Date();
var bMili = b.getTime();
var c = bMili-aMili;
var d = c/(1000*60*60*24);
var e = Math.round(d);
alert(e+" days passed since 1st Ramadan, 2015.")








// ------------JAVA SCRIPT CHAPTER 35-38 PRACTICE ASSIGNMENT------------
// ------------JAVA SCRIPT CHAPTER 35-38 PRACTICE ASSIGNMENT------------

//TASK : 1

function date(){
    var a = new Date();
    alert(a);
}
date();

//TASK : 2

function greet(c){
    alert("Hello! "+c);
}
var a = prompt("Enter your first name");
var b = prompt("Enter your last name");
var c = a+" "+b;
greet(c);

//TASK : 3

function add(c){
    alert("Sum of two numbers is "+c);
}
var a = +prompt("Enter your first number");
var b = +prompt("Enter your second number");
var c = a+b;
add(c);

//TASK : 4

function cal(){
    var i = +prompt("Enter your first number");
    var j = prompt("Enter your operator like +,-,*,/ or %");
    var k = +prompt("Enter your second number");
    if(j=="+"){
        var m = i+k;
    }else if(j=="-"){
        var m = i-k;
    }else if(j=="*"){
        var m = i*k;
    }else if(j=="/"){
        var m = i/k;
    }else if(j=="%"){
        var m = i%k;
    }
    var a = m;
    return a;
}
alert(cal());

//TASK : 5

function square(a){
    var b = a*a;
    return b;
}
var a = +prompt("Enter a number");
square(a);
alert("Square of "+a+ " is "+square(a));

//TASK : 6

function fac(g){
    var h = g;
    for(var i=g-1; i>=1; i--){
        h*=i;
    }
    return h;
}
var g = +prompt("Enter a number for factorial");
fac(g);
alert("factorial of "+g+ " is "+fac(g));

//TASK : 7

function count(k,l){
    var v = 0,w;
    for(var i = k; i<=l; i++){
        w = ++v;
    }
    return w;
}
var k = prompt("Enter your starting number");
var l = prompt("Enter your ending number which is greater than starting number");
count(k,l);
alert("Numbers between "+k+" and "+l+" is "+count(k,l));

//TASK : 8

function count(k,l){

    function square(k,l){
        k*=k;
        l*=l
        var f = k+l;
        return f;
    }
    square(k,l)
    var h = (square(k,l)**(1/2));
    return h;
}
var k = prompt("I am going to calculate triangle, Enter value of perpendicular number");
var l = prompt("Enter va;lue of base");
count(k,l);
alert("Value of Hypotenuse is  "+count(k,l));

//TASK : 9

function area(r,s){
    var o = r*s;
    return o;
}
alert("Area of rectangle is "+area(7,5));

function area(a,b){
    var c = a*b;
    return c;
}
var a = +prompt("Enter value of width");
var b = +prompt("Enter value of height");
area(a,b)
alert("Area of rectangle is "+area(a,b));

//TASK : 10

function pali(word,beee){
    for(var i = word.length-1; i>=0; i--){
        beee+=word[i];
    }
    return beee;
}
var word = prompt("Enter a word then i will tell you that this is Palindrome or not");
var beee = "";
pali(word,beee);
if (pali(word,beee)==word){
        alert("Yes your word "+word+" is Palindrome");
    }else{
        alert("Your word "+word+" is not Palindrome");
    }

//TASK : 11

function index(word){
    var word2 = word;
    var indexof;
    var newW;
    
    for(var i = 0; i>word.length; i++){
        newW = word2[0].toUpperCase();
        indexof = word2.indexOf(" ");
        newW = newW + word2.slice(1,indexof+1);
        word2 = word.slice(indexof-1)

    }
}
var word = "the quick brown fox";
index(word);
