//Enter code herefunction runProgram(input) {

    function runProgram(input) {

        input = input.trim().trim().split("");
        let stack = [];
        let top = -1;
    
        for(let i = 0; i<input.length; i++){
            if(input[i]=="(" || input[i] == "{"|| input[i] == "["){
                top++;
                stack[top] = input[i]
            }else if(input[i]==")" || input[i]=="]"||input[i]=="}"){
                let topEle = stack[top];
                let check = isbalance(topEle, input[i])
                if(check){
                    top--;
                }else{
                    console.log("unbalanced");
                    return
                }
            }
            else{
                continue;
            }
        }
        if(top == -1){
            console.log("balanced");
        }
    }
    function isbalance(st,inp){
    //console.log("hello");
        if(st == "(" && inp == ")"){
            return true
        }
        else if (st == "{" && inp == "}"){
            return true
        }else if(st == "[" && inp == "]"){
            return true;
        }
        return false;
    }
    
    if (process.env.USER === "rahul") {
      runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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