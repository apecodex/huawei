// 关闭顶部打开app

oepnApp = function() {
    var topbar_oapp = $(".topbar-openapp");
    var app_close = $(".app-close");
    var home_top = $(".home-top");
    var content_box = $(".content-box");
    app_close.click(function() {
        topbar_oapp.css({"display": "none"})
        home_top.css({"top":"0"});
        topbar_oapp.attr({"id": "none"})
        content_box.css({"margin-top": "2.96rem"});
    });
}
oepnApp();

$(document).ready(function() {
    var topbar_oapp = $(".topbar-openapp");
    var home_top = $(".home-top");
    var header_change_color = $(".header")
    var sub_nav_od_color = $(".sub-nav-outdiv");
    var logo_img = $(".logo-img");
    var icon_message = $(".icon-message")
    var shortcut_login = $(".shortcut-login");
    var sub_nav_a_color = $(".sub-nav li a");
    $(this).scroll(function() {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 0 || $(this).scrollTop() <= 1000) {
            header_change_color.css({"background": "rgba(255, 255, 255, 0." + $(this).scrollTop() + ")"})
            sub_nav_od_color.css({"background": "rgba(255, 255, 255, 0." + $(this).scrollTop() + ")"})

        }
        if ($(this).scrollTop() >= 0) {
            topbar_oapp.css({"display": "block"})
            home_top.css({"top":"2.16rem"});
            icon_message.css({"background":"url(./images/icon_message.png) no-repeat"});
            logo_img.css({"background":"url(./images/vmall_white.png) no-repeat"});
            icon_message.css({"background-size":"1rem 1rem"});
            logo_img.css({"background-size":"cover"});
            shortcut_login.css({"color": "#fff"});
            sub_nav_a_color.css({"color": "#fff"});
        }
        if (topbar_oapp.attr("id") != "dis") {
            topbar_oapp.css({"display": "none"})
            home_top.css({"top":"0"});
        }
        if ($(this).scrollTop() >= 200) {
            topbar_oapp.css({"display": "none"})
            home_top.css({"top":"0"});
        }
        if ($(this).scrollTop() >= 1000) {
            header_change_color.css({"background-color": "#fff"})
            sub_nav_od_color.css({"background-color": "#fff"})
            icon_message.css({"background":"url(./images/icon_message_black.png) no-repeat"});
            logo_img.css({"background":"url(./images/logo_vmall.png) no-repeat"});
            icon_message.css({"background-size":"1rem 1rem"});
            logo_img.css({"background-size":"cover"});
            shortcut_login.css({"color": "#333"});
            sub_nav_a_color.css({"color": "#333"});
        }
    });
});

// 导航下拉
changeIcon = function() {
    var change_icon_down = $(".change-icon-down");
    var change_icon_up = $(".change-icon-up");
    var channel_box = $(".channel-box");
    change_icon_down.click(function() {
        $(this).css({"display": "none"})
        change_icon_up.css({"display": "inline-block"});
        channel_box.css({"display":"block"});
    });
    change_icon_up.click(function() {
        $(this).css({"display": "none"})
        change_icon_down.css({"display": "inline-block"});
        channel_box.css({"display":"none"});
    });
    
}
changeIcon();

// 轮播图

galleryInner = function() {
    var pro_gallery_inner_li = $(".pro-gallery-inner-ul li")
    var count = 0;
    var sum_num = 0;
    setInterval(function() {
        
        if ((++count) > pro_gallery_inner_li.length) {
            count = 0;
            sum_num = 0;
        }
        sum_num+=700;
        pro_gallery_inner_li.css({"transform": "translate3d(-" + sum_num + "px,0,0)"})
    }, 3000)

    
    
}
galleryInner();