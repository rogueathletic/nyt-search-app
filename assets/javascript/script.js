var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

var apiKey = "19de7cc27a0d4e69bd2724a55ff3ffee",
    query,
    beginDate,
    endDate,
    page;

var param = {
    'api-key': apiKey,
    'q': query,
    'end_date': beginDate,
    'begin_date': endDate,
    'page': page
};

function isEmpty(value) {
    return value == null || value == "";
}

function urlBuilder() {
    for (key in param)
        if (isEmpty(param[key]))
            delete param[key];
    return url += '?' + $.param(param);
}

$('#searchTextBox').on('keypress', function (e) {
    if (e.which == 13) {

        console.log("asd");
    }
});

$.ajax({
    url: urlBuilder(),
    method: 'GET',
}).done(function (result) {
    console.log(result);
    console.log(testurl);
    console.log(result.response.docs[0].web_url)
    console.log(result.response.docs[0].snippet)
}).fail(function (err) {
    throw err;
});

