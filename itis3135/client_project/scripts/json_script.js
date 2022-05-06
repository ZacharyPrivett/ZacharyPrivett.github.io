$(function() {
    $.ajax({
        url: "json_files/stylist.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#name").html(value.name);
                    $("#title").html(value.title);
                    $("#talent").html(value.talent)
                    $("#bio").html(value.bio);
                });
            });
        }
    });

});

/*
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
*/