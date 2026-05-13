// Debouncing and throttling

// Both are the performance optimization techniques 
// -> Limiting the rate of function call
// -> Limiting the execution of the function call and optimise the function

// When typing the text in the Search input text..

// Debouncing and throttling

// Both are the performance optimization techniques 
// -> Limiting the rate of function call
// -> Limiting the execution of the function call and optimise the function



// Debouncing implementation
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Example usage
const searchInput = document.getElementById('searchInput');

function getResult() {
    // Simulate fetch API call
    console.log('Fetching results for:', searchInput.value);
}

const debouncedGetResult = debounce(getResult, 300);

searchInput.addEventListener('keyup', debouncedGetResult);