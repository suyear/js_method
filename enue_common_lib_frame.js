var enue = {
	getArrMinimum: function(arr){
		var low=0;
		for (var i = 1; i < arr.length; i++) {
			if(arr[i] < arr[low]){
				low = i;
			}			
		};
		return low;
	},
	 
	dealArrReapeat: function(arr){
	 	var res = [], hash = {};
	    for(var i=0, elem; (elem = this[i]) != null; i++)  {
	        if (!hash[elem])
	        {
	            res.push(elem);
	            hash[elem] = true;
	        }
	    }
	    return res;
	},
	 
	getStringLength: function(str){
	 	var len=str.length,bytes=len;
	 	for(var i=0;i<len;i++){
		   	if(str.charCodeAt(i)>255){
		  		bytes++;
	   		}
		}
	 	return bytes;
	},
	
	isInteger:function(args){
		return args % 1 === 0;
		/*
		 * ECMA 6中使用的更加严谨一些，如果使用下面的判断isInteger("123")会返回false
		 * 而使用args % 1 === 0,isInteger("123")会返回true,可以正常放到Form表单验证中使用。
		 */
	    //return typeof args === "number" && isFinite(args) && args > -9007199254740992 && args < 9007199254740992 && Math.floor(args) === args;
	}
};
