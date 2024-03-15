// Creating a Array with 5 Values
let userNames = ["Haseeb", "Saheeb", "Ahmed", "Ali", "Admin"]

// Removing all values from our Array of our Array is empty
userNames = []

// If statment for checking Lenght of our Array is empty?
if (userNames.length === 0){
    console.log("Your Array is Empty we need to find some Users!")
}else{
    // If Array is not empty use ForEach Loop on Array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, thank you for logging in again.`)
        }
    })
}