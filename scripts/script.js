let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));

function adjustFontSize() {
  const result = document.querySelector(".display");
  let fontSize = 4; 
  result.style.fontSize = fontSize + "em";

  while (result.scrollWidth > result.clientWidth && fontSize > 0.5) {
    fontSize -= 0.1;
    result.style.fontSize = fontSize + "em";
  }
}

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        adjustFontSize();
        switch(e.target.innerText){
            case "AC":
                display.innerText = "0";
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                } catch (e) {
                    display.innerText = "Error!"
                }
                break;
            case "+/-":
                display.innerText = "-";
                break;
            case "%":
                let passedText = display.innerText + "/100";
                display.innerText = eval(passedText);
                break;
            default:
                if(display.innerText === "0" && e.target.innerText !== "."){
                    display.innerText = e.target.innerText;
                }else {
                    display.innerText += e.target.innerText;
                }       
        }
    });
});

