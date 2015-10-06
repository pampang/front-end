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