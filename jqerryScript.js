$(document).ready(function () {
    // $("*").css('backgroundColor','yellow');
    // $("Button").css("backgroundColor",'red');
    // $("#btn1").click(function () {
    //
    // });
    // $(".super").innerText="Hello";
    // $(".square,.rectangle").css("width","100px");
    // $(".square,.rectangle").css("backgroundColor","green");
    // $(".square").css("height","100px");
    // $(".rectangle").css("marginTop","10px")
    // $(".rectangle").css("height","200px");
    // $('.open','div#menu:hover').css();
    var fname=["1","2","3"];
    var frname=["Цветок7","Цветок8","Цветок9"];
    var fRow=$('<div id="row3" class="drow"/>').appendTo('div.dtable');
    var fTemplate=$('<div class="dcell"><img/><label/><input/></div>');
    for(var i=0;i<fname.length;i++)
    {
        fTemplate.clone().appendTo(fRow).children()
        .filter('img').attr('src',"images/"+fname[i]+".jpg").end()
        .filter('label').attr('for',fname[i]).text(frname[i]).end()
        .filter('input').attr({name:"flower"+fname[i],value:0,required:"required"})
    }
    var jq=$('label');
    jq.first().css("border","thick double red");
    jq.last().css("border","thick double green");
    jq.eq(2).css("border","thick double black");
    jq.eq(-2).css("border","thick double black");
    $('<a id="left"></a><a id="right"></a>').prependTo('form')
        .css({backgroundImage:"url(images/left.png)",float:"left",
        marginTop:"15px",display:"block",width:50,height:50})
        .click(handleAllowPress).hover(handleAllowMouse);
    $('#right').css(backgroundImage,url(images/right.png)).appendTo('form');
    $(".oblock").css({float:"left",display:"inline",border:"thin black solid"});
    $('form').css({marginTop: "auto",marginRight:"auto",width:885});
    function handleAllowPress(e) {

    }
    function handleAllowMouse(e) {

    }
});
