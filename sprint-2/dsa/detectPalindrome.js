function runProgram(input) {

    input = input.trim().split("\n").map(ele=>ele.trim());
    let test = Number(input[0]);
    for(let i = 1; i<input.length; i+=2){
        let size = Number(input[i]);
        let str = input[i+1];
        let possiable = checkPalindrome(str,size);
        possiable?console.log("Possible!"):console.log("Not Possible!");
    }
}
function checkPalindrome(str,size){
    let count = 0;
    let obj = {}
    for(let i = 0; i<size; i++){
        if(obj[str[i]]>1) obj[str[i]]++
        else obj[str[i]]=1
    }
    for(let key in obj){
        if(obj[key]%2!=0)count++
    }
    if(count>1) return false;

    return true;
}

if (process.env.USER === "rahul") {
  runProgram(`2
  6
  aabbcc
  5
  aabcd`);
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