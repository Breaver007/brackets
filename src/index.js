module.exports = function check(str, bracketsConfig) {
    var arr = [];
    for (let char of str) {
        arr.push(char);
    }
    var result = {};
    let sum = 0;
    for (var i = 0; i < arr.length; ++i) {
        var a = arr[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    for (var key in result) {
        sum += result[key];
    }
    if (sum % 2 == 0) {
        return true;
    } else {
        return false;
    }
}