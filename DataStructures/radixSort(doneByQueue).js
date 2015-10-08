//queues definition*****************
function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

//enqueues
function enqueue(element){
	this.dataStore.push(element);
	return this;
}

//dequeues
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

//display all the elements in the queues
function toString(){
	var retStr = '';
	for(var i=0,len=this.dataStore.length; i<len; i++){
		retStr += this.dataStore[i] + '\n';
	}
	return retStr;
}

//judge whether the queues is empty or not.
function empty(){
	if(this.dataStore.length == 0){
		return true;
	}else{
		return false;
	}
}
//queues definition end*****************

function distribute(queues, nums, isSingle){
	for(var i=0,len=nums.length; i<len; i++){
		if(isSingle){
			queues[nums[i]%10].enqueue(nums[i]);
		}else{
			queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
		}
	}
}

function collect(queues, nums){
	var count = 0;
	for(var i=0,len=queues.length; i<len; i++){
		while(!queues[i].empty()){
			nums[count++] = (queues[i].dequeue());
		}
	}
}

// function collect(queues, nums){
// 	var i = 0;
// 	for(var digit=0; digit<10; digit++){
// 		while(!queues[digit].empty()){
// 			nums[i++] = queues[digit].dequeue();
// 		}
// 	}
// }

function disArray(arr){
	for(var i=0,len=arr.length; i<len; i++){
		putstr(arr[i] + " ");
	}
	print();
}

//main
var queues = [];
for(var i=0; i<=9; i++){
	queues[i] = new Queue();
}

var nums = [];
for(var i=0; i<10; i++){
	nums[i] = Math.floor(Math.random() * 101);
}

print("Datas before radix sort: ");
disArray(nums);
distribute(queues, nums, true);
collect(queues, nums);
print("Datas sort by single: ");
disArray(nums);
distribute(queues, nums, false);
collect(queues, nums);
print("After radix sort: ");
disArray(nums);