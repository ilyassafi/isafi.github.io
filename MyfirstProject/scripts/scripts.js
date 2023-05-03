$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function () {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#team").html("");
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#team").append(

                        '<h1 class="title"> <strong>' + value.name + '</strong></h1>' +
                        '<iframe width="660" height="315" src="' + value.url + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' +
                        '<br>'
                    );
                });
            });
        }
    });
});