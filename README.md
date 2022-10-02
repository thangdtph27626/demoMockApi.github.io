<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Hướng dẫn về Mock API</h2>
</p>


Mock API trên thực tế rất có giá trị, 
đặc biệt là trong các dự án nhanh, nơi bạn làm việc 
chặt chẽ với khách hàng hoặc trong các dự án không có đầu,
 nơi API REST là giao diện giao tiếp chính giữa 
giao diện người dùng và phụ trợ. Mô phỏng API tuyệt vời có thể 
giúp kiểm tra dễ dàng hơn và sớm phát hiện ra các vấn đề về giao 
diện người dùng và UX trong một dự án. 

<div align="center">
 <table >
  <theader>
  <th>
   Nội Dung 
   </th>
   </theader>
  <tbody>
  <td>
   <p>1: Mock API  là gì?</p>
   <p>2: Tại sao lại sử dụng mockAPI?</p>
   <p>: curd với mockapi & AJAX</p>
   </td>
   </tbody>
   </table>
</div>

# Mock API là gì?

- MockAPI là một công cụ đơn giản cho phép bạn dễ dàng mô phỏng các API, tạo dữ liệu tùy chỉnh và định dạng trước các hoạt động trên đó bằng giao diện RESTful. MockAPI được sử dụng như một công cụ tạo mẫu / thử nghiệm / học tập.

# Tại sao lại sử dụng 

> Các API giả sẽ giúp bạn có các phụ thuộc bên ngoài \
> giúp cho khách hàng lập kế hoạc và xác nhận các thực thi thử ngiệm\
> cho các nhà phát triển thử nghiệm đơn vị và xác định các bước ban đầu\
> bạn có thể yêu cầu một API có sẵn để thử nghiệm hoặc trình diễn của người tiêu dùng trước khi bạn cam kết phát triển nó

# CURD với mockapi & AJAX 

## demo thao tác với bảng products 

