const userIn = document.querySelectorAll(".nums");
// this is buttons for numbers
const screen = document.querySelector(".screen");
// this is the screen where the numbers will be displayed


userIn.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;
        console.log(value);

        
        if(value != "C" && value != "=") {
            screen.innerText += value;
        }
        
        
    });
});
