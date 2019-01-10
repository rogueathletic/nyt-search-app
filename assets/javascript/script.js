var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey2 = "19de7cc27a0d4e69bd2724a55ff3ffee";
var apiKey = "555456931be849db9d335ab78cdf8101";

function setDatePicker() {
    $("#start-date").datepicker({
        dateFormat: "yy/mm/dd"
    });
    $("#end-date").datepicker({
        dateFormat: "yy/mm/dd"
    });
}

function removeSlash(str) {
    return str.replace(/\//g, "");
}

function isEmpty(value) {
    return value == null || value == "" || value !== value || value == 0;
}

function urlBuilder(param) {
    for (key in param) {
        console.log(param[key]);
        if (isEmpty(param[key])) {
            delete param[key];
        }
    }
    console.log("the link");
    console.log(url += '?' + $.param(param));
    url += '?' + $.param(param);
    return url;
}

function showDataOnScreen(response) {
    console.log(response);
    for (i in response.docs) {
        var header = $("<h1>");
        var article = $("<p>");
        var link = $("<a>");
        var container = $("<div>");

        header.text(response.docs[i].headline.main);
        article.text(response.docs[i].snippet);
        link.text(response.docs[i].web_url);
        link.attr("href", response.docs[i].web_url);

        container.append(header, article, link);

        $("#articles").append(container);
    }
}

function ajaxCall(param) {

    // API Call
    $.ajax({
        url: urlBuilder(param),
        method: 'GET',
    }).done(function (result) {
        console.log("Res below");
        console.log(result);
        console.log(result.response.docs[0].web_url);
        console.log(result.response.docs[0].snippet);
        showDataOnScreen(result.response);
    }).fail(function (err) {
        console.log("Error: " + err);
        throw err;
    });
}
// ########################################
// ############## Events ##################
// ########################################
$(document).ready(function () {
    setDatePicker();

});

$('#searchBTN').on('click', function () {

    // get the data from the textboxes
    var query = $('#search').val(),
        startDate = removeSlash($('#start-date').val()),
        endDate = removeSlash($('#end-date').val()),
        page = $('#page').val();

    var param = {
        'api-key': apiKey,
        'q': query,
        'begin_date': startDate,
        'end_date': endDate,
        'page': parseInt(page)
    };

    console.log(query + " type is " + typeof query);
    console.log(startDate + " type is " + typeof startDate);
    console.log(endDate + " type is " + typeof endDate);
    console.log(page + " type is " + typeof page);


    // API Call
    $.ajax({
        url: urlBuilder(param),
        method: 'GET',
    }).then(function (result) {
        console.log("Res below");
        console.log(result);
        console.log(result.response.docs[0].web_url);
        console.log(result.response.docs[0].snippet);
        showDataOnScreen(result.response);
    }).fail(function (err) {
        console.log("Error: " + err);
        throw err;
    });

});
