// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Is it always goin to be integers, are we goin got be giving any space characters
//empty arr ever?

//R: return new array with each value doubled
//E: If we are given 2,3,4  should reutrn 4, 6 , 8
//E: If we are given 4,5,6 should reutrn 8,10,12
//E: If we are given 2,22  should reutrn 4, 44

//p: make and funcitons that takes in array
//map throught arr and mutilply each elment
function doubled(arr){
    if(arr.length===0 || arr === undefined){
        console.log('Array is invalid')
    } else{
        return arr.map(eLement=>eLement*2) //(dog=>dog*2)  maps returns new array, for each doent make new array   
    }
    
}
//also return lol

console.log(doubled([2,3,4]), [4,6,8])
console.log(doubled([]))