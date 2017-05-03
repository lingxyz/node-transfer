/**提现记录    控制器 依赖JS CSS
 * @param   {string} 'app'                  app.js
 * @param   {string} 'angular'              angular.min.js
 * @param   {string} 'cs!css/style'         style.css
 */
define(['app', 'angular', 'cs!css/style'], function(app, angular) {

    /*定义 withdrawalsRecordCtrl 控制器*/
    app.angular.controller('withdrawalsRecordCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$http', function($rootScope, $scope, $state, $stateParams, $http) {
        /*设置标题*/
        app.myApp.settitle($rootScope, '提现记录');

        /*跳转链接*/
        $scope.linkUrl = function($event){
            location.href = $event.target.getAttribute("href");
        };
    }]);
});
