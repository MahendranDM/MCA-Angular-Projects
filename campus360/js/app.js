var app = angular.module('campus360', []);

app.controller('dashboardController', function ($scope) {

    $scope.collegeName = "Campus360";
    $scope.totalStudents = 2500;
    $scope.totalFaculty = 94;

    $scope.showStudents = false;

    $scope.students = [
        "Mahendran DM",
        "Anandhu",
        "Akhil",
        "Athul"
    ];

    $scope.addStudent = function () {
        $scope.totalStudents++;
    };

});