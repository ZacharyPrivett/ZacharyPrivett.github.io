//  jQuery call to the accordion() method. -->

$(document).ready( () =>
    $("accordion").accordion({
        event: "mouseover",
        heightStyle: "content",
        collapsible: true
    })
);