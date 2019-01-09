var apiKey = "19de7cc27a0d4e69bd2724a55ff3ffee",
    query,
    beginDate,
    endDate,
    page;

var testurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var param = $.param({
    'api-key': "19de7cc27a0d4e69bd2724a55ff3ffee",
    'q': "trump",
    'end_date': "",
    'begin_date': "",
    'page': 5
});

function isEmpty(value) {
    return value == null || value == "";
}

for (key in testurl)
    if (isEmpty(testurl[key]))
        delete testurl[key];


testurl += '?' + param;

$.ajax({
    url: testurl,
    method: 'GET',
}).done(function (result) {
    console.log(result);
    console.log(testurl);
    console.log(result.response.docs[0].web_url)
    console.log(result.response.docs[0].snippet)
}).fail(function (err) {
    throw err;
});




// -------------------------------
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

function urlBuilder() {
    url += '?' + $.param({
        'api-key': apiKey,
        'q': query,
        'begin_date': beginDate,
        'end_date': endDate,
        'page': page
    });
}

$('<button>').on("click", function () {

});