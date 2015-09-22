//这是一套*部件*，是一个闭包。它把对象组装出来。本部件为任何一个对象添加简单事件处理特性的函数。
//在任何单独的对象上调用eventuality，可以给该对象授予它事件处理方法，包括fire{触发一个指定事件}和on{注册事件处理程序}。
//同时，它还有一个私有的事件注册表对象registry，该对象只能被fire和on使用。
var eventuality = function(that){
	var registry = {};  //私有的事件注册表对象，存放对象事件的注册处理程序

	//fire方法：触发一个事件，执行该事件的所有注册处理程序
	//在一个对象上触发一个事件。
	//该事件可以使一个包含事件名称的字符串，或者是一个拥有包含事件名称的type属性的对象。
	that.fire = function(event){
		var array,    //存放所需执行的一组处理程序
			func,     //所需执行的处理程序中的某一方法
			handler,  //处理器
			i,        //计数器
			type = typeof event === "string" ? event : event.type;  //所指定的事件。

		//如果这个事件存在一组事件处理程序，那么就遍历它们并按顺序依次执行。
		if(registry.hasOwnProperty(type)){
			array = registry[type];
			for(i = 0; i < array.length; i++){
				handler = array[i];

				func = handler.method;
				if(typeof func === "string"){
					func = this[func];
				}

				func.apply(this, handler.parameters || [event]);
			}
		}
		return this;
	}

	//注册一个事件，构造一条处理程序条目，并将它插入到处理程序数组中。
	//如果这种类型的时间还不存在，就构造一个。
	that.on = function(type, method, parameters){
		var handler = {
			method: method,
			parameters: parameters
		};
		if(registry.hasOwnProperty(type)){
			registry[type].push(handler);
		}else{
			registry[type] = [handler];
		}
		return this;
	}
	return that;
}