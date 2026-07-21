var app = angular.module('campus360', []);

app.controller("DashboardController", function ($scope) {

    $scope.collegename = "FISAT";
    $scope.name = "Mahendran DM";
    $scope.city = "Kollam";
    $scope.age = 23;

    console.log("Dashboard Controller is loaded");

    $scope.students = [
        "Mahendran DM",
        "Anandhu",
        "Akhil",
        "Athul"
    ];

    $scope.addStudent = function () {
        $scope.students.push("New Student");
    };

});