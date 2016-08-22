/**
 * Created by lin on 2016-07-20.找出一组数里面第二大的数
 */
function compare(a,b){
    if(a<b){
        return 1;
    }else if(a>b){
        return -1;
    }else{
        return 0;
    }
}
var shuzu = [];
var count = shuzu.push(1,32,4,58,7,9,120,9,999,-54);
var shuzu2 = shuzu.sort(compare);
for(i=0;i<shuzu2.length;i++){
	if(compare(shuzu2[i],shuzu2[0])==0){
		return shuzu2[i+1];
	}else{
		return shuzu[1]
	}
}
var dierda = shuzu2[1];
document.write("the second max number is "+dierda);
alert(count);
