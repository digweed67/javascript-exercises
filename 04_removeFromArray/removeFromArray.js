function removeFromArray (elementToRemove, myArray) {
    
    let indexToRemove = myArray.indexOf(elementToRemove);

    if (indexToRemove !== -1) {
        myArray.splice(indexToRemove, 1);
        console.log("modified array:", myArray);
    } else {
        console.log("This item doesn't exist. Try again");
    }
    


}



// Do not edit below this line
module.exports = removeFromArray;
