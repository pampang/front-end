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
	this.dateStore[this.listSize++] = element;
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
		return true;
	}
	return false;
};

function length(){
	return this.listSize;
}

function toString(){
	return this.dataStore;
}