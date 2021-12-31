function runProgram(input) {

    input = input.trim().split("\n").map(ele => ele.trim());
    let size = Number(input[0]);
    let arr = input[1].split(' ').map(Number);
   // console.log(arr)
    let sorted = selectionSort(arr, size);
    console.log(sorted.join(' '));
}
function selectionSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
       // console.log(arr)
    }

return arr
}

if (process.env.USER === "rahul") {
    runProgram(`5
  3 5 0 9 8`);
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