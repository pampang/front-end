//实现表达式计算，如计算4+(1+2)*3的结果
var expr={};
var op=[], val=[];

print('Please input your expression(end with "="): ');
expr.input = readline();
if(toReversePolishNotation(expr.input)){
	print(val);
}

//转化中缀表达式为后缀表达式(逆波兰式)
function toReversePolishNotation(input){
	var c = '', prev, next;
	var flag = 0, temp;
	for(var i=0, len=input.length; i<=len; i++){
		c = input[i];
		//如果所得的字符是数字，则直接入到val数值栈中。
		if(!isNaN(c)){
			val.push(c);
		//如果是运算符，比较该符号的级别，进行对应的操作。
		}else{
			switch(opParse(c)){
				case 0:
					while(op.length>0){
						val.push(op.pop());
					}
					return 1;
				case 1:
					while(op[op.length-1] != '('){
						val.push(op.pop());
					}
					op.pop();
					if(flag){
						val.push(temp);
						flag = 0;
					}
					break;
				case 2:
				case 3: 
					op.push(c);
					break;
				case 4:
					next = input[++i];
					if(next == "("){
						op.push(next);
						temp = c;
						print("temp"+temp);
						flag = 1;
					}else{
						val.push(next);
						prev = op[op.length-1];
						if(prev=="+" || prev=="-"){
							op.push(c);
						}else{
							val.push(c);
						};
					}
					break;
				default:
					print("Wrong Input!");
					return 0;
			}
		}
	}
}

function opParse(op){
	if(op=="*" || op=="/"){
		return 4;
	}
	if(op=="+" || op=="-"){
		return 3;
	}
	if(op=="("){
		return 2;
	}
	if(op==")"){
		return 1;
	}
	if(op===undefined){
		return 0;
	}
	return false;
}