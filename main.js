//ex0//
const matrix = [["apple", "banana", "cherry"],
                ["dog", "cat", "bird"],
                ["red", "green", "blue"]];
function printMatrix(arr=[]) { 
    for(let i=0; i<1;i++){
            console.log(arr[i]);
        }
    }
printMatrix(matrix)

//ex1//
const matrix1 = [[1,2,3],
                [4,5,6],
                [7,8,9]]

 function sumOfColumns(arr = []) {
    let sumOfColumns = []
    for(let i = 0; i < arr.length;i++){
        sumOfColumns[i] = 0;
        for(let j = 0; j < arr.length;j++){
            sumOfColumns[i] +=arr[j][i]
        }        
    }
    return sumOfColumns
}
console.log(sumOfColumns(matrix1)); 


//ex2//
const matrix2 = [[1,2,3],
                [4,5,6],
                [7,8,9]]
function smallestInRow(arr = []) {
    let smallestInRow = []
    for(let i = 0; i < arr.length;i++){
        smallestInRow[i] = arr[i][0];
        for(let j = 0; j < arr.length;j++){
            if(smallestInRow[i] > arr[i][j]){
                smallestInRow[i] = arr[i][j]
                console.log(arr[i][j]);
            }
        }        
    }
    return smallestInRow
}
console.log(smallestInRow(matrix2)); 


//ex4//
function sortTheArray(arr = []){
    let newArr =  [...arr.sort()]
    return newArr
}
console.log(sortTheArray(["b", 6, "a", "q", 7, 2]));


//ex5//
function shuffle(err){
    let list = [];
    while (err.length > 0) {
        let randomIndex = Math.floor(Math.random() * (err.length));
        list.push(err.splice(randomIndex, 1)[0]);
    }
    console.log(list);
}
shuffle([1,5,8]);

//ex6//
//index:0 ,element:1
//index:1 ,element:2
//index:2 ,element:3
//index:3 ,element:4
//index:4 ,element:5

//ex7//
function shift(){
    let p = '';
    let shifter = 0
    for(let i = 0; i <=5; i++){
        p = ' '.repeat(shifter)
        for(let x = 0; x < 3; x++){
            p += "* "
            
        }
        shifter++
        console.log(p);
    }

}
shift()

//ex8//
function shift1(){
    let p = '';
    let shifter = 0
    for(let i = 6; i > 0; i--){
        p = ' '.repeat(shifter*2)
        for(let x = 0; x < i; x++){
            p += "* "
            
        }
        shifter++
        console.log(p);
    }

}
shift1()