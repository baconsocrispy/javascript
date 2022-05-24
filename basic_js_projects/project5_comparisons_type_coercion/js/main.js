// Type of operator assignment
var my_var = 256
document.write(typeof my_var)

// utilize type coercion.
document.write("ten" + 10)

// Utilize JavaScript to make the browser display NaN
document.write(0/0)

// Utilize the isNaN() function to make the 
// browser display “true.”
document.write(isNaN("Not a number"))

// Utilize the isNaN() function to make the 
// browser display “false.”
document.write(isNaN(25))

// write a large enough number and negative number to 
// display “Infinity” and “-Infinity” respectively
document.write(10E320)
document.write(-13E400)

// use Boolean logic (i.e. the greater than operator 
// and/or lesser than operator) to display true and false.
document.write(567 > (2 * 7))
document.write((567 / 5) < (-1000E1000))

// perform a math operation with the console.log() function
console.log(5 + 7)

// Display “false” in the console using Boolean logic
console.log(13 != 13)

// utilize == to return “true” and “false.”
document.write(13 == 13)
document.write(13 == 12)

// utilize === to return “true” and “false” as follows
// Return true by ensuring to match the data type and value.
document.write("carter" === "carter")

// Return false by writing a different data type 
// and different value.
document.write("carter" === 13)

// Return false by writing a different data type 
// but the same value for both.
document.write("ten" === 10)

// Return false by writing the same data type 
// but a different value for both.
document.write(12 === 11)

// utilize the AND operator to display true and false
document.write(6 < 7 && 8 > 7)
document.write(7 < 7 && 8 > 7)

// Utilize the OR operator to display true and false
document.write(7 < 7 || 8 > 7)
document.write(7 < 7 && 8 > 8)

// utilize the NOT operator to display true and false
document.write(!(8 < 7))
document.write(!(8 > 7))