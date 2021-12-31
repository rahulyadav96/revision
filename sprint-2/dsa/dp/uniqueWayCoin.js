function runProgram(input) {

    input = input.trim().split("\n").map(ele=>ele.trim());
    let [n,m] = input[0].split(' ').map(Number);
    let arr = input[1].split(" ").map(Number);
    let res = count(arr,m,n) 
    console.log(res)
}
function count(S , m , n )
{
 
    if (n == 0)
        return 1;
    if (n < 0)
        return 0;
    if (m <=0 && n >= 1)
        return 0;
    return count( S, m - 1, n ) + count( S, m, n - S[m - 1] );
}

if (process.env.USER === "rahul") {
  runProgram(`4 3
  1 2 3`);
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