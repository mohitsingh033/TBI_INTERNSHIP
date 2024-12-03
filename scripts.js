document.addEventListener("DOMContentLoaded", function () {
    // 1. Dynamic Greeting Based on Time
    const header = document.querySelector("header h1"); // Select the header's h1 tag
    const currentHour = new Date().getHours(); // Get the current hour
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    header.textContent = `${greeting}, Welcome to TBI ASSIGNMENT`;

    // 2. Form Validation
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert("Please fill out all fields before submitting.");
            event.preventDefault(); // Prevent the form from submitting
        } else {
            alert("Form submitted successfully!");
        }
    });

    // 3. Table Row Highlight on Hover
    const rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row => {
        row.addEventListener("mouseover", function () {
            row.style.backgroundColor = "#f0f0f0"; // Highlight color
        });

        row.addEventListener("mouseout", function () {
            row.style.backgroundColor = ""; // Reset color
        });
    });

 // Toggle Navigation Menu with Three-Line Icon
const nav = document.querySelector("nav ul");
const toggleButton = document.createElement("button");


toggleButton.innerHTML = "&#9776;";
toggleButton.style.display = "block";
toggleButton.style.marginBottom = "10px";
toggleButton.style.fontSize = "24px";
toggleButton.style.border = "none";
toggleButton.style.backgroundColor = "transparent";
toggleButton.style.cursor = "pointer";

nav.parentNode.insertBefore(toggleButton, nav);

toggleButton.addEventListener("click", function () {
    if (nav.style.display === "none" || !nav.style.display) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});

nav.style.display = "none";


 nav.style.display = "none";

    // 5. Scroll-to-Top Button
    const scrollButton = document.createElement("button");
    scrollButton.textContent = "Scroll to Top";
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.padding = "10px";
    scrollButton.style.display = "none";
    scrollButton.style.backgroundColor = "#4CAF50";
    scrollButton.style.color = "white";
    scrollButton.style.border = "none";
    scrollButton.style.borderRadius = "5px";
    scrollButton.style.cursor = "pointer";

    document.body.appendChild(scrollButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    scrollButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    
    // 6. Dynamic Background Color Change
    const colorButton = document.createElement("button");
    colorButton.textContent = "Change Background Color";
    colorButton.style.marginTop = "20px";
    colorButton.style.padding = "10px";
    colorButton.style.backgroundColor = "#4CAF50";
    colorButton.style.color = "white";
    colorButton.style.border = "none";
    colorButton.style.borderRadius = "5px";
    colorButton.style.cursor = "pointer";

    document.body.appendChild(colorButton);

    colorButton.addEventListener("click", function () {
        const colors = ["#f9f9f9", "#FFDDC1", "#C1FFD7", "#D1C1FF", "#FFC1C1"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    // 7. Display Current Date and Time
    const footer = document.querySelector("footer");
    const dateTimeParagraph = document.createElement("p");

    function updateDateTime() {
        const now = new Date();
        dateTimeParagraph.textContent = `Current Date and Time: ${now.toLocaleString()}`;
    }

    footer.appendChild(dateTimeParagraph);
    updateDateTime();

    // Update the time every second
    setInterval(updateDateTime, 1000);
});
