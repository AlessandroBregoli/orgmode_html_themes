
function show_div_in_content_visible(element){
    $("#content_visible").empty();
    $("#content_visible").append(element.clone())
}

function on_load(){
    $("<div id='main_container'></div>").prependTo("body")
    $("#table-of-contents").prependTo("#main_container");
    $(".title").prependTo("body");

    $("#table-of-contents a").each(function(){
        $(this).attr("title", $(this).text())}
                                  )

    $("<div id='content_visible'></div>").insertAfter("#table-of-contents")
    $("#content_visible").append($("#content").children().clone())

    $("#table-of-contents a").click(function(e) {
        var tmp_var = $(this).attr("href").substr(1);
        tmp_var = "#outline-container-" + tmp_var
        show_div_in_content_visible($(tmp_var))
    })

}


$(document).ready(on_load)
