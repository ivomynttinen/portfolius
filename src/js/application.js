// Context Menus

var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');

var menu = new Menu();
menu.append(new MenuItem({ label: 'New Portfolio' }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'Refresh' }));
menu.append(new MenuItem({ label: 'Portfolio Settings' }));
menu.append(new MenuItem({ label: 'Import' }));
menu.append(new MenuItem({ label: 'Export' }));
menu.append(new MenuItem({ label: 'Print' }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'Delete Portfolio' }));

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);


// Toggle view-modes

$("#toggle-list").click(function() {
  $(".view-modes button").removeClass("active");
  $(this).addClass("active");
  $(".dark").addClass("collapsed");
  $(".lists").removeClass("collapsed");
});

$("#toggle-chart").click(function() {
  $(".view-modes button").removeClass("active");
  $(this).addClass("active");
  $(".dark").removeClass("collapsed");
  $(".lists").addClass("collapsed");
});

//Sidebar Prototype

$("#sidebar li").click(function() {
  $("#sidebar li").removeClass("active");
  $(this).addClass("active");
});

// Transaction Prototype

$("#toggle-transaction").click(function() {
  $(this).siblings(".transaction-panel").toggleClass("show");
  $(this).toggleClass("active");
});
