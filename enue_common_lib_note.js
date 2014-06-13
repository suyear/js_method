var enue={};
enue.common={};
enue.common.utils={};


enue.common.utils.dealArrReapeat=function(arr){
 	/*
     * Method_01
 	 */

// 	var resultArr=new Array();
//  var len=arr.length;
//   	for(var i=0;i<len;i++){
//     	for(var j=i+1;j<len;j++){
//       	if(arr[i]==arr[j]){
//       		++i;  
//      	}
//     	}
//  	resultArr.push(arr[i]);
//  }
// 	return resultArr;

 	/*
 	 * Method_02
 	 * 使用正则处理
  	 */
//	return arr.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g,"$1$2$4").replace(/,,+/g,",").replace(/,$/,"").split(",");

	/*
	 * Method_03
 	 * 效率较高的一种
	 */
}




// version 0.0.1
enue.common={};
enue.common.utils={};
//Deal with array
enue.common.utils.getArrMinimum=function(arr){
	var low=0;
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] < arr[low]){
			low = i;
		}			
	};
	return low;
}

enue.common.utils.dealArrReapeat=function(arr){
 	var res = [], hash = {};
    for(var i=0, elem; (elem = this[i]) != null; i++)  {
        if (!hash[elem])
        {
            res.push(elem);
            hash[elem] = true;
        }
    }
    return res;
}


//Deal with String
enue.common.utils.getStringLength=function(str){
 	var len=str.length,bytes=len;
 	for(var i=0;i<len;i++){
	   	if(str.charCodeAt(i)>255){
	  		bytes++;
   		}
	}
 	return bytes;
}


//判断是否是Integer类型
//ECMA6支持，现在先拿过来使用，下面是引用地址
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
enue.common.utils.isInteger=function(args){
	return args % 1 === 0;
	/*
	 * ECMA 6中使用的更加严谨一些，如果使用下面的判断isInteger("123")会返回false
	 * 而使用args % 1 === 0,isInteger("123")会返回true,可以正常放到Form表单验证中使用。
	 */
    //return typeof args === "number" && isFinite(args) && args > -9007199254740992 && args < 9007199254740992 && Math.floor(args) === args;
}

