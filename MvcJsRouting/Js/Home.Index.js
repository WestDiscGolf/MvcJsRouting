/// <reference path="_references.js" />

var index = function () {

    var selector;

    this.Init = function (options) {
        selector = options.selector;
    };

    this.Home = function () {
        execute(Urls.Home.Home);
    };

    this.About = function () {
        execute(Urls.Home.About);
    };

    this.Contact = function () {
        execute(Urls.Home.Contact);
    };

    var execute = function (url) {

        $.ajax({
            type: "get",
            url: url,
            success: function (data) {
                $(selector).text(data);
            }
        });
    };
};

var Home = Home || {};
Home.Index = new index;