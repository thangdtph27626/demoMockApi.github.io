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
   <p>1: Mock  là gì?</p>
   <p>2: Tại sao lại sử dụng mockAPI?</p>
   <p>3: Cách sử dụng?</p>
   <p>4: Thiết lập dự án</p>
   <p>5: kết luận </p>
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

> 1 tạo sự án mới:

chọn new project(+)

![image](https://user-images.githubusercontent.com/109157942/193208448-786043f8-572d-46bf-8f2f-db1895488fa2.png)

![image](https://user-images.githubusercontent.com/109157942/193209705-47b373bb-b00a-4cdb-8d97-feec2c373df1.png)
> 2 add resource

  chọn new resource
  
![image](https://user-images.githubusercontent.com/109157942/193216318-b3b76d04-1de3-4632-bb30-631d16a524db.png)

nhập tên bảng 

![image](https://user-images.githubusercontent.com/109157942/193216573-06903c7b-6b5a-4087-9ab8-1e054a8c1beb.png)

nhập tên cột và thuộc tính 
![image](https://user-images.githubusercontent.com/109157942/193217710-ad8741b6-5fd1-430a-8f9f-f99a5c6ab3b3.png)

> lưu ý: các giao thức trong http vd: bảng users  các API sẽ được tạo  


<div align="center">
 <table >
  <theader>
  <th>
   Method
   </th>
    <th>
  url
   </th>
    <th>
   Code 
   </th>
    <th>
   Response 
   </th>
   </theader>
  <tbody>
     <tr>
        <td>GET</td>
        <td>/users</td>
        <td>200</td>
        <td>List<user></td>
      </tr>
      <tr>
        <td>GET</td>
        <td>/users/:id</td>
        <td>200</td>
        <td>user</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>/users</td>
        <td>2001</td>
        <td>user</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td>/users/:id</td>
        <td>200</td>
        <td>user</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td>/users/:id</td>
        <td>200</td>
        <td>user</td>
      </tr>
   </tbody>
   </table>
</div>
