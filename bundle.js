var np = {};
np.config = {
    'appContainer': '.notepad'
};
np.fontFamily = "Arial";//默认字体
np.fontStyle = "常规";//默认字体样式
np.fontSize = "16px";//默认字体大小
np.fontHandler = function(e) {
    np.fontFamily = e.family;
    np.fontStyle = e.style;
    np.fontSize = e.size;
    console.log(e.family);
};
  $(function() {
    $menubar.show(np.menuData);
    $editor.showText();
    var $app = $('.notepad-editor');
  
    $app.click(function() {
      $menuBar.hideMenu();
    });
  });;np.menuData=[
    //文件
    {
        title:"文件(F)",
        menuItems:[
            {
                title: "新建(N)",
                shortcut:"Ctrl+N",
                enabled: true,
                handler: function() { console.log("新建(N) menu clicked!"); },
            },
            {
                title: "打开(O)...",
                shortcut:"Ctrl+O",
                enabled: true,
                handler: function() { console.log("打开(O) menu clicked!"); },
            },
            {
                title: "保存(S)",
                shortcut:"Ctrl+S",
                enabled: true,
                handler: function() { console.log("保存(S) menu clicked!"); },
            },
            {
                title: "另存为(A)...",
                shortcut:"",
                enabled: true,
                handler: function() { console.log("另存为(A) menu clicked!"); },
            },
            {
                title: "hr",
                shortcut:"",
                enabled: true,
                handler: null,
            },
            {
                title: "页面设置(U)...",
                shortcut:"",
                enabled: true,
                handler: function() { console.log("页面设置(U) menu clicked!"); }
            },
            {
                title: "打印(P)...",
                shortcut:"Ctrl+P",
                enabled: true,
                handler: function() { console.log("打印(P) menu clicked!"); }
            },
            {
                title: "hr",
                shortcut:"",
                enabled: true,
                handler: null,
            },
            {
                title: "退出(X)",
                shortcut:"",
                enabled: true,
                handler: function() { console.log("退出(X) menu clicked!"); },
            },
        ],
        width:"202px",
        left:"0px",
    },
    //编辑
    {
        title:"编辑(E)",
        menuItems:[
            {
                title:"撤销(U)",
                shortcut:"Ctrl+Z",
                enabled:false,
                handler:function(){console.log("撤销(U) menu clicked!");},
            },
            {
                title: "hr",
                shortcut:"",
                enabled: true,
                handler: null,
            },
            {
                title:"剪切(T)",
                shortcut:"Ctrl+X",
                enabled:false,
                handler:function(){console.log("剪切(X) menu clicked!");},
            },
            {
                title:"复制(C)",
                shortcut:"Ctrl+C",
                enabled:false,
                handler:function(){console.log("复制(C) menu clicked!");},
            },
            {
                title:"粘贴(P)",
                shortcut:"Ctrl+V",
                enabled:false,
                handler:function(){console.log("粘贴(V) menu clicked!");},
            },
            {
                title:"删除(L)",
                shortcut:"Del",
                enabled:false,
                handler:function(){console.log("删除(L) menu clicked!");},
            },
            {
                title: "hr",
                shortcut:"",
                enabled: true,
                handler: null,
            },
            {
                title:"使用 Bing 搜索...",
                shortcut:"Ctrl+E",
                enabled:true,
                handler:function(){console.log("使用 Bing 搜索 menu clicked!");},
            },
            {
                title:"查找(F)...",
                shortcut:"Ctrl+F",
                enabled:false,
                handler:function(){console.log("查找(F) menu clicked!");},
            },
            {
                title:"查找下一个(N)",
                shortcut:"F3",
                enabled:false,
                handler:function(){console.log("查找下一个(N) menu clicked!");},
            },
            {
                title:"替换(R)...",
                shortcut:"Ctrl+H",
                enabled:true,
                handler:function(){console.log("替换(R) menu clicked!");},
            },
            {
                title:"转到(G)...",
                shortcut:"Ctrl+G",
                enabled:true,
                handler:function(){console.log("转到(G) menu clicked!");},
            },
            {
                title: "hr",
                shortcut:"",
                enabled: true,
                handler: null,
            },
            {
                title:"全选(A)",
                shortcut:"Ctrl+A",
                enabled:true,
                handler:function(){console.log("全选(A) menu clicked!");},
            },
            {
                title:"时间/日期(D)",
                shortcut:"F5",
                enabled:true,
                handler:function(){console.log("时间/日期(D) menu clicked!");},
            },
        ],
        width:"218px",
        left:"52px",
    },
    //格式
    {
        title:"格式(O)",
        menuItems:[
            {
                title:"自动换行(W)",
                shortcut:"",
                enabled:true,
                handler:function(){console.log("自动换行(W) menu clicked!");},
            },
            {
                title:"字体(F)...",
                shortcut:"",
                enabled:true,
                handler:function(){
                    $dlgFont.show({
                        family: np.fontFamily,
                        style: np.fontStype,
                        size: np.fontSize,
                        okHandler: np.fontHandler,
                      })
                    
                },
            },
        ],
        width:"156px",
        left:"106px"
    },
    //查看
    {
        title:"查看(V)",
        menuItems:[
            {
                title:"状态栏(S)",
                shortcut:"",
                enabled:true,
                handler:function(){console.log("状态栏(S) menu clicked!");},
            },
        ],
        width:"138px",
        left:"162px",
    },
    //帮助
    {
        title:"帮助(H)",
        menuItems:[
            {
                title:"查看帮助(H)",
                shortcut:"",
                enabled:true,
                handler:function(){console.log("查看帮助(H) menu clicked!");},
            },
            {
                title:"关于记事本(A)",
                shortcut:"",
                enabled:true,
                handler:function(){console.log("关于记事本(A) menu clicked!");},
            },
        ],
        width:"166px",
        left:"216px",
    },
];;var $dlgFont = (function(){
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
}());;function comList() { 
    var $comList = $('<div class="notepad-com-list">'
                + '<input class="editor" type="text"><br>'
                + '<ul class="list">'
                + '</ul>'
                + '</div>');
    var $editor = $comList.find('.editor'),
        $list = $comList.find('.list'),
        $items,
        cfg = {
            container: '',
            list: [],
            select: 0,
            width: '200px',
            isFont: false,
            isFontStyle: false,
            selectHandler: null
        }
        function setFontStyle(item, style) {
            if(style === '斜体') {
              item.css('font-style', 'italic');
              return;
            }
        
            if(style === '粗体') {
              item.css('font-weight', 'bold');
              return;
            }
        
            if(style === '粗偏斜体') {
              item.css({'font-weight': 'bold', 'font-style': 'italic'});
              return;
            }
          }
        function fillData() { 
            var $item;
            if(cfg.isFont){
                for(var i = 0; i < cfg.list.length; i ++){
                    $item = $("<li class='item'></li>");
                    $item.css("font-family",cfg.list[i]);
                    $list.append($item.html(cfg.list[i]));
                }
            }else if (cfg.isFontStyle){
                for(var i = 0; i <cfg.list.length; i++){
                    $item = $('<li class="item"></li>');
                    setFontStyle($item, cfg.list[i]);
                    $list.append($item.html(cfg.list[i]));
                }
            }else{
                for(var i = 0; i < cfg.list.length; i++){
                    $item = $('<li class="item"></li>');
                    $list.append($item.html(cfg.list[i]));
                }
            }
            $items = $list.find('.item');
         }
         function setSelect(n) {
            $($items[n]).addClass('selected');
            $editor.val(cfg.list[n]);
            $editor.select();
          }
          function init() {
            var $oldList = $(cfg.container).find('.notepad-com-list');
            if($oldList.length !== 0) $oldList.remove();
             
            $(cfg.container).append($comList);
            
            $comList.css({ width: cfg.width });
            fillData();
            setSelect(cfg.select);
          }
        
          this.show = function(conf) {
            $.extend(cfg, conf);
            init();
        
            $list.click(function(e) {
              $($items[cfg.select]).removeClass('selected');
              cfg.select = cfg.list.indexOf($(e.target).html());
              $($items[cfg.select]).addClass('selected');
              $editor.val(cfg.list[cfg.select]);
              $editor.select();
              cfg.selectHandler(cfg.select);
            });
        
            $editor.keyup(function() {
              var i = 0;
        
              for(i=0; i<cfg.list.length; i++) {
                if(cfg.list[i].indexOf($editor.val()) === 0) break;
              }
        
              if(i === cfg.list.length) return;
        
              $items[i].scrollIntoView({behavior: 'smooth', block: 'start'});
              $($items[cfg.select]).removeClass('selected');
              $($items[i]).addClass('selected');
              cfg.select = i;
            });
          };
 };var $menubar = (function () { 
    var $bar = $('<div class="menubar"></div>');
    var menuData,
        menus = [],
        isOpen = -1;//判断菜单是否展开，默认为没有展开

    //创建一级菜单
    function createMenu() { 
        var $menuTitle = $("<ul class='menuTitle'></ul>");
        for(var i = 0; i < menuData.length; i ++){
            (function (i) { 
                var $title=$("<li class='title'></li>");
                $title.html(menuData[i].title);
                $title.attr("dataId",i);
                $menuTitle.append($title);
                //点击菜单
                $title.click(function(){
                    
                    var dataId = Number($title.attr("dataId"));
                    if(isOpen === -1){
                        menus[dataId].css("display","inline-block");
                        isOpen = dataId;
                    }else if(isOpen !== dataId){
                        menus[isOpen].css("display","none");
                        menus[dataId].css("display","inline-block");
                        isOpen = dataId;
                    }else {
                        menus[isOpen].css("display","none");
                        isOpen = dataId;
                    };
                });
                $title.hover(function(){
                    if(isOpen !== -1) {
                        var dataId = Number($title.attr("dataId"));
                        menus[isOpen].css("display","none");
                        menus[dataId].css("display","inline-block");
                        isOpen = dataId; 
                    };
                });
             })(i)
            
            
        };
        $bar.append($menuTitle);
     };

     //二级菜单
     function createMenuList() { 
         for(var i = 0; i < menuData.length; i ++){
             var $menus = $("<ul class='menus'></ul>");
             var items=menuData[i].menuItems;
             for (var j = 0; j < items.length; j++){
                 if(items[j].title === "hr"){
                     var $hr = $("<li class='menuHr'></li>");
                     $menus.append($hr);
                     continue;
                 };
                 var $menuItem = $("<li class='item'></li>");
                 $menuItem.html(items[j].title);
                 $menuItem.attr("dataX",i);
                 $menuItem.attr("dataY",j);
                 if(items[j].shortcut !== ""){
                     var $shortcut = $("<span class='shortcut'></span>");
                     $shortcut.html(items[j].shortcut);
                     $menuItem.append($shortcut);
                 };
                 if(!items[j].enabled){
                     $menuItem.addClass("disabled");
                 };
                 $menus.append($menuItem);
                 $menuItem.click(function(){
                     if($(this).hasClass("disabled")) return;
                     var dataX = Number($(this).attr("dataX"));
                     var dataY = Number($(this).attr("dataY"));
                     menus[dataX].css("display","none");
                     isOpen = -1;
                     menuData[dataX].menuItems[dataY].handler();
                 });
             }
             $menus.css({
                 width:menuData[i].width,
                 left:menuData[i].left,
                 display:'none',
             });
             $bar.append($menus);
             menus.push($menus);
         };
      };
      function hideMenu(){
          if(isOpen == -1) return;
          menus[isOpen].css("display","none");
          isOpen = -1;
      };
      function init(){
          createMenu();
          createMenuList();
          $('body').append($bar);
      }
      function show(data) { 
          menuData = data;
          init();
          console.log(menuData)
          console.log(menuData[1].menuItems[1].title)
       }
       return{
           show:show,
           hideMenu:hideMenu,
       }
 }());;var $editor = (function () { 
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