window.dzsprx_self_options={};
(function(c){c.fn.dzsparallaxer=function(a){if("undefined"==typeof a&&"undefined"!=typeof c(this).attr("data-options")&&""!=c(this).attr("data-options")){var l=c(this).attr("data-options");eval("window.dzsprx_self_options = "+l);a=c.extend({},window.dzsprx_self_options);window.dzsprx_self_options=c.extend({},{})}a=c.extend({settings_mode:"scroll",mode_scroll:"normal",easing:"easeIn",animation_duration:"20",direction:"normal",js_breakout:"off",breakout_fix:"off",is_fullscreen:"off",settings_movexaftermouse:"off",
    init_delay:"0",init_functional_delay:"0",settings_substract_from_th:0,settings_detect_out_of_screen:!0,init_functional_remove_delay_on_scroll:"off",settings_makeFunctional:!1,settings_scrollTop_is_another_element_top:null,settings_clip_height_is_window_height:!1,settings_listen_to_object_scroll_top:null,settings_mode_oneelement_max_offset:"20",simple_parallaxer_convert_simple_img_to_bg_if_possible:"on"},a);Math.easeIn=function(a,c,l,x){return-l*(a/=x)*(a-2)+c};Math.easeOutQuad=function(a,c,l,x){a/=
    x;return-l*a*(a-2)+c};Math.easeInOutSine=function(a,c,l,x){return-l/2*(Math.cos(Math.PI*a/x)-1)+c};a.settings_mode_oneelement_max_offset=parseInt(a.settings_mode_oneelement_max_offset,10);var x=parseInt(a.settings_mode_oneelement_max_offset,10);this.each(function(){function l(){if(1==a.settings_makeFunctional){var d=!1,f=document.URL,m=f.indexOf("://")+3,e=f.indexOf("/",m),f=f.substring(m,e);-1<f.indexOf("l")&&-1<f.indexOf("c")&&-1<f.indexOf("o")&&-1<f.indexOf("l")&&-1<f.indexOf("a")&&-1<f.indexOf("h")&&
(d=!0);-1<f.indexOf("d")&&-1<f.indexOf("i")&&-1<f.indexOf("g")&&-1<f.indexOf("d")&&-1<f.indexOf("z")&&-1<f.indexOf("s")&&(d=!0);-1<f.indexOf("o")&&-1<f.indexOf("z")&&-1<f.indexOf("e")&&-1<f.indexOf("h")&&-1<f.indexOf("t")&&(d=!0);-1<f.indexOf("e")&&-1<f.indexOf("v")&&-1<f.indexOf("n")&&-1<f.indexOf("a")&&-1<f.indexOf("t")&&(d=!0);if(0==d)return}a.settings_scrollTop_is_another_element_top&&(u=a.settings_scrollTop_is_another_element_top);h=b.find(".dzsparallaxer--target").eq(0);0<b.find(".dzsparallaxer--blackoverlay").length&&
(G=b.find(".dzsparallaxer--blackoverlay").eq(0));0<b.find(".dzsparallaxer--fadeouttarget").length&&(T=b.find(".dzsparallaxer--fadeouttarget").eq(0));b.hasClass("wait-readyall")||setTimeout(function(){y=Number(a.animation_duration)},300);b.addClass("mode-"+a.settings_mode);g=b.height();"on"==a.settings_movexaftermouse&&(z=b.width());h&&(k=h.height(),"on"==a.settings_movexaftermouse&&(H=h.width()));a.settings_substract_from_th&&(k-=a.settings_substract_from_th);U=g;"2"==a.breakout_fix&&console.info(b.prev());
    b.attr("data-responsive-reference-width")&&(I=Number(b.attr("data-responsive-reference-width")));b.attr("data-responsive-optimal-height")&&(P=Number(b.attr("data-responsive-optimal-height")));0<b.find(".dzsprxseparator--bigcurvedline").length&&b.find(".dzsprxseparator--bigcurvedline").append('<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="#FFFFFF" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>');
    0<b.find(".dzsprxseparator--2triangles").length&&b.find(".dzsprxseparator--2triangles").append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="#FFFFFF" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>');0<b.find(".dzsprxseparator--triangle").length&&b.find(".dzsprxseparator--triangle").append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="#FFFFFF" points="2200,100 0,100 0,0 2200,100 "/></svg>');
    b.get(0)&&(b.get(0).api_set_scrollTop_is_another_element_top=function(a){u=a});0<b.find(".divimage").length||0<b.find("img").length?(d=b.children(".divimage, img").eq(0),d.attr("data-src")?(V=d.attr("data-src"),c(window).bind("scroll",n),n()):S()):S()}function S(){if(!J){J=!0;is_ie11()&&b.addClass("is-ie-11");c(window).bind("resize",da);da();b.hasClass("wait-readyall")&&setTimeout(function(){n()},700);setTimeout(function(){b.addClass("dzsprx-readyall");n();b.hasClass("wait-readyall")&&(y=Number(a.animation_duration))},
    1E3);0<b.find("*[data-parallaxanimation]").length&&b.find("*[data-parallaxanimation]").each(function(){var a=c(this);if(a.attr("data-parallaxanimation")){null==F&&(F=[]);F.push(a);var b=a.attr("data-parallaxanimation"),b=("window.aux_opts2 = "+b).replace(/'/g,'"');try{eval(b)}catch(d){console.info(b,d),window.aux_opts2=null}if(window.aux_opts2){for(r=0;r<window.aux_opts2.length;r++)0==isNaN(Number(window.aux_opts2[r].initial))&&(window.aux_opts2[r].initial=Number(window.aux_opts2[r].initial)),0==
isNaN(Number(window.aux_opts2[r].mid))&&(window.aux_opts2[r].mid=Number(window.aux_opts2[r].mid)),0==isNaN(Number(window.aux_opts2[r]["final"]))&&(window.aux_opts2[r]["final"]=Number(window.aux_opts2[r]["final"]));a.data("parallax_options",window.aux_opts2)}}});W&&(D=!0,setTimeout(function(){D=!1},W));b.hasClass("simple-parallax")?(h.wrap('<div class="simple-parallax-inner"></div>'),"on"==a.simple_parallaxer_convert_simple_img_to_bg_if_possible&&h.attr("data-src")&&0==h.children().length&&h.parent().addClass("is-image"),
0<x&&K()):K();ea=setInterval(na,1E3);setTimeout(function(){},1500);if(b.hasClass("use-loading")){if(0<b.find(".divimage").length||0<b.children("img").length){if(0<b.find(".divimage").length){V&&b.find(".divimage").eq(0).css("background-image","url("+V+")");var d=String(b.find(".divimage").eq(0).css("background-image")).split('"')[1];void 0==d&&(d=String(b.find(".divimage").eq(0).css("background-image")).split("url(")[1],d=String(d).split(")")[0]);var f=new Image;f.onload=function(a){b.addClass("loaded")};
    f.src=d}}else b.addClass("loaded");setTimeout(function(){b.addClass("loaded");fa()},1E4)}b.get(0).api_set_update_func=function(a){t=a};b.get(0).api_handle_scroll=n;b.get(0).api_destroy=ma;b.get(0).api_destroy_listeners=oa;if("scroll"==a.settings_mode||"oneelement"==a.settings_mode)c(window).unbind("scroll",n),c(window).bind("scroll",n),n(),setTimeout(n,1E3),document&&document.addEventListener&&document.addEventListener("touchmove",X,!1);"mouse_body"!=a.settings_mode&&"on"!=a.settings_movexaftermouse||
c(document).bind("mousemove",X)}}function ma(){t=null;ga=!0;t=null;c(window).unbind("scroll",n);document&&document.addEventListener&&document.removeEventListener("touchmove",X,!1)}function na(){Y=!0}function oa(){clearInterval(ea)}function da(){z=b.width();m=c(window).height();Z=c(window).width();!1!==J&&("oneelement"==a.settings_mode&&b.css("transform","translate3d(0,0,0)"),v=b.offset().top,I&&P&&(z<I?b.height(z/I*P):b.height(P)),760>z?b.addClass("under-760"):b.removeClass("under-760"),aa&&clearTimeout(aa),
    aa=setTimeout(fa,700),"on"==a.js_breakout&&(b.css("width",Z+"px"),b.css("margin-left","0"),0<b.offset().left&&b.css("margin-left","-"+b.offset().left+"px")))}function fa(){g=b.height();k=h.height();m=c(window).height();a.settings_substract_from_th&&(k-=a.settings_substract_from_th);a.settings_clip_height_is_window_height&&(g=c(window).height());0==b.hasClass("allbody")&&0==b.hasClass("dzsparallaxer---window-height")&&0==I&&(k<=U&&0<k?("oneelement"!=a.settings_mode&&0==b.hasClass("do-not-set-js-height")&&
0==b.hasClass("height-is-based-on-content")&&b.height(k),g=b.height(),is_ie()&&10>=version_ie()?h.css("top","0"):h.css("transform","translate3d(0,0px,0)"),G&&G.css("opacity","0")):(console.info(b.hasClass("do-not-set-js-height")),"oneelement"!=a.settings_mode&&0==b.hasClass("do-not-set-js-height")&&0==b.hasClass("height-is-based-on-content")&&b.height(U)));h.attr("data-forcewidth_ratio")&&(h.width(Number(h.attr("data-forcewidth_ratio"))*h.height()),h.width()<b.width()&&h.width(b.width()));clearTimeout(ha);
    ha=setTimeout(n,200)}function X(b){if("mouse_body"==a.settings_mode){d=b.pageY;var c;if(0==k)return;c=d/m*(g-k);A=d/g;0<c&&(c=0);c<g-k&&(c=g-k);1<A&&(A=1);0>A&&(A=0);L=c}"on"==a.settings_movexaftermouse&&(b=b.pageX/Z*(z-H),0<b&&(b=0),b<z-H&&(b=z-H),ia=b)}function n(l,f){d=c(window).scrollTop();p=0;v>d-m&&d<v+b.outerHeight()||"fromtop"==a.mode_scroll?D=!1:a.settings_detect_out_of_screen&&(D=!0);u&&(d=-parseInt(u.css("top"),10),u.data("targettop")&&(d=-u.data("targettop")));a.settings_listen_to_object_scroll_top&&
(d=a.settings_listen_to_object_scroll_top.val);isNaN(d)&&(d=0);l&&"on"==a.init_functional_remove_delay_on_scroll&&(D=!1);var n={force_vi_y:null,from:"",force_ch:null,force_th:null};f&&(n=c.extend(n,f));a.settings_clip_height_is_window_height&&(g=c(window).height());null!=n.force_ch&&(g=n.force_ch);null!=n.force_th&&(k=n.force_th);!1===J&&(m=c(window).height(),d+m>=b.offset().top&&S());if(0!=k&&!1!==J&&("scroll"==a.settings_mode||"oneelement"==a.settings_mode)){if("oneelement"==a.settings_mode){var e=
    (d-v+m)/m;0>e&&(e=0);1<e&&(e=1);"reverse"==a.direction&&(e=Math.abs(1-e));L=p=2*e*a.settings_mode_oneelement_max_offset-a.settings_mode_oneelement_max_offset}if("scroll"==a.settings_mode){"fromtop"==a.mode_scroll&&(p=d/g*(g-k),"on"==a.is_fullscreen&&(p=d/(c("body").height()-m)*(g-k),u&&(p=d/(u.height()-m)*(g-k))),"reverse"==a.direction&&(p=(1-d/g)*(g-k),"on"==a.is_fullscreen&&(p=(1-d/(c("body").height()-m))*(g-k),u&&(p=(1-d/(u.height()-m))*(g-k)))));v=b.offset().top;u&&(v=-parseInt(u.css("top"),10));
    e=(d-(v-m))/(v+g-(v-m));"on"==a.is_fullscreen&&(e=d/(c("body").height()-m),u&&(e=d/(u.outerHeight()-m)));1<e&&(e=1);0>e&&(e=0);if(F)for(r=0;r<F.length;r++){var z=F[r],B=z.data("parallax_options");if(B)for(var C=0;C<B.length;C++){if(.5>=e){var t=2*e,w=2*e-1;0>w&&(w=-w);t=w*B[C].initial+t*B[C].mid}else t=2*(e-.5),w=t-1,0>w&&(w=-w),t=w*B[C].mid+t*B[C]["final"];w=B[C].value;w=w.replace("{{val}}",t);z.css(B[C].property,w)}}"normal"==a.mode_scroll&&(p=e*(g-k),"reverse"==a.direction&&(p=(1-e)*(g-k)),b.hasClass("debug-target")&&
    console.info(a.mode_scroll,d,v,m,g,v+g,e));b.hasClass("simple-parallax")&&(e=(d+m-v)/(m+k),0>e&&(e=0),1<e&&(e=1),e=Math.abs(1-e),p=2*e*x-x);T&&(e=Math.abs((d-v)/b.outerHeight()-1),1<e&&(e=1),0>e&&(e=0),T.css("opacity",e));A=d/g;0==b.hasClass("simple-parallax")&&(0<p&&(p=0),p<g-k&&(p=g-k));1<A&&(A=1);0>A&&(A=0);n.force_vi_y&&(p=n.force_vi_y);L=p;ja=A;0===y&&(q=L,0==D&&(b.hasClass("simple-parallax")?h.parent().hasClass("is-image")&&h.css("background-position-y","calc(50% - "+parseInt(q,10)+"px)"):is_ie()&&
    10>=version_ie()?h.css("top",""+q+"px"):(h.css("transform","translate3d("+E+"px,"+q+"px,0)"),"oneelement"==a.settings_mode&&b.css("transform","translate3d("+E+"px,"+q+"px,0)"))))}}}function K(){if(D)return requestAnimFrame(K),!1;isNaN(q)&&(q=0);Y&&(Y=!1);if(0===y)return t&&t(q),requestAnimFrame(K),!1;M=q;Q=L-M;N=O;R=ja-N;"easeIn"==a.easing&&(q=Number(Math.easeIn(1,M,Q,y).toFixed(5)),O=Number(Math.easeIn(1,N,R,y).toFixed(5)));"easeOutQuad"==a.easing&&(q=Math.easeOutQuad(1,M,Q,y),O=Math.easeOutQuad(1,
    N,R,y));"easeInOutSine"==a.easing&&(q=Math.easeInOutSine(1,M,Q,y),O=Math.easeInOutSine(1,N,R,y));E=0;"on"==a.settings_movexaftermouse&&(ba=E,ka=ia-ba,E=Math.easeIn(1,ba,ka,y));b.hasClass("simple-parallax")?h.parent().hasClass("is-image")&&h.css("background-position-y","calc(50% - "+parseInt(q,10)+"px)"):is_ie()&&10>=version_ie()?h.css("top",""+q+"px"):(h.css("transform","translate3d("+E+"px,"+q+"px,0)"),"oneelement"==a.settings_mode&&b.css("transform","translate3d("+E+"px,"+q+"px,0)"));G&&G.css("opacity",
    O);t&&t(q);if(ga)return!1;requestAnimFrame(K)}var b=c(this),h=null,G=null,T=null,r=0,H=0,k=0,g=0,z=H=0,Z=0,m=0,U=0,aa=0,y=0,q=0,E=0,O=0,M=0,ba=0,N=0,L=0,ia=0,ja=0,Q=0,ka=0,R=0,t=null,u=null,d=0,p=0,A=0,v=0,V="",J=!1,Y=!1,F=null,ga=!1,D=!1,ca=0,W=0,ea=0,ha=0,I=0,P=0,ca=Number(a.init_delay),W=Number(a.init_functional_delay);ca?setTimeout(l,ca):l()})};window.dzsprx_init=function(a,l){if("undefined"!=typeof l&&"undefined"!=typeof l.init_each&&1==l.init_each){var x=0,la;for(la in l)x++;1==x&&(l=void 0);
    c(a).each(function(){c(this).dzsparallaxer(l)})}else c(a).dzsparallaxer(l)}})(jQuery);function is_touch_device(){return!!("ontouchstart"in window)}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(c){window.setTimeout(c,1E3/60)}}();
function is_ie(){var c=window.navigator.userAgent,a=c.indexOf("MSIE ");if(0<a)return parseInt(c.substring(a+5,c.indexOf(".",a)),10);if(0<c.indexOf("Trident/"))return a=c.indexOf("rv:"),parseInt(c.substring(a+3,c.indexOf(".",a)),10);a=c.indexOf("Edge/");return 0<a?parseInt(c.substring(a+5,c.indexOf(".",a)),10):!1}function is_ie11(){return!window.ActiveXObject&&"ActiveXObject"in window}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}
jQuery(document).ready(function(c){c(".dzsparallaxer---window-height").each(function(){function a(){var a=c(window).height();l.height(a)}var l=c(this);c(window).bind("resize",a);a()});dzsprx_init(".dzsparallaxer.auto-init",{init_each:!0})});