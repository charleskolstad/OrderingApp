var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http) {
    //debugger;
    $scope.GetAllData = function () {
        $http({
            method: "get",
            url: "http://202test.chuckcreates.com/admin/GetAllUserTypes"
        }).then(function (response) {
            $scope.userTypes = response.data;
        }, function () {
            alert("Error");
        });
    };

    $scope.DeleteType = function (userType) {

        $http({
            method: "post",
            url: "http://202test.chuckcreates.com/admin/DeleteUserType",//http://localhost:60530/Admin/
            datatype: "json",
            data: JSON.stringify(userType)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllData();
        });
    };

    $scope.InsertData = function () {
        var action = document.getElementById("btnSaveUserType").getAttribute('value');
        if (action == 'Submit') {
            $scope.UserType = {};
            $scope.UserType.TypeDescription = $scope.TypeDescription;
            $scope.UserType.TypeName = $scope.TypeName;

            $http({
                method: "post",
                url: "http://202test.chuckcreates.com/admin/InsertUserType",
                datatype: "json",
                data: JSON.stringify($scope.UserType)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData();
                $scope.TypeDescription = "";
                $scope.TypeName = "";
                document.getElementById("btnCancelUserType").click();
            })
        } else {
            $scope.UserType = {};
            $scope.UserType.TypeDescription = $scope.TypeDescription;
            $scope.UserType.TypeName = $scope.TypeName;
            $scope.UserType.UserTypesID = document.getElementById("TypeID_").value;

            $http({
                method: "post",
                url: "http://202test.chuckcreates.com/admin/UpdateUserType",
                datatype: "json",
                data: JSON.stringify($scope.UserType)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData();
                $scope.TypeDescription = "";
                $scope.TypeName = "";
                document.getElementById("btnCancelUserType").click();
            })
        }
    };

    $scope.UpdateType = function (userType) {
        document.getElementById("TypeID_").value = userType.UserTypesID;
        $scope.TypeName = userType.TypeName;
        $scope.TypeDescription = userType.TypeDescription;

        document.getElementById("btnSaveUserType").value = "Update User Type";
        document.getElementById("TypeID_").click();
    };
});

app.controller("myUsers", function ($scope, $http) {
    $scope.GetAllUsers = function () {
        $http({
            method: "get",
            url: "http://202test.chuckcreates.com/admin/GetAllUsers"
        }).then(function (response) {
            $scope.Users = response.data;
        }, function () {
            alert("Error");
        });
    };

    $scope.GetUsersTypes = function (name) {
        $http({
            method: "get",
            url: "http://202test.chuckcreates.com/admin/GetUsersTypes/?userName=" + name
        }).then(function (response) {
            $scope.UserTypes = response.data;
            $scope.UserName = response.data[0]['UserName'];
            $scope.Email = response.data[0]['Email'];
        }, function () {
            alert("Error");
        });
    };

    $scope.SaveUserData = function () {
        $http({
            method: "post",
            url: "http://202test.chuckcreates.com/admin/InsertUser/?username=" + $scope.NewUserName + "&email=" + $scope.NewUserEmail,
            datatype: "json",
            data: JSON.stringify($scope.User)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllUsers();
            $scope.NewUserName = "";
            $scope.NewUserEmail = "";
            document.getElementById("btnCancelUser").click();
        })
    };

    $scope.DeleteUserData = function (name) {
        $http({
            method: "post",
            url: "http://202test.chuckcreates.com/admin/DeleteUser?userName=" + name
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllUsers();
        });
    };

    $scope.UpdateUserData = function (updateTypes) {
        $scope.UserType = {};
        $scope.UserType = updateTypes;

        var items = $scope.UserTypes;
        for (var i = 0; i < items.length; i++) {
            $scope.UserType[i].Email = $scope.Email;
        }

        //$scope.UserType.TypeDescription = $scope.TypeDescription;
        //$scope.UserType.TypeName = $scope.TypeName;
        //$scope.UserType.UserTypesID = document.getElementById("TypeID_").value;

        $http({
            method: "post",
            url: "http://202test.chuckcreates.com/admin/UpdateUser",
            datatype: "json",
            data: JSON.stringify($scope.UserType)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllData();
            $scope.TypeDescription = "";
            $scope.TypeName = "";
            //document.getElementById("btnCancelUserType").click();
        })
    };

    $scope.checked = function (i, t) {
        if(t == true)
            $scope.UserTypes[i].Active = false;
        else
            $scope.UserTypes[i].Active = true;
    }
});

app.filter("mydate", function () {
    var re = /\/Date\(([0-9]*)\)\//;

    return function (x) {
        var m = x.match(re);
        if (m)
            return new Date(parseInt(m[1]));
        else
            return null;
    };
});
