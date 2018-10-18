function reformat (str) {
    var stringWithoutVowels = str.toLowerCase().replace(/[aeiou]/g, "");

    return upperCaseFirstLetter(stringWithoutVowels);
}

 function upperCaseFirstLetter (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}