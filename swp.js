﻿SpilGames("SWP DOMSelect Slider Utils BeLazy Tooltip".split(" "),function(a,c,l,m,f,n){a.init("segmentation_recommendations");var b=window.document.getElementById("wdg_segmentation_recommendations"),d=a.getProperty("ui_format")||"slider",p=a.getProperty("async")||!1,q=a.getProperty("pagesize")||4,r=a.getProperty("enable_tooltip"),g=function(){},e=g,h=g;"slider"===d&&new l({slide:c.get(".slider-slide",b),prev:c.get(".slider-prev",b),next:c.get(".slider-next",b),duration:.4,easing:"ease"});p&&(e=m.once(function(){a.Widget.refresh({async:!1,
pagesize:q,lazyload_images:!0,ui_format:d},{callback:function(){f.handleImagesIn(b)}})}),f.until("visible",b,e));r&&n.create(".wdg_segmentation_recommendations .game-thumb");"grid"===d&&(h=function(){var k=c.get("ul.grid-row",b);a.Utils.addClass(b,["col-m-1-2","col-l-4-6"]);a.Utils.removeClass(b,["full-row","col-m","col-l"]);a.Utils.addClass(k,["col-m-2","col-l-4"]);a.Utils.removeClass(k,["col-m-4","col-l-6"])});a.System.init(function(a){"game.sidepanel.open"===a.name&&a.data&&"segmentation_recommendations"===
a.data.item&&e();"recent.played.filled"===a.name&&h()})});