define("app/init",["placeholder","cookie"],function(e){function t(){$(window).scrollTop()>500?$("#u-gotop").fadeIn():$("#u-gotop").fadeOut()}e("placeholder"),e("cookie"),$("#jsHead .close").on("click",function(){var e=$(this).parent();6!=$.browser.version?e.animate({width:0,opacity:0},function(){e.hide()}):e.hide()}),$(".notice .close").on("click",function(){$(this).parents(".notice").slideUp();var e=$(this).attr("data-noticeId");$.ajax({type:"GET",url:"/Ajax/getUserNoticeById",data:{notice_id:e}})}),$(".jsMore").hover(function(){clearTimeout(this.timer),$(this).find(".jsUl").show()},function(){var e=this;this.timer=setTimeout(function(){$(e).find(".jsUl").hide()},100)}),$(".g-sd-r").children().last().css("margin-bottom","0"),$("#silderY").length&&e.async("silder",function(){$("#silderY").silder({axis:"y",speed:5e3,points:!0}),$(".jsSilderDate").hourglass({bStartDay:!0})}),$.fn.extend({addSelect:function(){return this.each(function(e,t){var n=$(t),a=n.children(),i='<div class="u-sec">',s='<h5 class="seced">'+a.eq(t.selectedIndex).html()+'</h5><ul class="secls">';i+=s,a.each(function(e,t){var n="<li>"+$(t).html()+"</li>";i+=n}),i+="</ul></div>";var c=$(i);n.after(c);var o=c.find("ul"),l=c.find("h5"),n=c.prev(),d=o.children(),r=n.attr("data-count")||6,h=n.attr("data-width");h&&c.css("width",h),o.height(d.length<r?24*d.length:24*r),d.each(function(){$(this).on("click",function(){{var e=$(this);n[0].selectedIndex}n[0].selectedIndex!=e.index()&&(n[0].selectedIndex=e.index(),l.html(e.html()),n.change()),c.removeClass("open"),o.removeClass("open"),l.removeClass("open")})}),l.on("click",function(){l.toggleClass("open").next().toggleClass("open"),c.toggleClass("open"),$(".u-sec ul").not(l.next()).removeClass("open"),$(".u-sec").not(c).removeClass("open"),$(".u-sec h5").not(l).removeClass("open")}),("6.0"==$.browser.version||"7.0"==$.browser.version)&&d.mouseover(function(){d.removeClass("hover"),$(this).addClass("hover")})})},addRadio:function(){return this.each(function(e,t){var n=$(t),a=$('<span class="u-rad"></span>');return n.after(a),n.prop("checked")&&a.addClass("check"),n.prop("disabled")?!0:void a.parent().on("click",function(){var e=$(this),t=e.find("input[type='radio']"),n=t.attr("name");return $("input[name="+n+"]").not(t).each(function(e,t){var n=$(t).attr("checked",!1).parent();n.find(".u-rad").removeClass("check")}),t.prop("checked")?t.attr("data-extend")&&(t.attr("checked",!1),a.removeClass("check"),t.change()):(t.attr("checked",!0),a.addClass("check"),t.change()),!1})})},unChecked:function(){return this.each(function(e,t){$(t).attr("checked",!1).next().removeClass("radio"==t.type.toLowerCase()?"check":"checked")})},checked:function(){return this.each(function(e,t){$(t).attr("checked",!0).next().addClass("radio"==t.type.toLowerCase()?"check":"checked")})},addCheckbox:function(){return this.each(function(e,t){var n=$(t),a=$('<span class="u-ckb"></span>');return n.after(a),n.prop("checked")&&a.addClass("checked"),n.prop("disabled")?!0:void a.parent().on("click",function(){$(this);return n.attr("checked",!n.prop("checked")),a.toggleClass("checked"),n.change(),!1})})},dialogCenter:function(){return this.each(function(e,t){var n=$(t),a=n.find(".in");a.css("top",(n.outerHeight(!0)-a.outerHeight(!0))/2),$(window).height()-a.outerHeight(!0)<100&&($(this).find(".in").css("top","10%"),n.find(".bd").height("360px"))})},alertCkplayer:function(){var t=this;return e.async("ckplayer",function(e){t.each(function(t,n){$(n).live("click",function(){var t=$(this).attr("data-src");if(t){var n=$(this).attr("data-title");0==$("#ckplayerDialog").length&&$("body").append('<div class="m-dialog" id="ckplayerDialog"><div class="in"><div class="hd"><a class="close" href="javascript:void(0)" title="关闭">x</a><h4 class="u-tt-md">如何上课及上课常见问题</h4></div><div class="j-bd" id="playerContent"></div></div></div>'),e.embed("/static/js/lib/ckplayer/ckplayer.swf","playerContent","ckplayer_playerContent","800","450",!1,{f:t,c:0,b:1,p:1},[t],{bgcolor:"#FFF",allowFullScreen:!0,allowScriptAccess:"always",wmode:"transparent"}),$("#ckplayerDialog").show().dialogCenter().find("h4").html(n)}})})}),this}}),$.extend({alert:function(e,t,n,a){if(n=n||"确&nbsp;定",$("#m-alert").length)$("#m-alert").show().find(".bd").html(e).end().find(".u-btn").html(n);else{var i='<div class="m-alert" id="m-alert" style="display:block;"><div class="in"><div class="hd"><a class="close" href="javascript:;" title="关闭">x</a><h4>温馨提示</h4></div><div class="bd">'+e+'</div><div class="ft"><div class="sibmit f-tac"><label class="u-lab" style="display:none;" for="jsFor"><input class="f-dn" id="jsFor" type="checkbox" value="不再提示"><span class="u-txt">不再提示</span>&nbsp;&nbsp;&nbsp;&nbsp;</label><span class="close u-btn hover">'+n+"</span></div></div></div></div>";$("body").append(i);var s=null;$("#m-alert").on("click",function(e){if($(e.target).hasClass("m-alert")){var t=0;clearInterval(s),s=setInterval(function(){$("#m-alert").find(".sibmit .close").toggleClass("active"),t++,4==t&&clearInterval(s)},120)}})}var c=$("#jsFor");c.parent().hide(),a&&(0==c.next(".u-ckb").length&&$("#jsFor").addCheckbox(),c.parent().show()),$("#m-alert").find(".close").unbind("click").bind("click",function(){$("#m-alert").hide(),t&&t()})},confirm:function(e,t,n,a,i,s){if(a=a||"确定",i=i||"取消",$("#m-confirm").length)$("#m-confirm").show().find(".bd p:first").html(e).end().find(".jsSure").html(a).end().find(".jsCancel").html(i);else{var c='<div class="m-alert" id="m-confirm" style="display:block;"><div class="in" style="width:260px;margin-left:-130px;"><div class="hd"><a class="close" href="javascript:;" title="关闭">x</a><h4>温馨提示</h4></div><div class="bd"><p>'+e+'</p><p class="f-tal" style="display:none;"><label class="u-lab" for="jsFor2"><input class="f-dn" id="jsFor2" type="checkbox" value="以后不再提示"><span class="u-txt">以后不再提示</span></label></p></div><div class="ft"><div class="sibmit f-tac"><span class="u-btn active jsSure">'+a+'</span><i>&nbsp;&nbsp;</i><span class="u-btn hover jsCancel">'+i+"</span></div></div></div></div>",o=$(c);$("body").append(o);var l=null;o.on("click",function(e){if($(e.target).hasClass("m-alert")){var t=0;clearInterval(l),l=setInterval(function(){o.find(".jsSure").toggleClass("active"),t++,4==t&&clearInterval(l)},120)}})}var d=$("#jsFor2");d.parent().parent().hide(),s&&(0==d.next(".u-ckb").length&&$("#jsFor2").addCheckbox(),d.parent().parent().show()),$("#m-confirm").find(".close,.jsCancel").unbind("click").bind("click",function(){$("#m-confirm").hide(),n&&n.call(this)}),$("#m-confirm").find(".jsSure").unbind("click").bind("click",function(){$("#m-confirm").hide(),t&&t()})},loading:function(){if($("#m-load").length)$("#m-load").show();else{var e='<div class="m-load" id="m-load" style="display:block;">正在努力加载中</div>';$("body").append(e)}},unloading:function(){$("#m-load").hide()}}),$("select.f-dn").each(function(e,t){$(t).addSelect()}),$(document).on("click",function(e){return 0!=$(e.target).closest(".u-sec").length?!1:($(".u-sec").removeClass("open"),$(".u-sec ul").removeClass("open"),$(".u-sec h5").removeClass("open"),void 0)}),$("input[type='radio'].f-dn").each(function(e,t){$(t).addRadio()}),$("input[type='checkbox'].f-dn").each(function(e,t){$(t).addCheckbox()}),("6.0"==$.browser.version||"7.0"==$.browser.version)&&$("input.u-ipt").focus(function(){$(this).addClass("focus")}).blur(function(){$(this).removeClass("focus")}),$(".m-dialog .close").live("click",function(){$(this).parents(".m-dialog").fadeOut()}),$("[data-dialog]").live("click",function(){var e=$(this).attr("data-dialog"),t=$("#"+e).show();t.dialogCenter()}),$(".m-dialog").dialogCenter(),t(),$(window).scroll(function(){t()}),$("#u-gotop").on("click",function(){$("body,html").animate({scrollTop:0},"fast")}),$(".jsPv").on("click",function(){var e=$(this).attr("data-pvlog");$.post("/user/ajax_add_videolog.php",{video_name:e},function(){})}),window.soundPlay=function(e){for(var t=document.getElementsByTagName("Object"),n=0;n<t.length;n++)t[n].id!=e&&t[n].stopSound()},!window.ActiveXObject||window.XMLHttpRequest||$.cookie("ie6Alert")||$.alert("您当前使用的浏览器版本过低，可能会影响到您的正常使用，建议升级到更高版本的浏览器",function(){$.cookie("ie6Alert",1,{expires:30})})});