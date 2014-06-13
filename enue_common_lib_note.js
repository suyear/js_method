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