// Simple Javascript Objects
var msg = document.getElementById("message");

// car constructor
function car(make, model, color){
	this.make = make || "unknown";
	this.model = model || "model";
	this.color = color || "unpainted";
	}

// car prototype
car.prototype.display = function(){
		msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+
		" "+ this.model+".</p>";
};
		
// create objects
var c1 = new car("Ford", "Mustang", "Blue");
var c2 = new car("Ford", "GTO", "White");
var c3 = new car();

// call car
c2.color = "red";
c1.display();
c2.display();
c3.display();

// guitar constructor
function guitar(make, howManyStrings, color){
	this.make = make || "unknown";
	this.howManyStrings = howManyStrings || "number of strings not listed";
	this.color = color || "unpainted";
}

// guitar prototype
guitar.prototype.display = function(){
		msg.innerHTML += "<p>Your guitar is a "+ this.color+" "+this.make+
		" "+ this.howManyStrings+".</p>";
};

// create objects
var g1 = new guitar("Ibanez", "6 String", "Black");
var g2 = new guitar("Gibson","6 String","Blue");
var g3 = new guitar("ESP","7 String","Lime Green");

// call guitar
g1.display();
g2.display();
g3.display();

// computer constructor
function computer(make, processor, ram){
	this.make = make || "unknown make";
	this.processor = processor || "unknown processor";
	this.ram = ram || "unspecified random access memory";
}

// computer prototype
computer.prototype.display = function(){
	msg.innerHTML += "<p>Your computer is a "+ this.make + " " +this.processor
	+ " " + "with " + this.ram + ".</p>";
}

//create objects
var com1 = new computer("Dell", "Intel Core i3-2375M @ 1.50GHz" ,"4gb");
var com2 = new computer("MacBook", "AMD Phenom X2 Dual-Core GE-5560", "2gb");
var com3 = new computer();

// call computer
com1.display();
com2.display();
com3.display();

// director constructor
function lucBessonFilms(Director, Title, Year){
	this.Director = Director || "unknown";
	this.Title = Title || "unknown";
	this.Year = Year || "unspecified";
}
// computer prototype
lucBessonFilms.prototype.display = function(){
	msg.innerHTML += "<p>The film is directed by "+ this.Director + " " +this.Title
	+ " " + "released in " + this.Year + ".</p>";
}
var dir1 = new lucBessonFilms("Luc Besson", "Leon" ,"1994");
var dir2 = new lucBessonFilms("Luc Besson", "Fifth Element", "1997");
var dir3 = new lucBessonFilms();

dir1.display();
dir2.display();
dir3.display();

function clintEastwoodFilms(Title,Director,Year){
	this.Title = Title || "Unknown";
	this.Director = Director || "Unknown Director";
	this.Year = Year || "unknow release date";
};
clintEastwoodFilms.prototype.display = function(){
	msg.innerHTML += "<p>Directed by " + this.Director + " " + this.Title + " " + "was released in " +
	this.Year + ".</p>";
}
var secondDir1 = new clintEastwoodFilms("American Sniper","Clint Eastwood","2015");

secondDir1.display();

// Cereal constructor

function breakfast(make, container, utensil){
	this.make = make || "unknown brand";
	this.container = container || "unknown container";
	this.utensil = utensil || "unknown utensil";
}

// Cereal prototype
breakfast.prototype.display = function(){
	msg.innerHTML += "<p>You are eating " + this.make + " in a " + this.container + 
	" with a " + this.utensil + ".</p>";
}

// Cereal Objects
var cereal1 = new breakfast("Sultana Bran","Bowl","Spoon");
var cereal2 = new breakfast("Rice Crispies","Bowl","Spoon");
var cereal3 = new breakfast("Shreddies","Bowl","Spoon");
var cereal4 = new breakfast();

//Call Cereal
cereal1.display();
cereal2.display();
cereal3.display();
cereal4.display();

// Director constructor
function jimJarmusch(Title, Director, Year){
	this.Title = Title || "Unknown";
	this.Director = Director || "Unknow Director";
	this.Year = Year || "Unknown release date";
}
//Director prototype