![image](https://user-images.githubusercontent.com/109157942/193434653-a2ed05d2-85af-4011-b5f0-9d35ea1d916e.png)

> các API thao tác 

 <table border="1px">
                    <thead>
                        <th>method</th>
                        <th>url</th>
                        <th>code</th>
                        <th>respone</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GET</td>
                            <td>/products</td>
                            <td>200</td>
                            <td>List</td>
                        </tr>
                        <tr>
                            <td>GET</td>
                            <td>/products/:id</td>
                            <td>200</td>
                            <td>products</td>
                        </tr>
                        <tr>
                            <td>POST</td>
                            <td>/products</td>
                            <td>200</td>
                            <td>products</td>
                        </tr>
                        <tr>
                            <td>PUT</td>
                            <td>/products/:id</td>
                            <td>200</td>
                            <td>products</td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td>/products/:id</td>
                            <td>200</td>
                            <td>products</td>
                        </tr>
          </tbody>
</table>
                
     
> chú thích về ajax 

```

// $.ajax({
//     type: Một loại yêu cầu http, ví dụ như POST, PUT và GET. Mặc định là GET,
//     contentType: Chuỗi chứa một loại nội dung khi gửi nội dung MIME tới máy chủ.Default là "application / x-www-form-urlencoded; charset = UTF-8,
//     url: Một chuỗi chứa URL mà yêu cầu được gửi đến,
//     data: Một dữ liệu được gửi đến máy chủ. Nó có thể là đối tượng JSON, chuỗi hoặc mảng,
//     dataType: Loại dữ liệu mà bạn đang mong đợi trả lại từ máy chủ,
//     success: function (responseData) { // Một hàm gọi lại sẽ được thực thi khi yêu cầu Ajax thành công
//     // responseData là đối tượng trả về chứa tất cả các trường 
//          window.open(SinhVienView, '_self');   
// //windown.open: mở ra một cửa sổ trình duyệt mới hoặc một tab mới, tùy thuộc vào cài đặt trình duyệt của bạn và các giá trị tham số
// // _self: URL thay thế trang hiện tại
//          $("#demo").modal("hide"); 
// // tìm thẻ có id là demo và thực hiện ẩn thẻ
//     },
//     error: function (e) {  // Một hàm gọi lại được thực thi khi yêu cầu không thành công.
//         console.log("ERROR : ", e);
//     }
// });

```


> hiển thị thông tin sản phẩm lên table 


1 index.html

```md

<table id="custom-table"
                       class="table table-bordered m-table d-sm-table m-table--head-bg-primary">
                    <thead>
                    <tr>
                        <td>mã </td>
                        <td>tên</td>
                        <td>số lượng</td>
                        <td>giá nhập </td>
                        <td>giá bán</td>
                        <td>miêu tả</td>
                        <td>hành động</td>
                    </tr>
                    </thead>
                    <tbody id="dataProduct">
                    
                    </tbody>
                </table>
                
```

2 main.js

```md

// "https://63379dcf132b46ee0be3304d.mockapi.io/api/products" là đườg dẫn api của project demo và thực hiện thao tác trên bảng products
let productAPI = "https://63379dcf132b46ee0be3304d.mockapi.io/api/products"

// hàm lấy thông tin phản hồi và hiển thị thông tin của products
function loadData(){
        $.ajax({
            type:"GET",
            contentType: "application/json",
            url: productAPI,
            success: function(reponData){
            // responseData là đối tượng trả về chứa tất cả các trường 
                $("#dataProduct").html(reponData.map(function(item){
                    return `
                    <tr>
                            <td>${item.id}</td>
                            <td>${item.ten}</td>
                            <td>${item.so_luong}</td>
                            <td>${item.gia_nhap}</td>
                            <td>${item.gia_ban}</td>
                            <td>${item.mieu_ta}</td>
                            <td>
                            <button class="btn btn-primary"
                            onclick=update(${item.id})>update</button>
                            <button class="btn btn-primary"
                            onclick=deleteProduct(${item.id})>delete</button>
                            </td>
                        </tr>
                    `
                }))
            },
            error: function(e){
                console.log(e)
            }


        })
}

```

> thêm products

1 index.html

```
                <!-- begin thêm mới product-->
                <div class="m-portlet__body">
                    <div class="row">
                        <div class="col-6 d-inline"
                        >
                            <button
                                    data-toggle="modal"
                                    data-target="#modal_create"
                                    class="col-12 col-sm-8 col-md-4 btn btn-success">
                                Thêm product
                            </button>
                            <div class="modal fade "
                                 id="modal_create"
                                 tabindex="-1"
                                 aria-labelledby="exampleModalLabel"
                                 aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <form id="form_create_product">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Thêm product</h5>
                                                <button type="button" class="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <label class="col-form-label">Tên sản phẩm</label>
                                                    <input
                                                            type="text"
                                                            class="form-control"
                                                            id="ten">
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-form-label">số lượng</label>
                                                    <input
                                                            type="text"
                                                            class="form-control"
                                                            id="soLuong">
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-form-label">giá nhập</label>
                                                    <input
                                                            type="text"
                                                            class="form-control"
                                                            id="giaNhap">
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-form-label">giá bán</label>
                                                    <input
                                                            type="text"
                                                            class="form-control"
                                                            id="giaBan">
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-form-label">mô tả</label>
                                                                <textarea id="my-textarea" class="form-control" name="" rows="3" id="moTa"></textarea>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                        data-dismiss="modal">Hủy
                                                </button>
                                                <button type="submit" class="btn btn-primary">Thêm mới
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end Thêm Mới product-->
                
```

2 main.js


```

$("#form_create_product").submit(function(event){
    event.preventDefault()
    var newProduct = {}
    newProduct["ten"] = $("#ten").val()
    newProduct["so_luong"] = $("#soLuong").val()
    newProduct["gia_nhap"] = $("#giaNhap").val()
    newProduct["gia_ban"] = $("#giaBan").val()
    newProduct["mieu_ta"] = $("#moTa").val()

// thực hiện load data của product lên server 
    $.ajax({
        type:"POST",
        contentType: "application/json",
        url: productAPI,
        data: JSON.stringify(newProduct),
        success: function(){
            alert("thanh cong")
            window.location.reload(false)
        },
        error: function(e){
            console.log(e)
        }
    })

})

```

> update sinh viên 

1 index.html 

```

<!-- begin update thông tin product -->
                <div
                        class="modal fade"
                        tabindex="-1"
                        id="modal_update_product"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-lg"
                         role="document">
                        <div class="modal-content">
                            <form id="form_product_update">
                                <div class="modal-header">
                                    <h5 class="modal-title">Cập
                                        nhật sản phẩm</h5>
                                    <button type="button" class="close"
                                            data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <span id="idProduct" style="color:red;"></span>
    
                                    <div class="form-group">
                                        <label class="col-form-label">Tên sản phẩm</label>
                                        <input
                                                type="text"
                                                class="form-control"
                                                id="tenUpdate">
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label">số lượng</label>
                                        <input
                                                type="text"
                                                class="form-control"
                                                id="soLuongUpdate">
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label">giá nhập</label>
                                        <input
                                                type="text"
                                                class="form-control"
                                                id="giaNhapUpdate">
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label">giá bán</label>
                                        <input
                                                type="text"
                                                class="form-control"
                                                id="giaBanUpdate">
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label">mô tả</label>
                                                    <textarea id="my-textarea" class="form-control" name="" rows="3" id="moTaUpdate"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Hủy
                                    </button>
                                    <button type="submit" class="btn btn-primary">Cập
                                        nhật
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- end update thông tin product -->
                
```

2 main.

```
// thực hiện lấy các giá trị của product thông qua id 

function update(id){
    $("#modal_update_product").modal("show")
    $.ajax({
        type:"GET",
        contentType: "application/json",
        url: productAPI+"/"+id,
        success: function(responData){
            $("#idProduct").val(responData.id)
            $("#tenUpdate").val(responData.ten)
            $("#soLuongUpdate").val(responData.so_luong)
            $("#giaBanUpdate").val(responData.gia_ban)
            $("#giaNhapUpdate").val(responData.gia_nhap)
            $("#moTaUpdate").val(responData.mieu_ta)
        
        },
        error: function(e){
            console.log(e)
        }
    })
}

// thực hiện update lại dữ liệu 
$("#form_product_update").submit(function(event){
    event.preventDefault()

    var id = $("#idProduct").val()
    var product = {}
    product["ten"] = $("#tenUpdate").val()
    product["so_luong"] = $("#soLuongUpdate").val()
    product["gia_nhap"] = $("#giaNhapUpdate").val()
    product["gia_ban"] = $("#giaBanUpdate").val()
    product["mieu_ta"] = $("#moTaUpdate").val()
    $.ajax({
        type:"PUT",
        contentType: "application/json",
        url: productAPI+"/"+id,
        data: JSON.stringify(product),
        success: function(){
            alert("thanh cong")
            window.location.reload(false)
        },
        error: function(e){
            console.log(e)
        }
    })
})


```

> xóa product

1 index.html 

```

```

2 main.js


```
// tìm kiểm product theo id và lấy id của produc để thực hiện xóa product 
function deleteProduct(id){
    $("#modal_product_remove").modal("show")
    $.ajax({
        type:"GET",
        contentType: "application/json",
        url: productAPI+"/"+id,
        success: function(responData){
            $("#id").val(responData.id)
        
        },
        error: function(e){
            console.log(e)
        }
    })
}

// thực hiện xóa sản phẩm 

$("#form_product_delete").submit(function(event){
    event.preventDefault()
    var id = $("#id").val()
    $.ajax({
        type:"DELETE",
        contentType: "application/json",
        url: productAPI+"/"+id,
        success: function(){
            alert("thanh cong")
            window.location.reload(false)
        },
        error: function(e){
            console.log(e)
        }
    })
})

```

> lưu ý bạn có thể lấy toàn bộ code trong bài viết  [tại đây](https://github.com/thangdtph27626/demoMockApi.github.io)
