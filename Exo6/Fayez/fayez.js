//Home Work
// 1- printReverse(list);==> printReverse([0,48,44,95])=> 95 44 48 0
function reverse(list) {
    var t=0;
    j=list.length-1;
   for (let i = 0; i < list.length-1; i++) {
       t = list[j];
       list[j]=list[i];
       list[i]=t;
       j=j-1;
   }
   return list;
}


// 2- SumArray(list);==> SumArray([0,48,44,95])=> 187
function sum(list) {
    var s=0;
    for (let i = 0; i < list.length; i++) {
        s = s+list[i];
    }
    return s;
}
// 3- isUniform(list); ==> isUniform([0,48,44,95])=> false / isUniform([0,0,0,0]) => true
function uni(list) {
    for (let i = 0; i < list.length-1; i++) {
        if (list[i]!==list[i+1]) {
            i=list.length-1;
            return console.log(list + ' is not uniforme') ;
        }
        else { return console.log(list + ' is uniforme.'); }
    }
}