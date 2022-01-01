function runProgram(input) {

    input = input.trim().split("\n").map(ele=>ele.trim());
    //console.log(input);
    let test= Number(input[0]);
    for(let i = 1;i<input.length;i++){
      let str = input[i];
      let stack = [];
      let top = -1;
      for(let j =0; j<str.length;j++){
        if(str[j]!="#"){
          top++;
          stack[top] = str[j]
        }else{
          if(top>-1){
            top--;

          }
        }
      }
      let newStr = ""
      for(let l = 0;l<=top;l++){
        newStr+=stack[l]
      }
      console.log(newStr)
    }
}

if (process.env.USER === "rahul") {
  runProgram(`2
  ab#d
  a#bc`);
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