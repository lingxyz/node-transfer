define(["app","cs!./header"],function(t){t.angular.directive("heade",function(){return{restrict:"E",replace:!0,scope:{lefttext:"=headLefttext",leftfn:"=headLeftfn",title:"=headTitle",righttext:"=headRighttext",rightfn:"=headRightfn",scroll:"=headScroll"},template:'<header class="bar bar-nav" ng-show="headerForm"><div class="bg {{scroll?\'scroll\':\'\'}}"></div><span class="icon {{lefttext?\'\':\'icon-left\'}} pull-left" ng-click="leftfnn()">{{lefttext}}</span><a class="icon pull-right" href="javascript:void(0);" ng-click="rightfn()">{{righttext}}</a><h1 class="title">{{title}}</h1></header>',link:function($scope){if($scope.headerForm="app"!=$.getParam("from"),$scope.leftfnn=function(){$scope.leftfn?$scope.leftfn():history.go(-1)},$scope.scroll){var t=0;$(".content").scroll(function(){t=$(this).scrollTop()/176,t>1&&(t=1),$("header .scroll").css("opacity",t)})}}}})});