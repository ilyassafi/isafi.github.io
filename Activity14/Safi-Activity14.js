$(document).ready(function () {
    $("#nav_list li").click(function () {
        var title = $(this).children("a").attr("title");
        var filename = "json_files/" + title + ".json";
        // console.log(filename);
        handelerJSON(filename);
    });

    function handelerJSON(speakerFile) {
        $.ajax({
            type: "get",
            url: speakerFile,
            beforeSend: function () {
                $("#speaker").html("Loading...");
            },
            timeout: 10000,
            error: function (xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function (data) {
                $("#speaker").html("");
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        $("#speaker").append(
                            '<h2>' + value.month + '</h2>' +
                            '<h3>' + value.speaker + '</h3>' +
                            '<img src="' + value.image + '">' +
                            '<p>' + value.text + '</p>'
                        );
                    });
                });
            }
        });
    }
});   