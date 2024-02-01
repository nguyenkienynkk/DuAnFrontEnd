window.EditUserController = function ($scope, $http, $routeParams, $location) {
  $scope.title = "Xin chào đây là trang edit";
  var userId = $routeParams.id;
  const api = "http://localhost:3000/lienhe/" + userId;

  function getData() {
    $http.get(api).then((response) => {
      if (response.status == 200) {
        $scope.user = response.data;
      }
    });
  }

  getData();

  $scope.kiemTra = {
    ten: false,
    email: false,
    sodienthoai: false,
    ghichu: false,
    formError: false,
    emailMessage: "",
    sodienthoaiMessage: "",
  };

  // Validate email
  $scope.validateEmail = function () {
    $scope.kiemTra.emailMessage = "";
    if (!$scope.user.email) {
      $scope.kiemTra.email = true;
      $scope.kiemTra.emailMessage = "Email không được để trống.";
    } else if (!isValidEmail($scope.user.email)) {
      $scope.kiemTra.email = true;
      $scope.kiemTra.emailMessage = "Vui lòng nhập một địa chỉ email hợp lệ.";
    } else {
      $scope.kiemTra.email = false;
    }
  };

  // Validate số điện thoại
  $scope.validatePhoneNumber = function () {
    $scope.kiemTra.sodienthoaiMessage = "";
    if (!$scope.user.sodienthoai) {
      $scope.kiemTra.sodienthoai = true;
      $scope.kiemTra.sodienthoaiMessage = "Số điện thoại không được để trống.";
    } else if (!isValidPhoneNumber($scope.user.sodienthoai)) {
      $scope.kiemTra.sodienthoai = true;
      $scope.kiemTra.sodienthoaiMessage =
        "Vui lòng nhập một số điện thoại hợp lệ.";
    } else {
      $scope.kiemTra.sodienthoai = false;
    }
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

  $scope.editUser = function () {
    // Validate trước khi thực hiện edit
    $scope.validateEmail();
    $scope.validatePhoneNumber();

    if (
      !$scope.user.ten ||
      !$scope.user.sodienthoai ||
      !$scope.user.ghichu ||
      $scope.kiemTra.email ||
      $scope.kiemTra.sodienthoai
    ) {
      $scope.kiemTra.formError = true;
      return;
    }

    let newUser = {
      ten: $scope.user.ten,
      email: $scope.user.email,
      sodienthoai: $scope.user.sodienthoai,
      ghichu: $scope.user.ghichu,
    };

    $http.put(api, newUser).then((response) => {
      if (response.status == 200) {
        $location.path("list-user");
        $scope.showSwall();
      }
    });
  };
  $scope.showSwall = function () {
    Swal.fire({
      title: "Chúc mừng!",
      text: "Bạn đã thêm dữ liệu thành công!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
};
