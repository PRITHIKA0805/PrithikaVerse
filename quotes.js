const btn = document.getElementById("fetchQuoteBtn");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const loading = document.getElementById("loading");
const errorMsg = document.getElementById("errorMsg");

/*
  This function fetches data asynchronously from the public API.
  fetch() returns a Promise.
*/
async function fetchQuote() {

    // Show loading indicator
    loading.style.display = "block";
    errorMsg.textContent = "";
    quoteText.textContent = "";
    quoteAuthor.textContent = "";

    try {
        /*
          Send HTTP GET request to API
        */
        const response = await fetch("https://api.quotable.io/random");

        /*
          Check if response is successful (status 200–299)
        */
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        /*
          Convert response into JSON
        */
        const data = await response.json();

        /*
          Extract required fields from JSON object
        */
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `— ${data.author}`;

    } catch (error) {
        /*
          Handles network errors or API failures
        */
        errorMsg.textContent = "❌ Unable to fetch quote. Please try again.";
        console.error(error);
    } finally {
        /*
          Runs whether success or error
        */
        loading.style.display = "none";
    }
}

/*
  Button click triggers API call
*/
btn.addEventListener("click", fetchQuote);
