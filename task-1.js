const heights = [167, 190, 120, 165, 137];

function minHeight(numbers) {
    let min = 167;
    for(const num of numbers) {
        if(num < min) {
            min = num;
        }
    }
    return min;
}
const min = minHeight(heights);
console.log('minimum number:',min);