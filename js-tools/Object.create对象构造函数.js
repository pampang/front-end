//利用create构造函数，因而不必使用new来构造函数了，同时返回的新对象也会继承了父对象o的属性（通过设置o为它的原型）。
if(Object.create !== "function"){
	Object.create = function(o){
		var F = function(){};
		F.prototype = o;
		return new F();  //F()为新的构造器函数，它的原型绑定为o。这里return了一个有F()构造的新对象。
						 //所创建的新对象，拥有o的所有基本属性。
	};
};

//实践例子
var father = {
	name: "father",
	getName: function(){
		return this.name;
	},
	says: function(){
		return this.saying || " ";
	}
};

var child = Object.create(father);

console.log(child);

child.name = "child";  //修改child的属性，并不会影响到原型的值。
console.log(father.name);