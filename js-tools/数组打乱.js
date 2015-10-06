//数组打乱

//方法1：给定一个随机的index，如果仍在arr中存在，则push如copy数组中；否则，继续循环。
//坏处：如果到了后期，寻找数组中仍存在的index，会非常困难，耗费极多资源。
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

//方法2：用splice取得一个随机提取的数组元素。这样原数组的结构不会混乱，每次随机得出的index都能指定数组中的值。
//坏处：每取得一次元素，数组都需要重新排序。
function shuffle2(arr){
	var copy = [],
		n = arr.length,
		i;

	while(n){
		i = Math.floor(Math.random() * n--);
		copy.push(arr.splice(i, 1)[0]);
	}
}

//方法3：进行一个循环。在指定范围内找到一个随机index，直接与范围的最后一个元素交换。
//换句话说，就是从尾到头进行一个循环，每一次都为循环所在的index之前找到一个随机位置，并进行交换，直接打乱数组。
function shuffle3(arr){
	var n = arr.length,
		i, temp;

	while(n){
		i = Math.floor(Math.random() * n--);
		temp = arr[n];
		arr[i] = arr[i];
		arr[i] = temp;
	}
	return arr;
}