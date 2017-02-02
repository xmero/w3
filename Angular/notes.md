#ANGULAR

[Official Juanma notes](https://gist.github.com/juanmaguitar/c538d6cb108d27a37c73)

Google framework
Two way binding pattern
MVVM 

We need to load in our html code same way we did with jquery.
```<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>```

--- 

Also need to tell html to run our angular app with: 

```ng-app``` inside the html tag. *WON'T WORK WITHOUT IT.*

Angular is based in modules.
1.First step is to creat the biggest module, usually the mainApp next to the ng-app ```ng-app="mainApp"``` followed by the definition of the module in app.js file (linked to main html) ```angular.module("mainApp", []);```

2.Then we can add modules to other modules. Thats how angular works.
The modules that are used to controll the html code are named ***controllers*** and should be contained in a controllersContainer module such as ```angular.module("myControllersContainer",[])```

3.Then we can link both modules: ```angular.module("mainApp",['myControllersContainer'])```

```$scope``` is used as a shared object (with properties) between the controller and the view. They both have acces of read/write and it is automatically updated. This way you can update variables in your html through the .js controller function.

[Find all the ANGULAR DIRECTIVES](https://docs.angularjs.org/api/ng/directive)

Basic commands: 

+ ng-repeat --- can apply filter/orderBy in it
+ ng-hide
+ ng-show
+ ng-model

there are two kind of services: 

+ .service 
+ .factory : returns an object

To get the API json we use the method ```$http.get(url)```