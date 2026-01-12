

function getSumZero(arr) {


    for (let number of arr) {
        for (let j = 1; j <= arr.length; j++) {
            if (number + arr[j] === 0) {
                return [number, arr[j]]
            }
        }
    }
}

const res = getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8])
console.log(res);
