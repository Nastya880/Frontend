// Вам нужно написать функцию которая принимает в кач-ве аргумента массива чисел и удаляет все повторяющиеся значения

function removeReps(array) {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        let k = 0;
        let flag = 0;
        while (k < new_array.length)
        {
            if (array[i] === new_array[k])
                flag = 1;
            k++;
        }
        if (flag === 0) {
            k = new_array.length;
            new_array[k] = array[i];
        }
    }
    return new_array;
}

console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1,2,4,5,6,8,9,11]
console.log(removeReps([1,1,1,1])); // [1]
console.log(removeReps([1,2,3,4,5,6])); // [1,2,3,4,5,6]
