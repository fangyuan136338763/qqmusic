var arr = [43, 32, 51, 51, 21, 32, 51, 3, 5, 5, 4, 3, 'b', 'ab', 'b'];
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j <= arr.length - 1; j++) {
        if (arr[i] == arr[j]) {
            console.log(i, j);
            arr.splice(j, 1);
        }
    }
}
console.log(arr);