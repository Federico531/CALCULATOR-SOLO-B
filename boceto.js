//UI Y LOGICA SEPARADOS
//ALL CONSOLE LOGS ARE UI
//MAKE DOT BUTTON
//MAKE MORE UNIT TESTS
//CREATE HISTORY THROUGH ARRAY CLASSES
//VER "2" "+" "2" "2" "+" --> (EL MAS NO FUNCIONA AHI POR QUE?)
//OK NO SE ASIGNA ESE 2
var numA;
var numB;
var operator;
var lastOperator;
var lastDigit;
var total;


class Operation {
    sum(a, b) {
        total = a + b
        return total
    }
    substract(a, b) {
        total = a - b
        return total
    }
    multiply(a, b) {
        total = a * b
        return total
    }
    divide(a, b) {
        total = a / b
        return total
    }
    equals() {

    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("enter").addEventListener('click', (e) => {
        var digit = document.getElementById("input").value
        assignDigits(digit);
        document.getElementById("input").value = ""
        e.preventDefault();
    })
});
function assignDigits(digit) {

    if (!numA && isNumber(digit)) {
        numA = parseFloat(digit);
        console.log("assigned numA: " + numA)

    } else if (numA && isSymbol(digit)) {
        operator = digit
        if (lastOperator == operator && isSymbol(lastDigit)) {
            alert("repeats " + lastOperator)
        } else {
            lastDigit = digit;
            lastOperator = operator;
            console.log("assigned operator: " + operator)
        }

    } else if (numA && !numB && isNumber(digit)) {
        lastDigit = digit
        numB = parseFloat(digit)
        console.log("assigned numB: " + numB)
        whatOperation(operator)
        numA = total
        operator = "";
        numB = "";
        console.log("All empty \nnumA:" + numA + "\nOperator: " + operator + "\nnumB: " + numB)
        console.log("este es lastoperator" + lastOperator)
    }
}
//PUNTO DE PARTIDA PARA EL UI, VER DESPUES 
function operation(numA, operator, numB) {
    if (operator == "+") {
        display.value = numA + numB
    }
}
function isNumber(digit) {
    for (var i = 0; i < 10; i++) {
        var number = digit.includes(i.toString());
        if (!number) {
        } else {
            return true
        }
    }
}
function isSymbol(digit) {
    //crep que se puede armar algun objeto con metodos, y hacer map de esos metodos hasta que alguno de true?
    const sums = digit.includes("+");
    const substracts = digit.includes("-");
    const multiplies = digit.includes("X");
    const divides = digit.includes("/");
    const percentages = digit.includes("%");
    const equals = digit.includes("=");
    if (sums || substracts || multiplies || divides || percentages || equals) {
        return true;
    } else {
        return false;
    }
}
function whatOperation(digit) {
    const operation = new Operation();
    switch (true) {
        case digit.includes("+"): operation.sum(numA, numB);
            break;
        case digit.includes("-"): operation.substract(numA, numB);
            break;
        case digit.includes("X"): operation.multiply(numA, numB);
            break;
        case digit.includes("/"): operation.divide(numA, numB);
            break;
        case digit.includes("%"): alert('es un porcentaje!');
            break;
        case digit.includes("="): operation.equals();
            break;
        default: alert('Typed a number when should have typed symbol');
    }
}
const operatione = new Operation()

module.exports = {
    sum: operatione.sum,
    substract: operatione.substract,
    multiply: operatione.multiply,
    divide: operatione.divide,
};

