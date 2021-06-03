var app = angular.module('app', ['ui.bootstrap']);

function AngularCtrl($scope, $modal) {
    $scope.alloc = function alloc() {
        $scope.largeObject = makeLargeObject();
    };

    $scope.free = function free() {
        $scope.largeObject = null;
    };

    $scope.modal = function modal() {
        $modal.open({
            templateUrl: 'modal',
            controller: 'ModalCtrl'
        }).result.then(function() {
            console.info('close');
        }, function() {
            console.info('dismiss');
        });
    };
}
app.controller('AngularCtrl', AngularCtrl);

function ModalCtrl($scope, $modalInstance) {
    $scope.modalLargeObject = makeLargeObject();

    $scope.close = function close() {
        $modalInstance.close($scope.modalLargeObject);
    };
}
app.controller('ModalCtrl', ModalCtrl);

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