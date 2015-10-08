// dancers = [
// 	"F Allision McMillan",
// 	"M Frank Opitz",
// 	"M Mason McMillan",
// 	"F Cheryl Ferenback",
// 	"M Bryan Frazer",
// 	"M David Durr",
// 	"M Danny Martin",
// 	"F Aurora Adney"
// ];

// dancers = {
// 	"Allision McMillan": "F",
// 	"Frank Opitz": "M",
// 	"Mason McMillan": "M",
// 	"Cheryl Ferenback": "F",
// 	"Bryan Frazer": "M",
// 	"David Durr": "M",
// 	"Danny Martin": "M",
// 	"Aurora Adney": "F"
// }

// Datastructure changed from readfile into json.
dancers = [
	{"name":"Allision McMillan","sex":"F"},
	{"name":"Frank Opitz","sex":"M"},
	{"name":"Mason McMillan","sex":"M"},
	{"name":"Cheryl Ferenback","sex":"F"},
	{"name":"Bryan Frazer","sex":"M"},
	{"name":"Danny Martin","sex":"M"},
	{"name":"Aurora Adney","sex":"F"}
];

function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
	this.count = count;
}

//enqueue
function enqueue(element){
	this.dataStore.push(element);
	return this;
}

//dequeue
function dequeue(){
	return this.dataStore.shift();
}

//return the first element
function front(){
	return this.dataStore[0];
}

//return the last element
function back(){
	return this.dataStore[this.dataStore.length-1];
}

//display all the elements in the queue
function toString(){
	var retStr = '';
	for(var i=0,len=this.dataStore.length; i<len; i++){
		retStr += this.dataStore[i] + '\n';
	}
	return retStr;
}

//judge whether the queue is empty or not.
function empty(){
	if(this.dataStore.length == 0){
		return true;
	}else{
		return false;
	}
}

function count(){
	return this.dataStore.length;
}

// function Dancer(name, sex){
// 	this.name = name;
// 	this.sex = sex;
// }

function getDancers(males, females){
	// var names = read("dancers.txt").split("\n");
	// for(var i=0,len=names.length; i<len; i++){
	// 	names[i] = names[i].trim();
	// }
	// for(var i=0,len=names.length; i<len; i++){
	// 	var dancer = names[i].split(" ");
	// 	var sex = dancer[0];
	// 	var name = dancer[1] + " " + dancer[2];
	// 	if(sex == 'F'){
	// 		females.enqueue(new Dancer(name, sex));
	// 	}else{
	// 		males.enqueue(new Dancer(name, sex));
	// 	}
	// }
	for(var i=0,len=dancers.length; i<len; i++){
		if(dancers[i].sex == "F"){
			females.enqueue(dancers[i]);
		}else{
			males.enqueue(dancers[i]);
		}
	}
}

function dance(males, females){
	var person;
	print("The dance partners are:");
	while(!females.empty() && !males.empty()){
		person = females.dequeue();
		putstr("Female dancer is: " + person.name);
		person = males.dequeue();
		print(" and the male dancer is: " + person.name);
	}
}

//test
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if(maleDancers.count() > 0){
	print("There are " + maleDancers.count() + " male dancers waiting to dance.");
}
if(femaleDancers.count() > 0){
	print("There are " + femaleDancers.count() + " female dancers waiting to dance.");
}