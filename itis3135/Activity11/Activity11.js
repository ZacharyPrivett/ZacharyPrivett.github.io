//  jQuery call to the accordion() method. -->

$(document).ready( () =>
    $("#accordion").accordion({
        event: "click",
        heightStyle: "content",
        active: false,
        collapsible: true
    })
);