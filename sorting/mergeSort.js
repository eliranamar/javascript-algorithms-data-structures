/**
 * merges 2 arrays of numbers, and sorts them accending
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function mergeArrays(arr1, arr2) {

    let i = 0;
    let j = 0;
    let merged = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++
        } else {
            merged.push(arr2[j]);
            j++
        }
    }
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;

}

function mergeSort(arr) {
    if (!arr) { return [] }
    if (arr.length <= 1) { return arr }

    const midIndex = Math.floor(arr.length / 2);
    const leftSide = mergeSort(arr.slice(0, midIndex));
    const rightSide = mergeSort(arr.slice(midIndex));

    return mergeArrays(leftSide, rightSide);
}
