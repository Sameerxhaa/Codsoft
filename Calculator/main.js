// content display on calculator screen  
function appendDisplay(content) {  
    // List of valid operators  
    const operators = ['+', '-', '*', '/','%'];  
    
    // Check if the last character is an operator  
    if (operators.includes(Result.innerText.slice(-1)) && operators.includes(content)) {  
        // Replace the last operator with the new one  
        Result.innerText = Result.innerText.slice(0, -1) + content;  
    } else if (Result.innerText == '0') {  
        // If display is '0', replace it with the content  
        Result.innerText = content;  
    } else {  
        // Otherwise, append the content  
        Result.innerText += content;  
    }  
}  


// Clear values on calculator screen
function clearDisplay() {
    Result.innerText = '0'
}

function calculate() {
    Result.innerText = eval(Result.innerText)
}

function backspace(content){
    if(Result.innerText.length == 1 || Result.innerText == "0"){
        Result.innerText = "0"
    }
    else{
        Result.innerText = Result.innerText.slice(0,-1)

    }
}


