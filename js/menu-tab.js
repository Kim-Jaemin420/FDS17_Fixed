//DOM 노드 찾기
var items = $('.menu-item');
var btn = $('.btn-menu');
var panel = $('.board section');
var tab = $('.tab');

//기능 구현
btn.click(function (event) {  
  event.preventDefault();
  items.removeClass('menu-act');
  $(this).parent().addClass('menu-act');
})
tab.click(function (event) { 
  event.preventDefault();
  panel.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
});
