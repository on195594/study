//任意数求和1(使用foeEach(function(){}))：

function sum(...rest) {
	var x=0;
	rest.forEach(function(element,index,array){
		x+=element;
	});
	return x;
}

//任意数求和2(使用for---of)：

function sum(...rest) {
	var x=0;
	for(var i of rest){
		x+=i;
	}
	return x;
}