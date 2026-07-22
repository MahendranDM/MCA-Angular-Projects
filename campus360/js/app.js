var app = angular.module('campus360', []);

app.controller('dashboardController', function ($scope) {

    $scope.collegeName = "FiSaT";
    $scope.totalStudents = 2500;
    $scope.totalFaculty = 94;

    $scope.showStudents = false;

    $scope.students = [
        "Mahendran DM",
        "Anandhu",
        "Akhil",
        "Athul"
    ];

$scope.fees =25500;
$scope.today = new Date();


    $scope.addStudent = function () {
        $scope.totalStudents++;
    };

});