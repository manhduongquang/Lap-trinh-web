odoo.define('openacademy.search', function (require) {
    'use strict';
    require('web.dom_ready');

    var $sub2Container = $('.sub2-container');
    var $sub1Container = $('.sub1-container');
    var $setting = $('.setting');
    var $account = $('.account');
    var $category = $('.category');
    var $fiction = $('.fiction');

    $('.btn-filter').off('click').on('click', function (e) {
        e.preventDefault();
        var off = $setting.css('display');
        if (off == 'flex') {
            $setting.css('display', 'none');
        } else $setting.css('display', 'flex');
        $sub2Container.css('display', 'none');
        $sub1Container.css('display', 'block');
    });

    $('.comp').click(function () {
        $setting.css('display', 'none');
        $sub2Container.css('display', 'none');
        $sub2Container.css('display', 'block');
    });

    $('.option .head').click(function () {
        if ($(window).innerWidth() < 1300) {
            var on = $(this).parent().children("ul").css('display');
            if (on == 'none') {
                $(this).parent().children("ul").css('display', 'block');
            } else $(this).parent().children("ul").css('display', 'none');
        }
    });

    $('menu-li').click(function () {
        $(this).css('background', '#0abab5');
    });

    $('a').click(function (event) {
        event.preventDefault()
    });

    $category.click(function () {
        $category.css('background', 'white');
        $category.attr('name', "st");
        $(this).css('background', '#0abab5');
        $(this).attr('name', "act");
    });

    $account.click(function () {
        $account.css('background', 'white');
        $account.attr('name', "st");
        $(this).css('background', '#0abab5');
        $(this).attr('name', "act");
    });

    $.each($('input'), function () {
        if ($(this).is(':checked')) {
            $(this).css('background', '#0abab5');
            $(this).parent().attr("name", "act");
        }
    });

    $('.list-left input').on('click', function () {
        if ($(this).is(':checked')) {
            $(this).css('background', '#0abab5');
            $(this).parent().attr("name", "act");
        } else {
            $(this).css('background', 'white');
            $(this).parent().attr("name", "st");
        }
    });

    //xoa tim kiem, nhung "li" co name=act se them vao "fiction" bang mot "button"
    $(".sub1-container li").click(function () {
        $(".fiction-btn").remove();
        $.each($(".sub1-container li"), function () {
            if ($(this).attr('name') == "act") {
                var btn = $(this).text();
                if ($(this).parent().hasClass("list-category")) {
                    $fiction.append('<button class="btn fiction-btn" name="category">' + "Thực phẩm:" + btn + '<img class="img-remove" src="/openacademy/static/src/image/remove.png"></button>');
                }
                if ($(this).parent().hasClass("list-account")) {
                    $fiction.append('<button class="btn fiction-btn" name="account">' + "Giá:" + btn + '<img class="img-remove" src="/openacademy/static/src/image/remove.png"></button>');
                }
                if ($(this).parent().hasClass("list-country")) {
                    var $country = $(this).find('input').attr("name");
                    $fiction.append('<button class="btn fiction-btn" name="' + $country + '">Xuất xứ:' + btn + '<img class="img-remove" src="/openacademy/static/src/image/remove.png"></button>');
                }
                if ($(this).parent().hasClass("list-origin")) {
                    var $origin = $(this).find('input').attr("name");
                    $fiction.append('<button class="btn fiction-btn" name="' + $origin + '">Nguồn gốc:' + btn + '<img class="img-remove" src="/openacademy/static/src/image/remove.png"></button>');
                }
                if ($(this).parent().hasClass("list-producer")) {
                    var $producer = $(this).find('input').attr("name");
                    $fiction.append('<button class="btn fiction-btn" name="' + $producer + '">Nhà sản xuất:' + btn + '<img class="img-remove" src="/openacademy/static/src/image/remove.png"></button>');
                }
            }
        });
    });

    //remove nhung "button" dc click trong "fiction" va chinh sua "li" trong list
    $fiction.on('click', '.fiction-btn', function () {
        var reLi = $(this).attr("name");
        if (reLi == "category") {
            $.each($('.list-category li'), function () {
                $(this).css('background', 'white');
                $(this).attr('name', "st");
            });
        }
        else if (reLi == "account") {
            $.each($('.list-account li'), function () {
                $(this).css('background', 'white');
                $(this).attr('name', "st");
            });
        }
        else {
            $.each($('.list-left li'), function () {
                if ($(this).find('input').attr('name') == reLi) {
                    $(this).attr('name', 'st');
                    $(this).find('input').prop("checked", false);
                }
            });
        }
        $(this).remove();
    });
});