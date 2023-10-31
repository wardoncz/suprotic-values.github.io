document.getElementById("submit").addEventListener("click", function() {
    event.preventDefault();
    // Get the values from the input boxes
    const fName = document.getElementById("fname").value;
    const sName = document.getElementById("sname").value;
    const guestNum = document.getElementById("guestsnum").value;
    const dateD = document.getElementById("dateD").value;
    const timeD = document.getElementById("timeD").value;
    const dateA = document.getElementById("dateA").value;
    const timeA = document.getElementById("timeA").value;
    const email = document.getElementById("email").value;

    // Construct the JSON object with the data
    const postData = {
        fName: fName,
        sName: sName,
        email: email,
        guestNum: guestNum,
        dateA: dateA,
        timeA: timeA,
        dateD: dateD,
        timeD: timeD
    };

    console.log("Data to be sent:", postData);
    console.log("Button clicked");

    // Make a POST request to the server with JSON data
    fetch('https://infinityhorizon2.onrender.com/post-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Specify the Content-Type as JSON
        },
        body: JSON.stringify(postData) // Convert the data to JSON format
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error("Network response was not ok.");
    })
    .then(data => {
        console.log(data);
        // Handle the response from the server
    })
    .catch(error => {
        console.error("Error:", error);
        // Handle errors here
    });
});
