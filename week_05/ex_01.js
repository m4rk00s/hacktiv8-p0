// Week 05 - Exercises 01
// Most Frequent Largest Numbers

function sorting(arrNumber) {

    return arrNumber.sort();
}

function getTotal(arrNumber) {

    if (arrNumber == 0) { return ''; }

    let count = 0;
    let maxNumber = undefined;
    for (let i = arrNumber.length - 1; i >= 0; i--) {
        if (maxNumber === undefined) {
            maxNumber = arrNumber[i];
            count++;
        } else if (maxNumber != arrNumber[i]) {
            break;
        } else {
            count++;
        }
    }
    return `angka paling besar adalah ${maxNumber} dan jumlah kemunculan sebanyak ${count} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''