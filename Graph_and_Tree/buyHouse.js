function runProgram(input) {

    input = input.trim().split('\n').map(ele=>ele.trim());
    let test = Number(input[0]);
    for(let i = 1; i<input.length;){
        let size = Number(input[i]);
        
        let roads = [];
        for(let j = i+1;j<=size+i;j++){
            let [h1,h2] = input[j].split(' ').map(Number)
            roads.push(h1,h2)
        }
        
        let graph = {};
        for(let i =0; i<size*2;i++){
            if(graph[roads[i]]>1) graph[roads[i]]++;
            else graph[roads[i]] = 1
        }
        let buyHouses = Object.keys(graph).length;
        console.log(buyHouses)
        i+=size+1
    }
}

if (process.env.USER === "rahul") {
  runProgram(`1
  3
  1 2
  2 3
  1 3
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