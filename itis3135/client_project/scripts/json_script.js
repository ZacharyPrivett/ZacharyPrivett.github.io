// ajax function to add data into about us page
$(function() {
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

