/// <reference path="_references.js" />

var Home = Home || {};
Home.Index = function () {

    var selector,

    init = function (options) {
        selector = options.selector;
    },

    home = function () {
        execute(Urls.Home.Home);
    },

    about = function () {
        execute(Urls.Home.About);
    },

    contact = function () {
        execute(Urls.Home.Contact);
    },

    execute = function (url) {

        $.ajax({
            type: "get",
            url: url,
            success: function (data) {
                $(selector).text(data);
            }
        });
    };

    return {
        init: init,
        home: home,
        about: about,
        contact: contact
    }

} ();