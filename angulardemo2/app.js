var myApp = angular.module("myFirstApp", [])

myApp.controller("MyFirstController", function($scope) {

  $scope.op1 = 0
  $scope.op2 = 0

$scope.sum = function(){
  var op1 = $scope.op1
  var op2 = $scope.op2

  return (op1*op1)+(op2*op2)
}
})

myApp.controller("MySecondController", function($scope){
var students =  ['Carles', 'Jonas', 'Bijay', 'Josep', 'Xavier', 'Ignasi', 'Ernesto', 'Stivali', 'Fran', 'Ezequiel', 'Alejandro', 'Oscar']

replaced = students.map(function(value){
  return value.replace(/[aeiou]/g,'*')
})

$scope.students = replaced
})

// List the objects. order by type. filter by name.


myApp.controller("studentsFilter", function($scope){
$scope.query = ''
var students =  [
    {
        "name": "Stívali Serna",
        "mail": "stivaliserna08@gmail.com",
        "github": "https://github.com/stivaliserna"
    },
    {
        "name": "Xavier Meroño",
        "mail": "x.merono@gmail.com",
        "github": "https://github.com/xmero"
    },
    {
        "name": "Bijay Timilsina",
        "mail": "bjtimi.007@hotmail.com",
        "github": "https://github.com/bijay007"
    },
    {
        "name": "Ernesto Parra",
        "mail": "ernesto-parra@hotmail.com",
        "github": "https://github.com/ERPG"
    },
    {
        "name": "Francisco Lopez",
        "mail": "frans.lopez.m@gmail.com",
        "github": "https://github.com/FransLopez"
    },
    {
        "name": "Ignasi Amargos",
        "mail": "amargos.ignasi@gmail.com",
        "github": "https://github.com/IggyA/js-exercises"
    },
    {
        "name": "Jonas Rodon",
        "mail": "jonasrodon@gmail.com",
        "github": "https://github.com/JonasRodon"
    },
    {
        "name": "Josep Otal",
        "mail": "j.otal.pares@gmail.com",
        "github": "https://github.com/josepotal"
    },
    {
        "name": "Oscar Viciana",
        "mail": "vicfer.oscar@gmail.com",
        "github": "https://github.com/oviciana"
    },
    {
        "name": "Alejandro Vazquez",
        "mail": "alejovp@gmail.com",
        "github": "https://github.com/alejovp"
    },
    {
        "name": "Carles Far",
        "mail": "litulandio@gmail.com",
        "github": "https://github.com/LITULANDIO"
    },
    {
        "name": "Ezequiel Cucchiararo",
        "mail": "ezequiel.cucchiararo@gmail.com",
        "github": "https://github.com/EzequielGomezCucchiararo"
    }
]

$scope.students = students
})