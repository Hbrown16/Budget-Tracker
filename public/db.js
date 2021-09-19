let db;

const request = indexedDB.open("budgettrack", 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function(event) {
    db = event.target.result;

    if(navigator.onLine) {
        checkDB();
    }
};

// shows what the error is if there is an error

request.onerror = function(event) {
    console.log("OOPS!" + event.target.errorCode);
};

function saveRecord(record) {
    const transaction = db.transaction(["Pending Charge"], "readwrite");
    const store = transaction.objectStore("Pending Charge");
    
}