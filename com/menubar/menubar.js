var $menubar = (function () { 
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
 }());