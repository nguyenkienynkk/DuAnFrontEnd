window.AddUserController = function ($scope, $http, $location) {
  var api = "http://localhost:3000/lienhe";

  $scope.onCreate = function () {
    $scope.kiemTra = {
      ten: false,
      email: false,
      sodienthoai: false,
      ghichu: false,
      formError: false,
      emailMessage: "",
      sodienthoaiMessage: "",
    };

    //validate gmail
    if (!$scope.inputValue.email) {
      $scope.kiemTra.email = true;
      $scope.kiemTra.emailMessage = "Email không được để trống.";
    } else if (!isValidEmail($scope.inputValue.email)) {
      $scope.kiemTra.email = true;
      $scope.kiemTra.emailMessage = "Please enter a valid email address.";
    }

    //validate sodienthoai
    if (!$scope.inputValue.sodienthoai) {
      $scope.kiemTra.sodienthoai = true;
      $scope.kiemTra.sodienthoaiMessage = "Số điện thoại không được để trống.";
    } else if (!isValidPhoneNumber($scope.inputValue.sodienthoai)) {
      $scope.kiemTra.sodienthoai = true;
      $scope.kiemTra.sodienthoaiMessage = "Please enter a valid phone number.";
    }

    if (!$scope.inputValue.ten) {
      $scope.kiemTra.ten = true;
    }

    if (!$scope.inputValue.sodienthoai) {
      $scope.kiemTra.sodienthoai = true;
    }
    if (!$scope.inputValue.ghichu) {
      $scope.kiemTra.ghichu = true;
    }
    if (
      $scope.kiemTra.ten ||
      $scope.kiemTra.email ||
      $scope.kiemTra.sodienthoai ||
      $scope.kiemTra.ghichu
    ) {
      $scope.kiemTra.formError = true;
      return;
    }
    var newItem = {
      ten: $scope.inputValue.ten,
      email: $scope.inputValue.email,
      sodienthoai: $scope.inputValue.sodienthoai,
      ghichu: $scope.inputValue.ghichu,
    };
    function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
   
    function isValidPhoneNumber(phoneNumber) {
      var phoneRegex =
        /^(0[2-9]|1[2-9]|2[0-8]|3[2-9]|5[6-9]|6[2-9]|7[0-9]|8[1-9]|9[0-6]|9[8-9])[0-9]{8}$/;
      return phoneRegex.test(phoneNumber);
    }
   
    
    $http.post(api, newItem).then((response) => {
      $location.path("/list-user");
      $scope.showSwal();
    });
  };
  $scope.showSwal = function() {
    Swal.fire({
        title: 'Chúc mừng!',
        text: 'Bạn đã thêm dữ liệu thành công!',
        icon: 'success',
        confirmButtonText: 'OK'
    })
};
};
