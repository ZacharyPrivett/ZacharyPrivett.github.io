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
            $(data).find("teammembers").children().each(function() {
                var jsonDoc = $(this);
                $("#team").append
                ("<h3>" + jsonDoc.find("name").text() + "</h3>" +
                          jsonDoc.find("title").text() + "<br>" +
                          jsonDoc.find("bio").text() + "<br>");
            });
        }
    });
});