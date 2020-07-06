// 关闭顶部banner

$("#top_banner_close_btn").click(function () {
    $(".top-banner").slideUp();
});


// 搜索框点击后隐藏key
$(document).bind("click", function (e) { 
    var target = $(e.target); 
    if (target.closest("#ttt").length == 0) { 
        $(".search-bar-key").show(); 
        $(".search-key-list").hide();
    } 
    else { 
        $(".search-bar-key").hide(); 
        $(".search-key-list").show();
    } 
});


// 轮播图
function boardSliper() {
    var prev = $(".board-slider-prev");
    var next = $(".board-slider-next");
    var slider_nav = $(".slider-nav span");
    var slider_img = $(".board-slider-img");
    var run = null;

    var num = slider_nav.length;
    var count = 0
    
    next.click(function() {
        clearInterval(run);
        count++;
        if (count == 1) {
            count++;
        }
        if (count == num+1) {
            count = 1;
        }
        slider_img.attr("src", "./uploads/borad-sliper-img" + count + ".jpg")
        slider_nav.eq(count-2).removeClass("current");
        slider_nav.eq(count-1).addClass("current");
    });
    
    prev.click(function() {
        clearInterval(run);
        count--;
        
        if (count <= 0) {
            count = 6;
        }
        slider_img.attr("src", "./uploads/borad-sliper-img" + count + ".jpg")
        slider_nav.eq(0).removeClass("current");
        slider_nav.eq(count).removeClass("current");
        slider_nav.eq(count-1).addClass("current");
        
    });


    slider_img.hover(function() {
        clearInterval(run);
    }, function() {
        run = setInterval(go, 3000);
    });
    run = setInterval(go, 3000);

    function go() {
        count++;
        if (count == num + 1) {
            count = 1;
        }
        if (count <= 0) {
            count = 6;
        }
        
        slider_img.attr("src", "./uploads/borad-sliper-img" + count + ".jpg")
        slider_nav.eq(count-2).removeClass("current");
        slider_nav.eq(count-1).addClass("current");
    }
}
boardSliper();

function recommend_btn() {
    var btn_prev = $(".goods-rolling .btn-prev");
    var btn_next = $(".goods-rolling .btn-next");
    var grid_list = $(".goods-rolling .grid-list");
    var count =  grid_list.find("li").length / 5;
    var count_b = grid_list.find("li").length / 5;
    
    var num = 0;
    
    if (num == 0) {
        btn_prev.hide();
    }
    btn_prev.click(function() {
        if ((count++) == count_b) {
            btn_next.hide()
        } else {
            btn_next.show()
        }
        num -= 1210;
        if (num == 0) {
            btn_prev.hide();
        } else {
            btn_prev.show()
        }
        grid_list.css({"transform": "translate3d(-" + num + "px, 0px, 0px)"})
    });

    btn_next.click(function() {
        if ((count--) == 2) {
            btn_next.hide()
        } else {
            btn_next.show()
        }
        num += 1210;
        if (num == 0) {
            btn_prev.hide();
        } else {
            btn_prev.show()
        }
        grid_list.css({"transform": "translate3d(-" + num + "px, 0px, 0px)"})
    });
}
recommend_btn();


function slidershow() {
    var banner_slidershow_items = $(".banner-slideshow .slidershow-item");
    var banner_slidershow_middle_span = $(".banner-slideshow-middle span");

    var total = banner_slidershow_items.length
    var num = 0;

    var go = setInterval(function() {
        num++;
        if (num >= total) {
            num = 0;
        }
        
        banner_slidershow_items.eq(num-1).css({"display": "none"});
        banner_slidershow_items.eq(num).css({"display": "block"});
        banner_slidershow_middle_span.eq(num-1).removeClass("current");
        banner_slidershow_middle_span.eq(num).addClass("current");
    },3000);
}
slidershow();


// $.getJSON("../date/phone3.json", function(date) {
//     var d = date['resultList'];
//     $.each(d, function(i, item) {
//         var str = "https://res.vmallres.com/pimages" + item["photoPath"] + "/428_428_" + item["photoName"]
//         console.log(str);

//     })

// });
