var enue={};
enue.common={};
enue.common.utils={};
enue.common.utils.arrSort=function(arr){
	var low=0;
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] < arr[low]){
			low = i;
		}			
	};
	return low;
}