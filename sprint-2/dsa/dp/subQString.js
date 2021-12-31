let possible = false
function runProgram(input) {

    input = input.trim().split("\n").map(ele=>ele.trim());
    let test = Number(input[0]);
    for(let i = 1; i<input.length;i+=2){

        let str1 = input[i];
        let str2 = input[i+1];
         checkSubseq(str1,str2,0,"");
        possible?console.log("YES"):console.log("NO")
        possible = false
    }
}

function checkSubseq(str1,str2,curr,subsq){
    
    if(curr == str2.length){
        if(subsq.length>0) {
            //console.log(subsq)
            if(subsq == str1) {
                possible =  true
            return
            }
        }
    }else{
        checkSubseq(str1,str2,curr+1,subsq);
        
        subsq+=str2[curr];
        checkSubseq(str1,str2,curr+1,subsq);
        //subsq.pop();
        delete subsq[subsq.length-1]

    }
    return;
}

if (process.env.USER === "rahul") {
  runProgram(`2
  abc
  adbce
  ax
  xaa`);
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