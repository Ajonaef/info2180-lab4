document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("search");
    const resultsDiv = document.getElementById("results");

    searchButton.addEventListener("click", function () {
        // Sanitize user input
        const query = encodeURIComponent(searchInput.value.trim());

        // Create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "superheroes.php?q=" + query, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                // Check if response contains valid content
                if (xhr.responseText.trim()) {
                    resultsDiv.innerHTML = xhr.responseText;
                } else {
                    resultsDiv.innerHTML = "<p>Superhero not found</p>";
                }
            } else {
                resultsDiv.innerHTML = "<p>An error occurred while fetching results.</p>";
            }
        };

        xhr.onerror = function () {
            resultsDiv.innerHTML = "<p>Request failed. Please check your connection.</p>";
        };

        xhr.send();
    });
});
