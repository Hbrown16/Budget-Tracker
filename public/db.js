let db;

const request = indexedDB.open("budgettrack", 1);

request.onupgradeneeded = function(event) {
    
}