'use strict';

angular.module('cloudFormationApp')
  .controller('MainCtrl', function ($scope) {

    $scope.dotFormat = "digraph testgraph{ \n \
        \
        \n  \
        A -> B -> C -> D -> E; \n  \
        B -> D; \n  \
            \n \
        {node[shape=box]; \n \
            1 -> 2 -> 3;\n  \
        } \n \
        \n \
        E -> 1;2 -> C; \n \
        {rank=same; 1; A;} \n \
        {rank=same; 3; D;} \n \
    } \
";

    $scope.svg = Viz($scope.dotFormat, "svg");

    $scope.redraw = function() {
       $scope.svg = Viz($scope.dotFormat, "svg");
    };

  });
