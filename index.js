/*document.addEventListener("DOMContentLoaded", function () {
    // Fetch hostel data from the JSON file
    fetch("hostel.json")
        .then((response) => response.json())
        .then((data) => {
            const hostelList = document.getElementById("hostel-list");

            data.forEach((hostel) => {
                // Create a Bootstrap card for each hostel
                const hostelCard = document.createElement("div");
                hostelCard.classList.add("card", "mx-3", "my-3"); // Added mx-3 and my-3 for margins

                hostelCard.innerHTML = `
                    <img src="${hostel.image_url}" class="card-img-top" alt="${hostel.name}" style="width: 250px; height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">${hostel.name}</h5>
                        <p class="card-text">Price per Month: ${hostel.price_per_month}</p>
                        <p class="card-text">Distance from College: ${hostel.location_km} km</p>
                        <p class="card-text name" style="display: none;">Owner Name ${hostel.owner_mobile}</p>
                        <p class="card-text mobile-number" style="display: none;">Owner Mobile: ${hostel.owner_mobile}</p>
                        <a href="#" class="btn btn-primary show-mobile">Contact Owner</a>
                    </div>
                `;

                const showMobileButton = hostelCard.querySelector(".show-mobile");
                const mobileNumber = hostelCard.querySelector(".mobile-number");

                showMobileButton.addEventListener("click", function () {
                    mobileNumber.style.display = "block";
                });

                hostelList.appendChild(hostelCard);
            });
        })
        .catch((error) => console.error("Error fetching data: " + error));
});*/
document.addEventListener("DOMContentLoaded", function () {
    // Fetch hostel data from the JSON file
    fetch("hostel.json")
        .then((response) => response.json())
        .then((data) => {
            const hostelList = document.getElementById("hostel-list");

            data.forEach((hostel) => {
                // Create a Bootstrap card for each hostel
                const hostelCard = document.createElement("div");
                hostelCard.classList.add("card", "mx-3", "my-3"); // Added mx-3 and my-3 for margins

                hostelCard.innerHTML = `
                    <img src="${hostel.image_url}" class="card-img-top" alt="${hostel.name}" style="width: 250px; height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">${hostel.name}</h5>
                        <p class="card-text">Price per Month: ${hostel.price_per_month}</p>
                        <p class="card-text">Distance from College: ${hostel.location_km} km</p>
                        <p class="card-text name" ">Owner Name ${hostel.owner_name}</p>
                        <p class="card-text mobile-number" style="display: none;">Owner Mobile: ${hostel.owner_mobile}</p>
                        <a href="#" class="btn btn-primary show-mobile">Contact Owner</a>
                    </div>
                `;

                const showMobileButton = hostelCard.querySelector(".show-mobile");
                const mobileNumber = hostelCard.querySelector(".mobile-number");

                showMobileButton.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent the default link behavior
                    mobileNumber.style.display = (mobileNumber.style.display === "none" || mobileNumber.style.display === "") ? "block" : "none";
                });

                hostelList.appendChild(hostelCard);
                
            });
        })
        .catch((error) => console.error("Error fetching data: " + error)); 
});

