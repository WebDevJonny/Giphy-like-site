/*
Notes to keep in mind:
Route:
    1. create the button connection
    2. fetch the search reference
    3. Handle the promises
    4. Pass the array to the display function
    5. Build methods to achieve the expected

Initial bugs:
    1 - addEventListener was null
    2 - Issue with displaying the gifs

Fix:
    1 - Push the JS script below the div method I created in the HTML file
    2 - Added the innerHTML allowing the search to return as expected on the page
*/

const giphyForm = document.querySelector("#giphy-form");
giphyForm.addEventListener("submit", fetchGif);

//method for fetching the query search reference
function fetchGif(e) {
    e.preventDefault();
    //method for hitting the search
    const searchTerm = document.querySelector("#search").value;
    //fetch while utilizing the API token for making the gif request
    fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=10&api_key=K5QPp0nsCu6bUK4y12N0RTGXGvEtcUdI`)
    .then((response) => {return response.json(); })
    .then((resp => {
        // Obtaining the data array from the response object
        let dataArray = resp.data
        // Passing the array to displayGif function
        displayGifs(dataArray);
    }))
    .catch(err => console.log(err)); // catch method for Error handling
}

//method for displaying the gifs
function displayGifs(dataArray) {
    const results = document.querySelector("#results");
    let visualOutput = '<div class="container">';
    //using the map 
    dataArray.map((imgData) => {
        visualOutput += `
    <img src="${imgData.images.fixed_width.url}"/>
    `;
  });
    document.querySelector('#results').innerHTML = visualOutput;
}

