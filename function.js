function generateRandomLocation() {
    const streets = [
        "Main St.", "Broadway", "Elm St.", "Maple Ave.", "Oak Dr.", "Pine St.", "Cedar Ln.", "Birch Blvd.", "Sunset Ave.", "Parkway"
    ];
    
    const streetNumber = Math.floor(Math.random() * 9999) + 1; // Random number from 1 to 9999
    const streetName = streets[Math.floor(Math.random() * streets.length)];
    // const city = "Springfield"; // Default city name (can be randomized further)
    // const state = "NY"; // Default state (can be randomized further)
    // const zipCode = Math.floor(Math.random() * 90000) + 10000; // 5-digit ZIP code
    
    

}