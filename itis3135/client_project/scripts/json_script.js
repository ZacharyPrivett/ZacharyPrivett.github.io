/*
$(function() {
    $.ajax({
        method: "GET",
        url: "json_files/stylist.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#name").html(value.name);
                    $("#title").html(value.title);
                    $("#talent").html(value.talent);
                    $("#bio").html(value.bio);
                });
            });
        }
    });

});


$(function() {
    $.ajax({
        type: "get",
        url: "json_files/stylist.json",
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data, function() {
                $.each(this, function(key, value) { 
                    $("#team").append(`Name: ${value.name}<br>Title: ${value.title}<br>Talent: ${value.talent}<br>Bio: ${value.bio}<br><br>` );
                });
            });
        }
    });
});


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
            $.each(data, function() {
                $.each(this, function(key, value) { 
                    $("#team").append(`Name: ${value.name}<br>Title: ${value.title}<br>Bio: ${value.bio}<br><br>` );
                });
            });
        }
    });
});
*/

$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "json_files/stylists.json",
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data, function() {
                $.each(this, function(key, value) { 
                    $("#name").html(value.name);
                    $("#title").html(value.title);
                    $("#talent").html(value.talent);
                    $("#bio").html(value.bio); 
                });
            });
        }
    });
});

