function mergeSort(array) {
    // No need to sort an array with 1 element
    if (array.length <= 1) {
        return array;
    }

    // Find the point of where to split the array
    const midPoint = Math.floor(array.length / 2);

    // Sorted sub-arrays to merge
    const merged1 = mergeSort(array.slice(0, midPoint));
    const merged2 = mergeSort(array.slice(midPoint));

    const sorted = [];
    let i = 0;
    let j = 0;
    while (i < merged1.length || j < merged2.length) {
        // If already inserted all elements of a certain sub-array
        // Insert the remainder of the second sub-array and exit the loop
        if (i === merged1.length) {
            sorted.push(...merged2.slice(j));
            break;
        } 
        else if (j === merged2.length) {
            sorted.push(...merged1.slice(i));
            break;
        }
        else if (merged1[i] <= merged2[j]) {
            sorted.push(merged1[i]);
            i+=1;
        } else {
            sorted.push(merged2[j]);
            j+=1;
        }
    }
    return sorted;
}

// Examples:
console.log(`Sorted [679, 390, 407, 576, 137] to: ${mergeSort([679, 390, 407, 576, 137])}\n`);
console.log(`Sorted [1] to: ${mergeSort([1])}\n`);
console.log(`Sorted [1,2,3] to: ${mergeSort([1,2,3])}\n`);
console.log(`Sorted [16,17,18,19,12,13,14,15,20,21,22,23,11,10,9,8] to: ${mergeSort([16,17,18,19,12,13,14,15,20,21,22,23,11,10,9,8])}\n`);
console.log(`Sorted [3,2] to: ${mergeSort([3,2])}\n`);
console.log(`Sorted [1,48,35,2,27,99,3,312,258,12, 1, 22, 2, 3, 15, 82, 123] to: ${mergeSort([1,48,35,2,27,99,3,312,258,12, 1, 22, 2, 3, 15, 82, 123])}\n`);

// Alternative solution with a base case for an array with two elements
function mergeSortAlt(array) {
    // No need to sort an array with 1 element
    if (array.length <= 1) {
        return array;
    }
    // Sorting an array with two elements:
    // Option 1: Already sorted
    // Option 2: Switch elements
    if (array.length === 2) {
        // Return original array if already sorted
        if (array[0] <= array[1]) {
            return array;
        }
        // Otherwise, switch
        [array[1], array[0]] = [...array];
        return array;
    }

    // Find the point of where to split the array
    const midPoint = Math.floor(array.length / 2);

    // Sorted sub-arrays to merge
    const merged1 = mergeSort(array.slice(0, midPoint));
    const merged2 = mergeSort(array.slice(midPoint));

    const sorted = [];
    let i = 0;
    let j = 0;
    while (i < merged1.length || j < merged2.length) {
        // If already inserted all elements of a certain sub-array
        // Insert the remainder of the second sub-array and exit the loop
        if (i === merged1.length) {
            sorted.push(...merged2.slice(j));
            break;
        } 
        else if (j === merged2.length) {
            sorted.push(...merged1.slice(i));
            break;
        }
        else if (merged1[i] <= merged2[j]) {
            sorted.push(merged1[i]);
            i+=1;
        } else {
            sorted.push(merged2[j]);
            j+=1;
        }
    }
    return sorted;
}

// Alternative Solution:
console.log('Alternative Solution Examples:\n')
console.log(`Sorted [679, 390, 407, 576, 137] to: ${mergeSortAlt([679, 390, 407, 576, 137])}\n`);
console.log(`Sorted [1] to: ${mergeSortAlt([1])}\n`);
console.log(`Sorted [1,2,3] to: ${mergeSortAlt([1,2,3])}\n`);
console.log(`Sorted [16,17,18,19,12,13,14,15,20,21,22,23,11,10,9,8] to: ${mergeSortAlt([16,17,18,19,12,13,14,15,20,21,22,23,11,10,9,8])}\n`);
console.log(`Sorted [3,2] to: ${mergeSortAlt([3,2])}\n`);
console.log(`Sorted [1,48,35,2,27,99,3,312,258,12, 1, 22, 2, 3, 15, 82, 123] to: ${mergeSortAlt([1,48,35,2,27,99,3,312,258,12, 1, 22, 2, 3, 15, 82, 123])}\n`);