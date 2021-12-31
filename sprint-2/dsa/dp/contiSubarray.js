let sum = null;
function runProgram(input) {

    input = input.trim().split('\n').map(ele=>ele.trim());
    let test = Number(input[0]);
    for(let i = 1;i <input.length; i+=2){
        let size = Number(input[i]);
        let arr = input[i+1].split(" ").map(Number);
        subArr(arr,0,size-1,0);
        console.log(sum);
        sum = null;
    }
    
}
function subArr(arr,start,end){
    if(end == arr.length) return
    else if(start>end)  subArr(arr,0,end+1);
    else{
        let sub= []
        for(var i = start; i < end; i++)
        {
          sub.push(arr[i])
        }
        sub.push(arr[end])
        console.log(sub);
        let temp = 0;
        for(let i = 0; i<sub.length; i++){
            temp+=sub[i]
        }
        if(sum){
            if(temp>sum) sum = temp;
        }else sum = temp

        subArr(arr,start+1,end);
    }
    return
}

if (process.env.USER === "rahul") {
  runProgram(`1
  9
-4 -5 7 -6 7 -5 -7 2 -7`);
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