function runProgram(input) {
    input = input.trim().split("\n").map(ele=>ele.trim());
    let size = Number(input[0]);
    let arr = input[1].split(' ').map(Number);
    let sortedArr =  quickSort(arr,0,size-1);
    console.log(sortedArr.join(' '));
}
function quickSort(arr,lo,hi){
    if(lo<hi){
        let index = partitions(arr,lo,hi);
        //console.log(index)
        quickSort(arr,lo,index-1);
        quickSort(arr,index+1, hi)
    }
    
    return arr;

}
function partitions(arr,lo,hi){
    let i = lo, j = hi, prive = arr[hi];
    while(i<j){
        while(arr[j]<=prive &&j>0){
            j--
        }
        while(arr[i]>=prive && i<hi){
            i++;
        }
        if(i<j){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    let stemp = arr[hi];
    arr[hi] = arr[i];
    arr[i] = stemp;
    return i;
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