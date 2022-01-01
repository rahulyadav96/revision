//Enter code here
function runProgram(input) {

    input = input.trim().split('\n');
  
    let cases = Number(input[0]);
  
    for(let i = 1; i< input.length;i+=2){
        let size= Number(input[i].trim());
        let arr  = input[i+1].trim().split(' ').map(Number);
        
        let nextGreat = [];
  
        let top = -1;
        let stack = []; 
        for(let i = size-1; i >= 0; i--){
          if(top == -1){
            nextGreat.push(-1);
            top++
            stack[top] = arr[i]
          }else{
            //let j = top;
            while(top>-1){
  
              if(arr[i]>stack[top]|| arr[i]==stack[top]){
                stack.pop();
                top--;
                continue;
                
              }else{
                nextGreat.push(stack[top])
                stack.push(arr[i]);
                top++;
                break;
              }
            }
            if(top == -1){
              nextGreat.push(-1);
              top++
              stack[top] = arr[i]
            }
          }
        }
       
        //console.log(nextGreat);
        nextGreat = nextGreat.reverse()
        console.log(nextGreat.join(' '));
    }
  }
  
  if (process.env.USER === "rahul") {
  runProgram(`1
  9
  2 5 1 6 2 4 4 5 5`);
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
  