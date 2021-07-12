const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    //condition === true
    console.log("Plz write a real positive number")
} else if (age < 18) {
    console.log("You are too young");
}
else if (age >= 18 && age <= 50) {
    console.log("you can drink");
}
else if (age >= 51 && age <= 80) {
    console.log("You shouldn't drink for your health");
}
else if (age === 100) {
    console.log("wow you lived a centrey. Jesus")
}
else if (age > 80) {
    console.log("I highly recommend you to not drink")
}
