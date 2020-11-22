!function(t){"use strict";function i(i,s){this.el=i.parents(".wrapper-container"),this.config={speed:t.fx.speed,easing:"linear",cssPrefix:"",adaptiveClass:!0,afterOpen:function(){},afterClose:function(){}},s=s||{},t.extend(this.config,s),this.activeClass=this.config.cssPrefix+"active",this.nav=this.el.find("."+this.config.cssPrefix+"tabs-nav").first(),this.tabsContainer=this.el.find("."+this.config.cssPrefix+"tabs-content").first(),this.tabs=this.tabsContainer.find("."+this.config.cssPrefix+"tab"),this.toDefaultState(),this.bindEvents()}i.prototype.toDefaultState=function(){var i=this.nav.find("."+this.activeClass);i.length||(i=this.nav.find("a").first()).addClass(this.activeClass),this.makeAdaptive();var s=t(i.attr("href"));s.length&&(this.tabsContainer.css({position:"relative"}),this.tabs.css({position:"absolute",top:0,left:0,width:"100%"}),this.tabs.not(s).css({opacity:0,visibility:"hidden"}),this.openTab(s))},i.prototype.bindEvents=function(){this.nav.on("click","a[href]",{self:this},function(i){i.preventDefault();var s=t(this),e=i.data.self,a=t(s.attr("href"));if(s.hasClass(e.activeClass))return!1;s.addClass(e.activeClass).parent().siblings().children("a").removeClass(e.activeClass),a.length&&e.openTab(a)}),t(window).on("resize.tabs",this.updateContainer.bind(this))},i.prototype.updateContainer=function(){var t=this;t.timeOutId&&clearTimeout(t.timeOutId),t.timeOutId=setTimeout(function(){var i=t.tabsContainer.find("."+t.activeClass).outerHeight();t.tabsContainer.stop().animate({height:i},{complete:function(){clearTimeout(t.timeOutId)},step:function(){var i=t.el.closest("."+t.config.cssPrefix+"tab");i.length&&t.updateParentTabContainer(i.outerHeight())},duration:t.config.speed,easing:t.config.easing}),t.config.adaptiveClass&&t.makeAdaptive()},100)},i.prototype.makeAdaptive=function(){var i=this.el.outerWidth(),s=0;this.nav.children().each(function(){s+=t(this).outerWidth()}),this.el[s>i?"addClass":"removeClass"](this.config.cssPrefix+"responsive")},i.prototype.openTab=function(i){var s=this,e=i.outerHeight(),a=i.siblings("."+this.activeClass);a.length&&this.closeTab(a),i.addClass(this.activeClass).siblings().removeClass(this.activeClass),this.tabsContainer.stop().animate({height:e},{duration:s.config.speed,easing:s.config.easing,step:function(){var t=s.el.closest("."+s.config.cssPrefix+"tab");t.length&&s.updateParentTabContainer(t.outerHeight())}}),i.css("visibility","visible").stop().animate({opacity:1},{complete:function(){s.config.afterOpen.call(t(this))},duration:s.config.speed,easing:s.config.easing})},i.prototype.updateParentTabContainer=function(t){var i=this.el.closest("."+this.config.cssPrefix+"tabs-content");i.length&&i.css("height",t)},i.prototype.closeTab=function(i){var s=this;i.stop().animate({opacity:0},{complete:function(){var i=t(this);i.css("visibility","hidden"),s.config.afterClose.call(i)},duration:s.config.speed,easing:s.config.easing})},t.fn.hh_custom_tabs=function(s){return this.each(function(){var e=t(this);e.data("madtabs")||e.data("madtabs",new i(e,s))})}}(jQuery);