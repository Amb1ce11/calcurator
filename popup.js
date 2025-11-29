document.getElementById("calc").onclick = () => {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const op = document.getElementById("op").value;

    let result;

    switch (op) {
        case "add":
            result = a + b;
            break;
        case "sub":
            result = a - b;
            break;
        case "mul":
            result = a * b;
            break;
        case "div":
            result = b === 0 ? "You cannot do this!" : a / b;
            break;
    }

    document.getElementById("result").innerText = result;
};
