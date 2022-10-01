let productAPI = "https://63379dcf132b46ee0be3304d.mockapi.io/api/products"

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

$(document).ready(function(){
loadData()
})

function loadData(){
        $.ajax({
            type:"GET",
            contentType: "application/json",
            url: productAPI,
            success: function(reponData){
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

$("#form_create_product").submit(function(event){
    event.preventDefault()
    var newProduct = {}
    newProduct["ten"] = $("#ten").val()
    newProduct["so_luong"] = $("#soLuong").val()
    newProduct["gia_nhap"] = $("#giaNhap").val()
    newProduct["gia_ban"] = $("#giaBan").val()
    newProduct["mieu_ta"] = $("#moTa").val()

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