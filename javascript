const measurements = [12, 45, 8, 60, 5, 55, 15];

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function filterAbove(arr, threshold) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            result.push(arr[i]);
        }
    }
    return result;
}

function countAnomalies(arr, max) {
    const threshold = max * 0.1;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= threshold) {
            count++;
        }
    }
    return count;
}

function analyzeExperiment() {
    const userName = prompt("Введите ваше имя:");
    
    if (userName) {
        alert("Привет, " + userName + "! Запускаю анализ экспериментальных данных...");
    } else {
        alert("Привет! Запускаю анализ экспериментальных данных...");
    }

    console.log("=== Анализ экспериментальных данных ===");
    console.log("Исходные измерения:", measurements);

    const max = findMax(measurements);
    const min = findMin(measurements);
    const sum = calculateSum(measurements);
    const average = sum / measurements.length;
    
    const aboveAverage = filterAbove(measurements, average);
    const anomalyCount = countAnomalies(measurements, max);
    const spread = max - min;

    alert("Среднее значение – " + average.toFixed(2) + ", " + aboveAverage.length + " измерений – выше среднего");

    console.log("Количество аномально низких значений (<= 10% от максимума):", anomalyCount);
    
    if (spread > 50) {
        console.log("Наблюдается высокая вариативность данных");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("analyzeBtn");
    if (button) {
        button.addEventListener("click", analyzeExperiment);
    }
});
