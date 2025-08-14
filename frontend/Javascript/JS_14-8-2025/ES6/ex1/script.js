let arr = [11, 22, 33, 44, 55];

const sum = () => {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total = total + arr[i];
    }

    return total;
}

console.log(sum());