function next_binary_number(numberArray) {
    var remaining = 1;
    var newStr = "";

    for (var i = numberArray.length -1; i >= 0; i --) {
        newStr = (numberArray[i] + remaining) % 2 + newStr;

        if (numberArray[i] + remaining === 2) {
            remaining = 1;
        } else {
            remaining = 0;
        }

        if (i != 0) {
            newStr = "," + newStr;
        }
    }

    if (remaining === 1) {
        newStr = "1," + newStr;
    }

    return newStr;
}