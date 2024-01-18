// Global variable
const allowedCountTypes = ["area", "perimeter"];

/** 
 * Validates user input from form
 * @author k31p <https://github.com/k31p>
 * @param {Event} event - Event from the button
 * @return {void}
*/
function validateInput(event){
    // Prevent website from reloading
    event.preventDefault();
    
    // Read the user input
    let countType = document.getElementById("id_square_compute_mode").value
    let sideLength = document.getElementById("id_square_sidelength").value 

    // Check if the countType and the sideLength is valid
    if(!allowedCountTypes.includes(countType)){
        alert("Please choose the correct find type!");
        return
    }

    if(sideLength.length == 0 || isNaN(sideLength)){
        alert("Side length must be a number!");
        return
    }

    if(sideLength < 0){
        alert("Side length must not be negative number");
        return
    }

    // Call countAction
    countAction(countType, sideLength);
}

/**
 * Do calculation based on the user input
 * @author k31p <https://github.com/k31p>
 * @param {string} countType - What to count eg: area or perimeter
 * @param {number} sideLength - Square's side length
 * @return {void}
 */
function countAction(countType, sideLength){
    let result = 0;
    let resultText = '';
    if(countType == "area"){
        result = countSquareArea(sideLength)
        resultText = `
            s = ${sideLength} <br>
            L = s &#10005; s = ${result}
        `
    } else if (countType == "perimeter"){
        result = countSquareperimeter(sideLength)
        resultText = `
            s = ${sideLength} <br>
            P = 4 &#10005; s = ${result}
        `
    }

    // Show the result into website
    document.getElementById("inner-result").innerHTML = resultText
}

/**
 * Counts the area of a square
 * @author k31p <https://github.com/k31p>
 * @param {number} side 
 * @returns area of a square
 */
function countSquareArea(side){
    return side * side;
}

/**
 * Count the perimeter of a square
 * @author k31p <https://github.com/k31p>
 * @param {number} side 
 * @returns perimeter of a square
 */
function countSquareperimeter(side){
    return 4 * side;
}