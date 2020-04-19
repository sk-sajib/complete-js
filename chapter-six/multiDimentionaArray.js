var arr = [
    [78, 67, 89, 76],
    [90, 85, 77, 99],
    [34,56, 78, 84]
]

// console.log(arr[0][0])
// console.log(arr[1][3])

for(var i =1; i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        console.log('element is ' + i + ": " + arr[i][j])
}


}