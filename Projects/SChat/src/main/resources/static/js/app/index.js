define("app/openclass/index",["init","silder"],function(i){i("init"),i("silder"),$("#silderX").silder({hoverBtn:!1,points:!0}),$(".home-li-pic").hover(function(){$(this).find(".cover-img").fadeIn()},function(){$(this).find(".cover-img").hide()})});