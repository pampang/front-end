function List(){
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];   //初始化一个空数组来保存列表元素
	this.clear = clear;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

function append(element){
	this.dataStore[this.listSize++] = element;
	return this;
};

function find(element){
	for(var i = 0; i < this.listSize; i++){
		if(this.dataStore[i] == element){
			return i;
		};
	};
	return -1;
};

function remove(element){
	var foundAt = this.find(element);
	if(fountAt > -1){
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return this;
	}
	return false;
};

function length(){
	return this.listSize;
}

function toString(){
	return this.dataStore;
}

function insert(element, after){
	var insertPos = this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos+1, 0, elment);
		++this.listSize;
		return this;  //实现级联操作
	}
	return false;
}

function clear(){
	delete this.dataStore;
	this.dataStore.length = 0;
	this.listSize = this.pos = 0;
}

function contains(element){
	for(var i=0; i<this.listSize; i++){
		if(this.dataStore[i] == element){
			return this;  //正确并完成操作后返回对象本身，实现级联操作。
		}
	}
	return false;
}

function front(){
	this.pos = 0;
	return this;
}

function end(){
	this.pos = this.listSize-1;
	return this;
}

function prev(){
	--this.pos;
	return this;
}

function next(){
	++this.pos;
	return this;
}

function currPos(){
	return this.pos;
}

function moveTo(position){
	this.pos = position;
	return this;
}

function getElement(){
	return this.dataStore[this.pos];
}

function insertMax(element){
	for(var i=0, len=names.length(); i<len; i++){
		if(this.dataStore[i] > element){
			return false;
		}
	}
	this.append(element);
	return true;
}

function insertMin(element){
	for(var i=0, len=names.length(); i<len; i++){
		if(this.dataStore[i] < element){
			return false;
		}
	}
	this.append(element);
	return true;
}

//迭代器实现
var person = new List();
person.append({name:"PAM", gender:"male"})
	  .append({name:"PAM1", gender:"male"})
	  .append({name:"PAM2", gender:"male"})
	  .append({name:"PAM3", gender:"male"})
	  .append({name:"PAM4", gender:"male"})
	  .append({name:"PAM5", gender:"male"})
	  .append({name:"PAM6", gender:"male"})
	  .append({name:"PAM7", gender:"male"})
	  .append({name:"PAM8", gender:"male"})
	  .append({name:"PAM9", gender:"male"})
	  .append({name:"PAM10", gender:"male"});

person.showGender = function(gender){
	var result=[];
	for(var i=0, len=this.length(); i<len; i++){
		if(this.dataStore[i].gender == gender){
			result.push(this.dataStore[i]);
			print(this.dataStore[i].name + "  ");
		}
	}
}

person.showGender("male");