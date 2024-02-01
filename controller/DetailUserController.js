window.DetailUserController = function ($scope, $http, $routeParams) {
    $scope.title = "Hiển thị thông tin chi tiết khách hàng";
    const userId = $routeParams.id;
    const api = 'http://localhost:3000/lienhe/' + userId;
    function getData() {
        $http.get(api).then(function (response) {
            if (response.status == 200) {
                $scope.user = response.data;
            }
        });
    }
    getData();
   
 };
 