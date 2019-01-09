var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "19de7cc27a0d4e69bd2724a55ff3ffee";

function isEmpty(value) {
    return value == null || value == "";
}

function urlBuilder(param) {
    for (key in param)
        if (isEmpty(param[key]))
            delete param[key];
    console.log(url += '?' + $.param(param))
    return url += '?' + $.param(param);
}

$('#searchTextBar').on('keypress', function (e) {

    if (e.which == 13) {
        // build date
        var startDate,
            startMonth,
            startYear,
            endDate,
            endMonth,
            endYear;

        // get the data from the textboxes
        var query = $('#searchTextBar').val(),
            beginDateFull,
            endDateFull,
            page = $('#page').val();

        var param = {
            'api-key': apiKey,
            'q': query,
            'end_date': beginDateFull,
            'begin_date': endDateFull,
            'page': page
        };

        console.log(query);
        console.log(beginDate);
        console.log(endDate);
        console.log(page);

    } else {
        // API Call
        $.ajax({
            url: urlBuilder(param),
            method: 'GET',
        }).done(function (result) {
            console.log(result);
            console.log(result.response.docs[0].web_url)
            console.log(result.response.docs[0].snippet)
        }).fail(function (err) {
            throw err;
        });
    }

});



