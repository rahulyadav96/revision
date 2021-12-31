

function runProgram(input) {

    input = input.trim().split("\n").map(ele=>ele.trim());
    let size = Number(input[0]);
    let arr = input[1].split(' ').map(Number);
    mergeSort(arr,0,size-1);
    console.log(arr.join(' '));
}
function mergeSort(arr,lo,hi){
    if(lo<hi){
        let mid = lo+Math.floor((hi-lo)/2);
        mergeSort(arr,lo,mid);
        mergeSort(arr,mid+1,hi);
        mergeArr(arr,lo,mid,hi);
    }else{
        return
    }
}
function mergeArr(arr,lo,mid,hi){
    let arr1=[],arr2 = [],arr3=[];
    for(let i = lo; i <= mid; i++){
        arr1.push(arr[i])
    }
    for(let i = mid+1; i <= hi; i++){
        arr2.push(arr[i])
    }

    let i = 0,j=0;
    while(i<arr1.length&&j<arr2.length){
        if(arr1[i]<arr2[j]){
            arr3.push(arr1[i]);
            i++
        }else{
            arr3.push(arr2[j]);
            j++
        }
    }  
    if(i!=arr1.length){
        while(i!=arr1.length){
            arr3.push(arr1[i]);
            i++
        }
    } else if(j!=arr2.length){
        while(j!=arr2.length){
            arr3.push(arr2[j]);
            j++
        }
    } 

    let m = 0, n = lo;
    while(m<arr3.length){
        arr[n++] = arr3[m];
        m++;
    }
}

if (process.env.USER === "rahul") {
  runProgram(`5
  3 5 0 9 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}