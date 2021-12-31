let possible = false;
function runProgram(input) {

input = input.trim().split("\n").map(ele=>ele.trim());
let [n,r] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
//console.log(arr,n,r)
checkParty(arr,0,[],r,n)
possible?console.log("Party"):console.log("No party")
}

	function checkParty(arr,curr,subsq,r,n){
    if(curr == arr.length){
        if(subsq.length>0) {
        let sum = 0;
       		for(let i = 0;i<subsq.length;i++){
          	sum+=subsq[i]
          }
          if(sum == r) possible = true;
        }
    }else{
        checkParty(arr,curr+1,subsq,r,n);
        subsq.push(arr[curr]);
        checkParty(arr,curr+1,subsq,r,n);
        subsq.pop();

    }
    return;
}


if (process.env.USER === "rahul") {
  runProgram(`6 9
3 34 4 12 5 2`);
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