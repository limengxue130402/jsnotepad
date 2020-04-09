var $editor = (function () { 
    var $textDom = $("<div class='textArea'>"+"<textarea id='text' contenteditable='true' spellcheck='false'></textarea>"+"</div>");
    var $textArea = $textDom.find("textarea");
    console.log("编辑")
    function showText(){
        $("body").append($textDom);
        $textArea.trigger("focus");
    }
    return{
        showText:showText
    }
}());