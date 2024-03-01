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
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
    let sum = 0;
    let i = 0;
    for(const phone of phones) {
        sum = sum + phone.price;
        if(i < phone.price) {
            i++
        }
    }
    const avg = sum / i;
    return avg;
}
const avg = findAveragePhonePrice(phones);
// console.log(Math.round(avg));


