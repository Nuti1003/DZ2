document.getElementById("start, stop").addEventListener("click", btn_click);

function btn_click() {
    let element = document.createElement("div");
    element.className = "element";
    element.innerText = "0";
    document.getElementById("container").appendChild(element);

    let number = 0;
    const interval = setInterval(() => {
        console.log(number);
        if (number > 20) {
            clearInterval(interval)
        }
        number++;
    }, 3000);

