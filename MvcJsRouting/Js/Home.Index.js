/// <reference path="_references.js" />

var Home = Home || {};
Home.Index = function () {

    var selector, urls,

    init = function (options) {
        selector = options.selector;
        urls = options.urls;
    },

    home = function () {
        execute(urls.home);
    },

    about = function () {
        execute(urls.about);
    },

    contact = function () {
        execute(urls.contact);
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