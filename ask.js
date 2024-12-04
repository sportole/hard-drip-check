document.getElementById("yes-button").style.display = "none";

        function yesfade() {
            document.getElementById("yes-button").style.display = "inline";
        }

        function myFunction() {
            window.location = "ask.html"
        }

        setTimeout(yesfade, 2000);
document.getElementById("no-button").style.display = "none";

        function nofade() {
            document.getElementById("no-button").style.display = "inline";
        }

        function myFunction() {
            window.location = "ask.html"
        }

        setTimeout(nofade, 3000); 
 
// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#d66574', '#f8838e', '#bd597a', '#d2738b'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif and add text and link
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';

        // Add text after the image
        var textElement = document.createElement('p');
        textElement.innerText = 'Yay, I love you too. Hope this makes you smile! 🐱💖';
        textElement.style.fontSize = '20px';
        textElement.style.textAlign = 'center';
        textElement.style.color = '#333'; // Customize color as needed
        textElement.style.marginTop = '20px';
        imageContainer.appendChild(textElement);

        // Show a link after a delay
        setTimeout(function() {
            var linkElement = document.createElement('a');
            linkElement.href = 'index2.html'; // Replace with the target HTML file
            linkElement.innerText = 'One last surprise 😤';
            linkElement.style.display = 'block';
            linkElement.style.fontSize = '18px';
            linkElement.style.textAlign = 'center';
            linkElement.style.color = '#0077b2';
            linkElement.style.marginTop = '20px';
            linkElement.style.textDecoration = 'none';
            linkElement.style.fontWeight = 'bold';

            // Add hover effect for the link
            linkElement.onmouseover = function() {
                linkElement.style.color = '#005f8c';
            };
            linkElement.onmouseout = function() {
                linkElement.style.color = '#0077b2';
            };

            imageContainer.appendChild(linkElement);
        }, 2000); // 2000ms delay (2 seconds)
    };
}
// Display the cat.gif initially
displayCat();