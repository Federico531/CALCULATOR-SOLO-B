//UI Y LOGICA SEPARADOS
//ALL CONSOLE LOGS ARE UI
//MAKE DOT BUTTON
//MAKE MORE UNIT TESTS
//CREATE HISTORY THROUGH ARRAY CLASSES
class Value {
    constructor(numA, numB, operator, lastOperator, lastDigit, total) {
        this.numA = numA
        this.numB = numB
        this.operator = operator
        this.lastOperator = lastOperator
        this.lastDigit = lastDigit
        this.total = total
    }
}
class Operation {
    sum(a, b) {
        Value.total = a + b
        return Value.total
    }
    substract(a, b) {
        Value.total = a - b
        return Value.total
    }
    multiply(a, b) {
        Value.total = a * b
        return Value.total
    }
    divide(a, b) {
        Value.total = a / b
        return Value.total
    }
    equals() {
    }
}

function assignDigit(digit) {
    const v = new Value();
    console.log(v.numA)

    if (!v.numA && isNumber(digit)) {
        v.numA = parseFloat(digit);
        console.log("assigned numA: " + v.numA)
        console.log(v.numA)

    } else if (v.numA && isSymbol(digit)) {
        v.operator = digit
        if (v.lastOperator == v.operator && isSymbol(v.lastDigit)) {
            alert("repeats " + v.lastOperator)
        } else {
            v.lastDigit = digit;
            v.lastOperator = v.operator;
            console.log("assigned operator: " + v.operator)
        }

    } else if (v.numA && !v.numB && isNumber(digit)) {
        if (isNumber(v.lastDigit)) {
            console.log("Corresponde ingresar un operador")
        } else {
            v.lastDigit = digit
            v.numB = parseFloat(digit)
            console.log("assigned numB: " + v.numB)
            whichOperationIs(v.operator)
            v.numA = v.total
            v.operator = "";
            v.numB = "";
            console.log("Result: " + v.total)
        }
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
    //creo que se puede armar algun objeto con metodos, y hacer map de esos metodos hasta que alguno de true?
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
function whichOperationIs(digit) {
    const operation = new Operation();
    const v = new Value();
    switch (true) {
        case digit.includes("+"): operation.sum(v.numA, v.numB);
            break;
        case digit.includes("-"): operation.substract(v.numA, v.numB);
            break;
        case digit.includes("X"): operation.multiply(v.numA, v.numB);
            break;
        case digit.includes("/"): operation.divide(v.numA, v.numB);
            break;
        case digit.includes("%"): alert('es un porcentaje!');
            break;
        case digit.includes("="): operation.equals();
            break;
        default: alert('Typed a number when should have typed symbol');
    }
}
//INPUT
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("enter").addEventListener('click', (e) => {
        var digit = document.getElementById("input").value
        assignDigit(digit);
        document.getElementById("input").value = ""
        e.preventDefault();
    })
});

const operation = new Operation()
module.exports = {
    sum: operation.sum,
    substract: operation.substract,
    multiply: operation.multiply,
    divide: operation.divide,
};

/*
//PUNTO DE PARTIDA PARA EL UI, VER DESPUES 
function operation (numA, operator, numB) {
    if (operator == "+") {
        display.value = numA + numB
    }
}*/