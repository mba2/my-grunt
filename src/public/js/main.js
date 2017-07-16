$(document).ready(function(){
  Header.initOnLoad();
  Tabs.init();
});

$(document).on("scroll", function(){
  Page.scrollDirection();
});
