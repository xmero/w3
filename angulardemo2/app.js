var myApp = angular.module("myFirstApp", [])

myApp.controller("MyFirstController", function($scope) {

    $scope.op1 = 0
    $scope.op2 = 0

    $scope.sum = function() {
        var op1 = $scope.op1
        var op2 = $scope.op2

        return (op1 * op1) + (op2 * op2)
    }
})

myApp.controller("MySecondController", function($scope) {
    var students = ['Carles', 'Jonas', 'Bijay', 'Josep', 'Xavier', 'Ignasi', 'Ernesto', 'Stivali', 'Fran', 'Ezequiel', 'Alejandro', 'Oscar']
        // replaced = students.map(function(value){
        //   return value.replace(/[aeiou]/g,'*')
        // })
        // $scope.students = replaced

    $scope.students = students
})

myApp.controller("studentManager", function($scope) {

function insertStudent(name){
     $scope.students.push(name)
}
})

// List the objects. order by type. filter by name.
