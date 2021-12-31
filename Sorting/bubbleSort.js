function runProgram(input) {

    input = input.trim().split("\n").map(ele=>ele.trim());
    let size = Number(input[0]);
    let arr = input[1].split(' ').map(Number);
    let sorted = bubbleSort(arr,size);
    console.log(sorted.join(' '));
}
function bubbleSort(arr,n){
    for(let i = 0; i<n-1;i++){
        let swap = false;
        for(let j = 0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true;
            }
        }
        if(!swap) break;
    }
    return arr;
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