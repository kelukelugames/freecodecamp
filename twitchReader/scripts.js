
var app = angular.module('TwitchReader', []);
app.controller('SelectionController', function ($scope) {
	$scope.onlineStreamers = [];
	$scope.offlineStreamers = [];

	var streamers = [
	'freecodecamp',
	'lsv',
	'medrybw'
	];

	var postargs = '?&callback=?';
	var url = 'https://api.twitch.tv/kraken/';

	streamers.forEach(function (streamer) {
		var obj = {};

		$.getJSON(url + 'streams/' + streamer + postargs).success(function (data) {
			var isStreaming = data.stream === null ? false : true;

			if (isStreaming) {
				obj.status = 'fa fa-check on';
				var streamTitle = data.stream.channel.status;
				
				if (streamTitle.length > 36) {
					streamTitle = streamTitle.substring(0, 33);
					streamTitle += '...';
				}
				obj.title = streamTitle;
			} else {
				obj.status = 'fa fa-exclamation off';
				data.title = '';
			}

			obj.username = streamer;
			
			$.getJSON(url + 'users/' + streamer + postargs).success(function (data) {
				obj.name = data.display_name;
				obj.logo = data.logo;
			
				if (isStreaming) {
					$scope.onlineStreamers.push(obj);
				} else {
					$scope.offlineStreamers.push(obj);
				}
				$scope.profile = $scope.onlineStreamers.concat($scope.offlineStreamers);
				$scope.$apply();
			});
		});
	});

	$('.menu li').on('click', function () {
        if ($(this).data('display') === 'allStreamers') {
        	$scope.profile = $scope.onlineStreamers.concat($scope.offlineStreamers);
        } else if ($(this).data('display') === 'onlineStreamers') {
            $scope.profile = $scope.onlineStreamers;
        } else {
            $scope.profile = $scope.offlineStreamers;
        }
        $scope.$apply();
		$('.menu li').removeClass('active');
		$(this).addClass('active');
	});
});