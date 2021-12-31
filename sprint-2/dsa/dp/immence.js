function runProgram(input) {

    input = input.trim().split("\n").map(ele=>ele.trim());
    let test = Number(input[0]);
   
    for(let i =1; i<input.length;i+=2){

        let str1 = input[i];
        let str2 = input[i+1];
        if(str1.length>str2.length){
            let toDelete = str1.length - str2.length
           let needChange =  missingCharacters(str1,str2);
         
           console.log(toDelete+(needChange-toDelete))
        }else if(str2.length>str1.length){
            let toAdd = str2.length - str1.length;
            let needChange =  missingCharacters(str1,str2);
            console.log(toAdd+needChange)
        }else{
          console.log(missingCharacters(str1,str2));
        }
    }
}
function missingCharacters(str1,str2){
    let count = 0
    for(let i = 0; i<str1.length;i++){
        let pres = false
        for(let j = 0; j<str2.length;j++){
            if(str2[j]==str1[i]){
                pres = true;
                break;
            }
        }
       if(!pres) count++
    }
    return count;
}

if (process.env.USER === "rahul") {
  runProgram(`3
  abcde
  abde
  abde
  abcde
  abcde
  abxde
  `);
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