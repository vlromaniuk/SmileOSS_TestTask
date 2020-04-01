define([
    'jquery'
], function($) {
    'use strict';
    return function(config) {

        function Expands() {
            if (!config.parentElem) return false;

            $(config.expandBtnHide).hide();

            $(config.expandBtnOpen).click(function () {
                $(config.expandContainer).addClass('active');
                $(config.expandBtnHide).show();
                $(config.expandBtnOpen).hide();

            });

            $(config.expandBtnHide).click(function () {
                $(config.expandContainer).removeClass('active');
                $(config.expandBtnHide).hide();
                $(config.expandBtnOpen).show();
            });
        }

        Expands();
    }
});
