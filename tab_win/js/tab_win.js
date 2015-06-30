$(function() {
     $(".tab").each(function() {
            $(this).children("div").removeClass("selected");
            $(this).children("div").eq(0).addClass("selected");    
     });
     
     $(".win_body").each(function() {
            $(this).children("div").hide();
            $(this).children("div").eq(0).show();
            $(this).hide();
     });

     $(".win_header > div.icon").click(function () {
            $(this).parent().parent().children("div.win_body").toggle();
            if($(this).text() == "▼") {
                $(this).text("▲");
                $(this).next().text("縮小");
            } else {
                $(this).text("▼");
                $(this).next().text("拡大");
            }
     });

    $(".tab").on("click", "div", function () {
        if($(this).hasClass("selected") && $(this).parent().next().is(':visible')) return;
        
        var target = $(this).index();
        $(this).parent().children("div").removeClass("selected");
        $(this).addClass("selected");
        
        $(this).parent().next().show();
        $(this).parent().next().children("div").hide();
        $(this).parent().next().children("div").eq(target).show();
        
        $(this).parent().prev().children("div.icon").text("▲");
        $(this).parent().prev().children(".alt").text("縮小");
    });
    
    $(".tab_win_shell").draggable();
});