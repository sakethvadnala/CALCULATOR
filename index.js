const display = document.getElementById("display")
function appendToDisplay(input){
    display.value+= input;
}
function clearDisplay(){
    display.value = "";   
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Error";
    }

}
// Adjusts font size dynamically based on text length
function resizeText() {
    let maxFontSize = 2.5; // Max font size in rem
    let minFontSize = 1.2; // Min font size in rem
    let length = display.value.length;

    // Reduce font size if text is long
    if (length > 10) {
        display.style.fontSize = Math.max(minFontSize, maxFontSize - (length / 15)) + "rem";
    } else {
        display.style.fontSize = maxFontSize + "rem";
    }
}
