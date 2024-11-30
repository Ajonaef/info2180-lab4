document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("search");
    const resultsDiv = document.getElementById("results");

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim();

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "superheroes.php?q=" + query, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                // Display the response inside the #results div
                resultsDiv.innerHTML = xhr.responseText;
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