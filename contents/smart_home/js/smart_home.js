function naverClass() {
    var nc = $(".naver-class");
    var nn = $(".naver-nav");
    $(document).hover(function () {

        nn.hide();
        
    })
    $(document).click(function () {

        nn.hide();
        
    })
    nc.hover(function() {

        nn.show();
        
    })

}
naverClass();

$.getJSON("../date/smart_home1.json", function(date) {
    var d = date['resultList'];
    $.each(d, function(i, item) {
        var str = "https://res.vmallres.com/pimages" + item["photoPath"] + "/428_428_" + item["photoName"]
        console.log(str);

    })

});



$.getJSON("../date/smart_home1.json", function(date) {
    var categoryName_value = $("#categoryName");
    var price_range_value = $("#price-range");
    console.log(date['labelList']);
    var categoryName = date['labelList'][0]['categoryName']
    var price_range = date['labelList'][0]['labelContentList'][0]['itemEntryList']
    categoryName_value.text(categoryName);

    $.each(price_range, function(i, item) {
        price_range_value.find("a").eq(i).text(item['value']);
        
    });
});

pages = function(num) {
    var js01 = "../date/smart_home"+ (num) +".json"

    $.getJSON(js01, function(date) {
        var channel_list_ul = $(".channel-list ul");
        if (num >= 1) {
            channel_list_ul.empty();
        }
        $.each(date['resultList'], function(i, item) {
            var promoLabels_span = '';
            $.each(item['promoLabels'],function(x, promo) {
                promoLabels_span += '<span>' + promo + '</span>'
            });
            var displayTags = item['displayTags'] == undefined ? "": item['displayTags']
            var li_str = '<li><div class="pro-panels"><a href="#"><p class="p-img"><img src="' + 'https://res.vmallres.com/pimages/' + item['photoPath'] + '428_428_' + item['photoName'] +'" alt="' + item['name'] + '"></p><p class="p-name" title="' + item['name'] + '">' + item['name'] + '</p><p class="p-price"><b>' + item['price'] + '</b><span>多款可选</span></p><p class="p-label">' + promoLabels_span + '</p><p class="p-comment"><em><span>' + item['rateCount'] + '</span>人评价</em><em><span>' + item['goodRate'] + '</span>%好评</em></p><p class="p-tag"><span class="color01" style="background-color:#' + item['tagBgColor'] + '">' + displayTags + '</span></p></a></div></li>'
            channel_list_ul.append(li_str);
        });
    });
}

var page_numbe = $(".qpages").children();
pages(1)
$.each(page_numbe, function(i, item) {
    $(this).click(function() {
        $(item).attr("pgCurrent")
        pages(i+1);
        
    });
});

var pre = $(".pager .pre");
var next = $(".pager .next");
var pnl = page_numbe.length;
var num = 1;
next.click(function() {
    if (num >= pnl) {
        num = 2
    }
    if (num == pnl-1) {
        $(this).css({"display": "none"})
    }
    pages(++num);

});
pre.click(function() {
    console.log(num);
    if (num <= 0) {
        $(this).css({"display": "none"})
        num = 1
    } else {
        next.css({"display":"block"})
        pages(num--);
    }

});