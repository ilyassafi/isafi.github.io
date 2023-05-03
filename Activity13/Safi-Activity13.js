$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#team").append(
                        "<h2>" + value.name + "</h2>" +
                        value.title + "<br>" + 
                        "<p>" + value.bio + "</p>" 
                    
                    );
                });
            });
        }
    });
});