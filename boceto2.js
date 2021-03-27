function assignDigits(digit) {

    if (!numA && isNumber(digit)) {
        numA = parseFloat(digit);
        lastDigit = digit;
        console.log("assigned numA: " + numA)

    } else if (numA && !operator && isSymbol(digit) || operator && operator !== lastOperator && isSymbol(digit)) {
        operator = digit

        if (lastOperator == operator && isSymbol(lastDigit)) {
            console.log("assigned nothing because it repeats " + lastOperator)

        } else if (lastOperator !== operator) {
            lastOperator = operator;
            lastDigit = digit;
            console.log("assigned other operator: " + operator)
        }

    } else if (numA && operator && isNumber(digit)) {
        if (isNumber(lastDigit)) {
            console.log("no hacemos nada porque aca correspondería un signo")

        } else if (isSymbol(lastDigit) && lastOperator) {
            lastDigit = digit
            //hace esta operación directamente
            numB = parseFloat(digit)
            console.log("assigned numB: " + numB)
            whatOperation(operator)
            lastDigit = digit
            numA = total
            numB = "";
            
            console.log("this is the last operator " + lastOperator + "\n\n")
            console.log("result: " + total)
        }
    }
}