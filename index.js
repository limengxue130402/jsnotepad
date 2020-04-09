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
  });