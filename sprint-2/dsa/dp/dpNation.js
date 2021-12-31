function runProgram(input) {

    input = input.trim().split("\n").map(ele=>ele.trim());
    let test = Number(input[0]);
    for(let i= 1; i<input.length; i+=2){
        let size   = Number(input[i]);
        let arr = input[i+1].split(' ').map(Number);
       // console.log(arr)
        console.log(findMaxRobbery(size,arr));

    }
}
function findMaxRobbery(size,arr){

    let evenWay = 0;
    let oddWay = 0;
    for(let i = 0; i<size;i+=2){
        evenWay+=arr[i]
    }
    for(let i = 1; i<size;i+=2){
        oddWay+=arr[i]
    }
    if(evenWay>oddWay) return evenWay;
    return oddWay;
}

if (process.env.USER === "rahul") {
  runProgram(`3
  2
  1 100
  3
  2 100 99
  4
  100 1 1 100`);
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