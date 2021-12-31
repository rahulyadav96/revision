function runProgram(input) {

    input = input.trim().split("\n").map(ele => ele.trim());
    for(let i = 0; i<input.length; i+=2){

        let size = Number(input[i]);

        if(size>0){

            let arr = input[i+1].trim().split(' ').map(Number);

            //console.log(size, arr, last)
            let stack = [];
            let ord = [];        
            let possible = true;
            for(let i = 1;i<=size;i++){
                if(arr[0]==i){
                    ord.push(arr.shift())
                }else{
                    if(stack.length>0){
                        let top = stack.length-1;
                        while(top>-1){

                            if(stack[top]<arr[0]){
                                ord.push(stack.pop())
                            }else{
                                ord.push(arr.shift())
                                break;
                            }
                        }

                    }else{
                        if(stack[stack.length-1]<arr[0]){
                            possible = false;
                            break;
                        }else{
                            stack.push(arr.shift());
                        }
                    }
                }
            }
            
        possible?console.log("yes"):console.log("no");
        }else{
            break;
        }
    }
    

}

if (process.env.USER === "rahul") {
    runProgram(`5
  5 1 2 4 3 
  0`);
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