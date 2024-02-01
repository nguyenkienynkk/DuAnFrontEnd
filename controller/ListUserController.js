window.ListUserController = function ($scope, $http) {
    $scope.title = "Danh sách người của chuyến bay sắp khởi hành vào ngày 31/1/2024";
    const apiuser = 'http://localhost:3000/lienhe';
   function getData() {
    $http.get(apiuser).then(function(response){
        if(response.status == 200){
            console.log(response.data);
            $scope.listuser = response.data;
        }
    })
    
}
    getData();
    // $scope.showDetail = function (student) {
    //     $location.path('/detail/' + student.id);
    // };
     //delete
     $scope.deleteUser = function(deleteID){
        if(deleteID){
            let confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
            if(confirm){
                $http.delete(
                   `${apiuser}/${deleteID}`
                ).then(function(response){
                    if(response.status ==200){
                        alert("Xóa thành công");
                    }else{
                    alert('Xóa thất bại');
                    }
                })
            }
        }

    }
    // $scope.deleteUser = function(deleteId){
    //     if(deleteId){
    //         let confirm = window.confirm("Bạn có muốn xóa không");
    //         if(confirm){
    //             $http.delete(`${apiuser}/${deleteId}`).then(response => {
    //                 if(response.status ==200){
    //                     alert("Xóa thành công")
    //                 }else{
    //                     alert("Xóa thất bại")
    //                 }
    //             })
    //         }
    //     }
    // }
};
