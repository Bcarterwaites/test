// Need to get user to authorize Septa Key Playlist to access their Spotify Account to generate access token

// write a function that pulls the access token from the API
var route = 30

var locate = window.location.href;

var splitted = locate.split("=");
 
//Need on click function to generate spotify window to get accessToken code

if(splitted.length > 1) {
    
    var accessToken = locate[1].split("&")
    console.log (accessToken)
    localStorage.setItem("accessToken", accessToken)
};

$.ajax ({
    url: "https://api.spotify.com/v1/me",
    headers: {
        "Authorization": "Bearer" + accessToken
    },
success: function(response) {
    console.log(response)

    if (route === 30) {
        $.ajax ({
            url: "https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp",
            method: "GET",
            sucess:  function(response) {
            console.log (sucess)
        },

    });

    }}});
