// Generated by CoffeeScript 1.6.1
(function(){var e;e=jQuery;e(document).ready(function(){var t,n,r,i,s,o;e(".hanging-video").hide();window.BookSlideArrow=function(){function n(e,t,n){this.selector=e;this.direction=t;this.num=n}n.prototype.slide=function(){var n=this;return e(this.selector).click(function(r){var i,s,o,u,a;r.preventDefault();o=parseInt(e("#nona_books ul").css("margin-left"));s=e("#nona_books li.curIndex").index();i=function(){switch(this.direction){case"left":return i=s-1;case"right":return i=s+1}}.call(n);a=(n.num-1)*-209;if(i>s){s=e("#nona_books li.curIndex").index();s++;u=o-209}else if(i<s){s=e("#nona_books li.curIndex").index();s--;u=o+209}return e("#nona_books ul:not(:animated)").stop().animate({"margin-left":u},600,"linear",function(){o=parseInt(e("#nona_books ul").css("margin-left"));e("#nona_books li.curIndex").removeClass("curIndex");e("#nona_books li:eq("+i+")").addClass("curIndex");e(".controls li.current").removeClass("current");e(".controls li:eq("+i+")").addClass("current");return t(o,a)})})};return n}();n=e("#nona_books li").length;e("#nona_books li:eq(0)").addClass("curIndex");i=0;while(i<n){e(".controls ul").append("<li></li>");i++}e(".controls").width(n*23).find("ul li:eq(0)").addClass("current");s=new BookSlideArrow("#book_flip_left","left",n);o=new BookSlideArrow("#book_flip_right","right",n);s.slide();o.slide();e(".controls li").click(function(r){var i,s,o,u,a,f;r.preventDefault();s=e("#nona_books li.curIndex").index();i=e(r.target).index();f=(n-1)*-209;o=parseInt(e("#nona_books ul").css("margin-left"));e(".controls li.current").removeClass("current");e(".controls li:eq("+i+")").addClass("current");if(i>s){u=i-s;a=o+u*-209;e("#nona_books ul:not(:animated)").stop().animate({"margin-left":a},600,"linear",function(){e("#nona_books li.curIndex").removeClass("curIndex");e("#nona_books li:eq("+i+")").addClass("curIndex");return t(a,f)})}if(i<s){u=s-i;a=o-u*-209;e("#nona_books ul:not(:animated)").stop().animate({"margin-left":a},600,"linear",function(){e("#nona_books li.curIndex").removeClass("curIndex");e("#nona_books li:eq("+i+")").addClass("curIndex");return t(a,f)})}i===s});t=function(t,n){t===0?e("#book_flip_left").hide():t!==0&&e("#book_flip_left").css("display")!=="block"&&e("#book_flip_left").show();t===n&&e("#book_flip_right").hide();if(t!==n&&e("#book_flip_right").css("display")!=="block")return e("#book_flip_right").show()};r=function(){return e(".hanging-video").show().animate({top:115,opacity:"1"},{duration:1e3,easing:"easeOutBounce"})};return setTimeout(r,2500)})}).call(this);