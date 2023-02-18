var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, minus."
var check = prompt("Enter keys for search:")

if (text.includes(check)) {
    console.log("TRUE: ", check)
}
else {
    console.log("FALSE: ", check)
}