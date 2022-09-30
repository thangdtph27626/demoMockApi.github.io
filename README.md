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
   <p>3: Cách sử dụng mock API?</p>
   <p>4: curd với mockapi & axios</p>
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
# Cách sử dụng 
 
 bạn có thể tạo mockAPI [tại đây](https://mockapi.io/projects)
 
> 1 tạo sự án mới:

chọn new project(+)

![image](https://user-images.githubusercontent.com/109157942/193208448-786043f8-572d-46bf-8f2f-db1895488fa2.png)

![image](https://user-images.githubusercontent.com/109157942/193209705-47b373bb-b00a-4cdb-8d97-feec2c373df1.png)
> 2 add resource

  chọn new resource
  
![image](https://user-images.githubusercontent.com/109157942/193216318-b3b76d04-1de3-4632-bb30-631d16a524db.png)

nhập tên bảng 

![image](https://user-images.githubusercontent.com/109157942/193216573-06903c7b-6b5a-4087-9ab8-1e054a8c1beb.png)

nhập tên cột và kiểu dữ liệu 
![image](https://user-images.githubusercontent.com/109157942/193217710-ad8741b6-5fd1-430a-8f9f-f99a5c6ab3b3.png)

tùy chỉnh data và phản hồi:

![image](https://user-images.githubusercontent.com/109157942/193226095-00579839-966a-4c58-a3e4-0228c661ad8a.png)
![image](https://user-images.githubusercontent.com/109157942/193226534-837292fa-6ae4-405d-b85d-a416e269982b.png)

### lưu ý: các giao thức trong http vd: bảng users các API sẽ được tạo

![image](https://user-images.githubusercontent.com/109157942/193247355-b6487bbe-72e7-4efc-896b-084ce9881da6.png)
  
  
### sau khi khởi tạo resource  bạn sẽ nhận được một table như hình: 

![image](https://user-images.githubusercontent.com/109157942/193221848-967b3914-a4da-4d16-8fe8-4a60686e07d7.png)

bạn có thể xem dữ liệu của mình thông qua url trong API endpoint hoặc bấm vào tên endpoint(table)

![image](https://user-images.githubusercontent.com/109157942/193226917-677e290d-59fc-43a9-8609-79af1e4fffdc.png)

vd : https://63369b9d65d1e8ef266f9da2.mockapi.io/api/users
> xác định mối quan hệ 

để xác định mối quan giữa hai bảng với nhau  bằng cách nhấp vào một vòng tròn nhỏ bên cạnh nó và kết nối nó với tài nguyên đích bằng nút shift và ấn enter

vd 1 user có thể có nhiều blog 

![image](https://user-images.githubusercontent.com/109157942/193224382-895c4001-d788-44bf-8649-1e9cd6b016c8.png)
![image](https://user-images.githubusercontent.com/109157942/193224797-653c1bff-4351-4a57-b6aa-5d716c9dfd7b.png)


> phân trang trong mockAPI

**/users?page=1&limit=10** hoặc có thể viết tắt là **/users?p=1&l=10**

> sắp xếp dữ liệu 

/users?sortby=desc

bạn có thể sử dụng sortby , orderBy hoặc orderby 

sắp xếp theo asc hoặc desc 

# CURD với mockapi & axios

> hiển thị thông tin sinh viên lên table 


```md

let SinhVienView = "/view"
let SinhVienAPI = "https://63369b9d65d1e8ef266f9da2.mockapi.io/api/users"

function loadData() {
    $.ajax({
        type: "GET", contentType: "application/json", url: SinhVienAPI, success: function (responseData) {
            console.log(responseData)
            $("#dataSinhVien").html(responseData.map(function (item) {
                return `
                <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                 <td>
                        <button
                                type="button"
                                class="btn btn-primary"
                               onclick="openModalUpdateSinhVien(${item.id})">
                            Sửa
                        </button>
                        </button>
                        <button
                                type="button"
                                class="btn btn-danger"
                                data-toggle="modal"
                               onclick="openModalRemoveSinhVien(${item.id})">
                            Xoá
                        </button>
                    </td>
                    </tr>
                `
            }))
        }, error: function (e) {
            console.log("ERROR : ", e);
        }
    });
}

```

> thêm sinh viên 

```
$("#form_create_sinh_vien").submit(function (event) {
    event.preventDefault();
    let tenSinhVien = $("#tenSinhVien").val();
    console.log(tenSinhVien)
    let sinhVienRequest = {};
    sinhVienRequest["name"] = tenSinhVien;
    console.log(sinhVienRequest)
    if (tenSinhVien.length === 0) {
        $("#sinh_vien_error").text("Tên sinh vien không được để trống");
    } else if (tenSinhVien.length < 6) {
        $("#sinh_vien_error").text("Tên sinh vien tối thiếu 6 ký tự");
    } else {
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: SinhVienAPI,
            data: JSON.stringify(sinhVienRequest),
            dataType: 'json',
            success: function () {
                window.open(SinhVienView, '_self');
                $("#modal_create").modal("hide");
            },
            error: function (e) {
                console.log("ERROR : ", e);
            }
        });
    }
});

```

> update sinh viên 

```
function openModalUpdateSinhVien(idSinhVien) {
    $("#modal_update_sinh_vien").modal('show');
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: SinhVienAPI + "/" + idSinhVien,
        data: JSON.stringify(idSinhVien),
        dataType: 'json',
        success: function (responseData) {
            console.log(responseData)
            $("#id_sinh_vien_update").val(responseData.id);
            $("#ten_sinh_vien_update").val(responseData.name);
        },
        error: function (e) {
            console.log("ERROR : ", e);
        }
    });
}

$("#form_sinh_vien_update").submit(function (event) {
    event.preventDefault();
    let tenSinhVien = $("#ten_sinh_vien_update").val();
    let idSinhvien = $("#id_sinh_vien_update").val();
    let sinhVienRequest = {};
    sinhVienRequest["name"] = tenSinhVien;
    if (tenSinhVien.length === 0) {
        $("#errorMessageUpdate").text("Tên sinh vien không được để trống");
    } else if (tenSinhVien.length < 6) {
        $("#errorMessageUpdate").text("Tên sinh vien tối thiếu 6 ký tự");
    } else {
        $.ajax({
            type: "PUT",
            contentType: "application/json",
            url: SinhVienAPI + "/" + idSinhvien,
            data: JSON.stringify(sinhVienRequest),
            dataType: 'json',
            success: function () {
                window.open(SinhVienView, '_self');
                $("#modal_update_hoc_ky").modal("hide");
            },
            error: function (e) {
                console.log("ERROR : ", e);
            }
        });
    }
});

```

> xóa sinh viên 

```
function openModalRemoveSinhVien(sinhvienId) {
    console.log(sinhvienId)
    $("#modal_sinh_vien_remove").modal('show');
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: SinhVienAPI + "/" + sinhvienId,
        data: JSON.stringify(sinhvienId),
        dataType: 'json',
        success: function () {
            $("#remove_sinh_vien").val(sinhvienId);
        },
        error: function (e) {
            console.log("ERROR : ", e);
        }
    });
}

$("#form_sinh_vien_delete").submit(function (event) {
    event.preventDefault();
    let sinhvienId = $("#remove_sinh_vien").val();

    $.ajax({
        type: "DELETE",
        contentType: "application/json",
        url: SinhVienAPI + "/" + sinhvienId,
        dataType: 'json',
        success: function () {
            window.open(SinhVienView, '_self');
            $("#modal_update_hoc_ky").modal("hide");
        },
        error: function (e) {
            console.log("ERROR : ", e);
        }
    });

});

```

> lưu ý bạn có thể lấy html [tại đây](https://github.com/thangdtph27626/demo_crud_ajax.github.io)\
> bạn có thể tìm hiểu về ajax [tại đây](https://thangdtph27626.github.io/demo_crud_ajax.github.io/)
