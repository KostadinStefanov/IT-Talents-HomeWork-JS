function mostFrequent(array) {
    var obj = {},
        maxEl = array[0],
        maxCount = 1,
        result = {};
    if (array.length == 0)
        return null;

    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (obj[el] == null)
            obj[el] = 1;
        else
            obj[el]++;
        if (obj[el] > maxCount) {
            maxEl = el;
            maxCount = obj[el];
        }
    }
    return {
        maxEl: maxEl,
        maxCount: maxCount
    };
}
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1));