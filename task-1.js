//task-1,
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
// console.log('minimum number:',min);

// task-3
function calculateElectronicsBudget(laptop, tablet, mobile) {
    const total = laptop + tablet + mobile;
    return total;
};
const budget = calculateElectronicsBudget(35000, 15000, 20000);
// console.log(budget);

// task-4