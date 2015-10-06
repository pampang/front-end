//数组打乱
function shuffle1(arr){
	var copy = [], 
		n = arr.length, 
		i;

	while(n){
		i = Math.floor(Math.random() * arr.length);
		if(i in arr){
			copy.push(arr[i]);
			delete arr[i];
			n--;
		}
	}
}

function shuffle2(arr){
	var copy = [],
		n = arr.length,
		i;

	while(n){
		i = Math.floor(Math.random() * n--);
		copy.push(arr.splice(i, 1)[0]);
	}
}