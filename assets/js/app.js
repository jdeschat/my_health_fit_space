var youtubeApiKey = config.api_key;
// sub out yoga
const searchKey = "https://youtube.googleapis.com/youtube/v3/search?maxResults=25&q=yoga&key=" + youtubeApiKey

fetch(searchKey)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        // console.log(data);
        searchResults(data.items);
    });

// TODO: Check for workout data in Youtube
function searchResults(data) {
    // console.log(data);
    for (let i = 1; i < data.length; i++) {
        console.log(data[i]);
        var video = document.createElement(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${data[i].id.videoId}" title="YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe > `);
        document.querySelector("searchResults").appendChild(video);

    }
}

// TODO: Categorize workout data by exercise: yoga, HIIT, weightlifting, pilates


// TODO: Create a weekly/monthly calandar

// TODO: add exercise youtube videos to the calandar

// TODO: Create new page where client saved their favourite videos, so they can go back to them