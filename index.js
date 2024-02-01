
var imgs = [
    "image/img1.jpg",
    "image/img2.jpg",
    "image/img3.jpg"
    ]
    var num = 0;
    function Next(){
        var slider = document.getElementById('slider');
        num ++;
        if(num >= imgs.length){
            num = 0
        }
        // Thiết lập thuộc tính src của ảnh bằng ảnh mới
        slider.src = imgs[num];
    }
    function Prev(){
        // lấy phần tử ảnh để hiển thị ảnh
        var slider = document.getElementById('slider');
        num --;
        if(num < 0){
            num = imgs.length - 1;
        }
        slider.src = imgs[num];
    }
    setInterval(Next,2000)

    // 2
    
    var imgs2 = [
        "image/img2.jpg",
        "image/img3.jpg",
        "image/img4.jpg"
        ]
        var num2 = 0;
        function Next2(){
            var slider2 = document.getElementById('slider2');
            num2 ++;
            if(num2 >= imgs2.length){
                num2 = 0
            }
            // Thiết lập thuộc tính src của ảnh bằng ảnh mới
            slider2.src = imgs2[num2];
        }
        function Prev2(){
            // lấy phần tử ảnh để hiển thị ảnh
            var slider2 = document.getElementById('slider2');
            num2 --;
            if(num2 < 0){
                num2 = imgs2.length - 1;
            }
            slider2.src = imgs2[num2];
        }
        setInterval(Next2,2000)
        // 3
   



