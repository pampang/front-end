//数组去重

//方法1：用indexOf查找在数组中是否有与指定元素相同的元素，有则跳过，无则push指定元素。
function unique1(arr){
	var result = [];
	for(var i=0, len=arr.length; i<len; i++){
		if(result.indexOf(arr[i]) == -1){
			result.push(arr[i]);
		}
	};
	return result;
}

//方法2：利用对象的属性实现元素重复的判断。如果元素尚未存在，则在对象中创建以该元素为名的属性，并设为true。
//如果之后有重复的元素出现，则能判断出来。
//坏处：当arr中存在形如(3和'3')的两个值，会被判断为重复。
function unique2(arr){
	var result = [],
		hash = {};

	for(var i=0, len=arr.length; i<len; i++){
		if(!hash[arr[i]]){
			hash[arr[i]] = true;
			result.push(arr[i]);
		}
	}
	return result;
}

//方法3：最笨的方法，对每一个在arr中的元素，都与result遍历比较一次。
//坏处：效率低。
function unique3(arr){
	if(arr.length == 0) return;
	var result = [];

	for(var i=0, ilen=arr.length; i<ilen; i++){
		isRepeat = false;
		for(var j=0, jlen=result.length; j<jlen; j++){
			if(result[i] == result[j]){
				isRepeat = true;
				break;
			}
		}
		if(!isRepeat) result.push(arr[i]);
	}
}