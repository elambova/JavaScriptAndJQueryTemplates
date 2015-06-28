"use strict";
$(document).ready(function () {
    //Example 2:
    $('#text-before-ol').on('click', function () {
        var textInFirstInput = $('#first-input').val();
        $('.first-ol').prepend('<span> ' + textInFirstInput + ' </span>');
    });

    $('#text-after-ol').on('click', function () {
        var textInSecondInput = $('#second-input').val();
        $('.second-ol').append('<span> ' + textInSecondInput + ' </span>');
    });

    //Example 4:
    var $colorPicker = $('#background-color');
    $colorPicker.on('change', function () {
        $(document.body).css('background-color', $colorPicker.val());
    });
});