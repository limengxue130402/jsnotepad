var $dlgFont = (function(){
    //添加内容
    var $dlg = $('<div class="notepad-dlg-mask notepad-dlg-font">'
                + '<div class="dialogbox notepad-dlgbox">'
                + '<div class="notepad-dlg-titlebar">'
                + '<p class="title">字体</p>'
                + '<span class="close-btn" title="关闭">✖</span>'
                + '</div>'
                + '<div class="main notepad-dlg-main">'
                + '<div class="font-family"><p>字体(F):</p></div>'
                + '<div class="font-style"><p>字形(Y):</p></div>'
                + '<div class="font-size"><p>大小(S):</p></div>'
                + '<fieldset class="sample">'
                + '<legend>示例</legend>'
                + '<p class="sample-txt">AaBbYyZz</p>'
                + '</fieldset>'
                + '<div class="script">'
                + '<label>'
                + '脚本(R):<br>'
                + '<select>'
                + '<option value="西欧语言">西欧语言</option>'
                + '<option value="中文 GB2312">中文 GB2312</option>'
                + '</select>'
                + '</label>'
                + '</div>'
                + '<input class="btn-ok btn" type="button" value="确定">'
                + '<input class="btn-cancel btn" type="button" value="取消">'
                + '</div>'
                + '</div>'
                + '</div>');
    var $btnOk = $dlg.find(".btn-ok"),
        $btnClose = $dlg.find(".close-btn"),
        $btnCancel = $dlg.find('.btn-cancel'),
        $sample = $dlg.find('.sample-txt'),
        fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
        styles = ['常规', '斜体', '粗体', '粗偏斜体'],
        sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'],
        cfg = {
            family:'Arial',
            style:'常规',
            size:'16',
            okHandler:null
        };
    function sample(){
        console.log(cfg.family)
        $sample.css({
            'font-family':cfg.family,
            'font-size':cfg.size+'px',
            'font-style':"",
        });
        if(cfg.style === "斜体"){
            $sample.css("font-style",'italic');
            return;
        };
        if(cfg.style === "粗体"){
            $sample.css("font-weight",'bold');
            return;
        };
        if(cfg.style === "粗偏斜体"){
            $sample.css({"font-weight":'bold',"font-style":'italic'});
            return;
        };
    }
    function init(){
        var listFamily = new comList();
        var listStyle = new comList();
        var listSize = new comList();
        console.log(listSize.show.container)
        listFamily.show({
            container: '.notepad-dlg-font .font-family',
            width: '176px',
            list: fonts,
            select: fonts.indexOf(cfg.family),
            isFont: true,
            selectHandler: function(e) {
              cfg.family = fonts[e];
              console.log(e+'123456')
              sample();
            }
        });
        listStyle.show({
            container: '.notepad-dlg-font .font-style',
            width: '132px',
            list: styles,
            select: styles.indexOf(cfg.style),
            isFontStyle: true,
            selectHandler: function(e) {
              cfg.style = styles[e];
              sample();
            }
        });
        listSize.show({
            container: '.notepad-dlg-font .font-size',
            width: '64px',
            list: sizes,
            select: sizes.indexOf(cfg.size),
            selectHandler: function(e) {
              cfg.size = sizes[e];
              sample();
            }
        });
        sample();
    }
    function del() { 
        $dlg.remove();
        
     }
     function show(conf) { 
         console.log(cfg)

        $.extend(cfg,conf);
        $('body').append($dlg);
        init();
        $btnClose.click(del);
        $btnCancel.click(del);
        $btnOk.click(function() {
            cfg.okHandler({
                family: cfg.family,
                style: cfg.style,
                size: cfg.size
            });
            del();
        });
      }
      return {show: show};
}());