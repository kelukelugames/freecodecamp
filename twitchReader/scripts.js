
      var app = angular.module('TwitchReader', []);
app.controller('SelectionController', function () {

    $('.menu li').on('click', function () {
        $('.menu li').removeClass('active');
        $(this).addClass('active');
    });
});