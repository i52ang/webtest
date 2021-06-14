var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'material']);

function config($stateProvider) {
    $stateProvider.state('home', {
        url : '/home',
        templateUrl : 'angular/views/home.html',
        controller: 'HomeCtrl'
    });
    $stateProvider.state('test', {
        url : '/test',
        templateUrl : 'angular/views/test.html',
        controller: 'TestCtrl'
    });
}
app.config(config);

function AngularCtrl($scope, $modal) {
    $scope.alloc = function alloc() {
        $scope.largeObject = makeLargeObject();
    };

    $scope.free = function free() {
        $scope.largeObject = null;
    };

    $scope.modal = function modal() {
        $modal.open({
            templateUrl: 'angular/views/modal.html',
            controller: 'ModalCtrl'
        }).result.then(function() {
            console.info('close');
        }, function() {
            console.info('dismiss');
        });
    };

    $scope.menus = [{
        id: 1,
        state: 'home'
    }, {
        id: 2,
        state: 'test'
    }];
}
app.controller('AngularCtrl', AngularCtrl);

function ModalCtrl($scope, $modalInstance) {
    $scope.modalLargeObject = makeLargeObject();

    $scope.close = function close() {
        $modalInstance.close($scope.modalLargeObject);
    };
}
app.controller('ModalCtrl', ModalCtrl);

function HomeCtrl($scope) {
}
app.controller('HomeCtrl', HomeCtrl);

function TestCtrl($scope) {
}
app.controller('TestCtrl', TestCtrl);

function LengthDirective() {
    return {
        template: '<div>{{ obj.length }}</div>',
        replace: true,
        scope: {
            obj: '='
        },
        link: function link($scope) {
            $scope.$on('$destroy', function destroy() {
                console.info('destroy');
                // delete $scope.obj;
            });
        }
    };
}
app.directive('lengthDirective', LengthDirective);

function makeLargeObject() {
    var largeObject = [];
    for (var i = 0; i < 500000; i++) {
        largeObject.push(10000000 * i + '?');
    }
    return largeObject;
}