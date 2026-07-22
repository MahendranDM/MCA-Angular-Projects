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

$scope.departments = ["CSE", "IMCA", "MCA", "Mech", "Civil", "EEE", "MBA"];
$scope.selectDepartment = " ";


    $scope.addStudent = function () {
        $scope.totalStudents++;
    };

});