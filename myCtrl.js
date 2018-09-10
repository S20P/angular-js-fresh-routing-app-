app.run(function($rootScope) {
    $rootScope.color = "yellow";
});
app.controller("myCtrl", function($scope) {
    $scope.firstname = "SATISH";
    $scope.lastname = "PARMAR";
    $scope.color = "Black";
});

app.controller("myCtrl_second", function($scope) {
    $scope.phone = "0000-0000-0000";
    $scope.color = "green";
    $scope.change_name = "click to change value";
    $scope.changeName = function() {
        $scope.change_name = "value is changed";
    }
});
app.directive("mydir", function() {
    return {
        template: "<h1>Made by a directive!</h1>"
    }
});



//  anguar js filter example------------------------------------------


app.controller("filterctrl", function($scope) {
    $scope.uname = "satish";
    $scope.lname = "SATISH";

    $scope.list = [
        { id: "1", name: "Z" },
        { id: "2", name: "Z" },
        { id: "3", name: "C" },
        { id: "4", name: "A" },
        { id: "5", name: "K" },
        { id: "6", name: "S" },
        { id: "7", name: "N" },
        { id: "8", name: "X" },
        { id: "9", name: "B" },
        { id: "10", name: "E" },
        { id: "11", name: "W" }
    ];
    $scope.name = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];

});

//  anguar js service example------------------------------------------

app.controller("service_like", function($scope, $location, $http, $timeout, $interval, reverse) {
    $scope.title = "service section";
    $scope.myurl = $location.absUrl();

    // Http service is use get,post to API data
    $http.get("https://fakerestapi.azurewebsites.net/api/Books").then(function(res) {
        console.log("res", res.data);
        $scope.books = res.data;
    });

    $scope.myHeader = "Hello World!";
    $timeout(function() {
        $scope.myHeader = "How are you today!";
    }, 2000); //change header after 2 second

    $scope.theTime = new Date().toLocaleTimeString();

    $interval(function() {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);

    $scope.strrev = reverse.strrev("SATISH");

});

app.service('reverse', function() {
    this.strrev = function(str) {
        return str.split("").reverse().join("");
    }
});


app.controller("homeCtrl", function($scope) {
    $scope.slogen = "This is home page solgen";
});
app.controller("aboutCtrl", function($scope) {
    $scope.slogen = "This is about page solgen";
});
app.controller("contactCtrl", function($scope) {
    $scope.slogen = "This is contact page solgen";

    $scope.contactlist = ["a@a.com", "b@b.com", "c@c.com"];
    $scope.addContact = function() {
        $scope.contactlist.push($scope.addme);
    }
    $scope.removeContact = function(x) {
        $scope.contactlist.splice(x, 1);
    }
});