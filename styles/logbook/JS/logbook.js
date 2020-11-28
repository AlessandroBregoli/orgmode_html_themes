
function show_div_in_content_visible(element){
    $("#content_visible").empty();
    $("#content_visible").append(element.clone())
}

function show_all(){
    $("#content_visible").empty();
    $("<div id='content_visible'></div>").insertAfter("#table-of-contents")
    $("#content_visible").append($("#content").children().clone())
    $("#text-table-of-contents ul ul").show()
    if(toc_active != null){
        toc_active.removeClass("toc_active");
        toc_active = null;
    }
}

function event_onclick_toc(element){
    var tmp_var = $(this).attr("href").substr(1);
    tmp_var = "#outline-container-" + tmp_var
    show_div_in_content_visible($(tmp_var))

    $("#text-table-of-contents ul ul").hide()
    recursive_show_toc($(this).parent())
    $(this).parent().children().show()

    if(toc_active != null){
        toc_active.removeClass("toc_active")
        toc_active = null;
    }

    toc_active = $(this);
    toc_active.addClass("toc_active");
}

function recursive_show_toc(element){
    if(element.is("li") || element.is("ul"))
        recursive_show_toc(element.parent());
    else
        return;
    if(element.is("ul"))
        element.show();
}

function on_load(){
    // Create the html structure
    $("<div id='main_container'></div>").prependTo("body")
    $("#table-of-contents").prependTo("#main_container");
    $(".title").prependTo("body");

    //Show all the document inside the #content_visible div
    show_all();

    //TOC effects

    $("#table-of-contents a").each(function(){
        $(this).attr("title", $(this).text())
    }
                                  );
    $("#table-of-contents a").click(event_onclick_toc);


    $("<a onclick='show_all()' href='#'>[all]</a>").insertBefore("#text-table-of-contents")
    $("#postamble").appendTo("#table-of-contents")

}

var toc_active = null;
$(document).ready(on_load)
