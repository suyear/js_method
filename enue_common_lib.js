var enue={};
enue.common={};
enue.common.utils={};
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