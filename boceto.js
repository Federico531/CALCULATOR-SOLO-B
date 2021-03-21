//FUNCIONA!!!
//ASSIGN numA, operator, numB 
//SOLO LOGICA SEPARADA
//MAKE TESTS

var numA;
var numB;
var operator;
var total;
var lastOperator;

class Operation {
    sum(numA, numB) {
        total = numA + numB
        return total
    }
    substract(numA, numB) {
        total = numA - numB
        return total
    }
    multiply(numA, numB) {
        total = numA * numB
        return total
    }
    divide(numA, numB) {
        total = numA / numB
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
        numA = parseInt(digit);
        console.log("assigned numA: " + numA)
    } else if (numA && !operator && isSymbol(digit) || operator && operator == lastOperator && isSymbol(digit)) {
        operator = digit
        if (lastOperator == operator) {
            alert("repeats " + lastOperator)
        } else {
            lastOperator = operator;
            console.log("assigned operator: " + operator)

        }

    } else if (numA && operator && !numB && isNumber(digit)) {
        numB = parseInt(digit)
        console.log("assigned numB: " + numB)
        whatOperation(operator)
        numA = total
        operator = "";
        numB = "";
        console.log("All empty \nnumA:" + numA + "\nOperator: " + operator + "\nnumB: " + numB)
        console.log("este es lastoperator" + lastOperator)
    } else if (lastOperator == digit && numB) {
        //"2" + "2" "+" (REPITE) 
        //if isNumber(lastDigit) 
        alert("repite " + operator)

    }
}
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
        case digit.includes("+"): operation.sum(numA,numB);
            break;
        case digit.includes("-"): operation.substract(numA,numB);
            break;
        case digit.includes("X"): operation.multiply(numA, numB);
            break;
        case digit.includes("/"): operation.divide(numA, numB);
            break;
        case digit.includes("%"): alert('es un porcentaje!');
            break;
        case digit.includes("="): operation.equals();
            break;
        default: alert('no es un simbolo valido');
    }
}

const operatione = new Operation()

module.exports = {
    sum: operatione.sum,
    substract: operatione.substract,
    multiply: operatione.multiply,
    divide: operatione.divide,
};

