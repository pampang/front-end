function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
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

//for test
var q = new Queue();
q.enqueue("Meredith").enqueue("Cynthia").enqueue("Jennifer").enqueue("PAM");
// print(q.toString());
print(q);
print("Front of queue:" + q.front());
print("back of queue:" + q.back());