var enue={};
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