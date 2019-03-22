var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&begin_&api-key=lGXV49pt4KOhr4Y6mEYKDEv25loAMCUz';
var searchTerm = $("#search").val();

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    var results = response.data;
    console.log(results.url);

})