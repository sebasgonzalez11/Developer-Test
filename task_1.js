function repeat (array, loopNumber = 3) {
    var newArray = [];

    for (var i = 0; i < loopNumber; i ++) {
        newArray = newArray.concat(array);
    }

    return newArray;
};