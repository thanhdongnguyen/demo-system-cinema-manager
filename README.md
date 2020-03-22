# Mô tả hệ thống quản lý Cinema Manage



1. Sự cố gặp phải
    - Khi hoàn thành 90% thì lỡ tay remove mất folder ts, vì vậy chỉ còn duy phất folder đã bundle ra :(
2. Công nghệ sử dụng
    - Nodejs với Library Expressjs dùng Typescript (last version)
    - Database: Mariadb
    - Docker
    - Giao diện dùng: AdminLTE
    - Postman: https://www.postman.com/collections/5c84552eb4e43b5710a7
3. Cấu trúc thư mục
    - database: Là nơi lưu file sql để tạo các bảng và dữ liệu demo
    - src: là thư mục chứa code để chạy
    - src.bootstrap: là thư mục chứ các file javascript đã build từ typescript
    - src.ts: là thư mục lưu trữ code typescript (đã bị xoá, chỉ còn duy nhất bản build :( ). Tuy nhiên cấu trúc thư mục bên trong ts giống hệt như trong src.bootstrap
    - src.ts.config: chứa các file để connect đến các dịch vụ 3rd như: database, cache,...
    - src.ts.controllers: là thư mục chứa các file controller từ router sẽ điều hướng đến (chịu trách nhiệm sử lý logic luôn)
    - src.ts.models: là thư mục chứa các model để có thể thao tác xuống dứoi cơ sở dữ liệu
    - src.ts.middleware: là thư mục chứa các middleware
    - src.ts.helpers: là thư mục chứa các function mà các controller hay dùng như: Timer, Message, ...
4. Hướng dẫn cài đặt
    - vào src chạy command: `npm install ` để cài đặt các package
    - Sau khi cài đặt Docker và Docker-compose, đi vào thư mục gốc chạy docker-compose để build image và start container
    - Accesss vào database bằng các tool như: mycli, phpmyadmin, mysql workbench rồi chạy file sql: `cinema_manage.sql` trong src/database
    - Sau khi chạy trong thì sẽ có dữ liệu demo và account của user là: `0989742392/dongnt`
5. 1 số chú ý
    - Do làm nhanh và 1 số luồng logic trong code cũng khá rõ ràng nên sẽ không comment trong code nữa mà sẽ giải thích luồng ở ngoài README.md này luôn
6. Giải thích các bước thực hiện
    - Khi nhìn vào đề bài với nhiều yêu cầu và làm trong một thời gian ngắn như như thế này thì việc đầu tiên nên nghĩ tới là nên chọn các giải pháp/công nghệ giúp cho việc develop sao cho nhanh nhất có thể và nodejs kết hợp với typescript không phải là lựa chọn tồi (mặc dù có thể chọn Laravel hay Lumen (php) nhưng không khoái dùng cho lắm)
    - Sau khi chọn xong ngôn ngữ thì việc tiếp theo là chọn Cơ sở dữ liệu. Vậy chọn Nosql hay SQL. Vì nhìn thấy yêu cầu đề bài là có cấp API thanh toán cho các bên ví điện tử nên sẽ ưu tiên chọn SQL hơn vì có hỗ trợ Transaction và Locking (Tuy nhiên trong bài làm k dùng vì việc ưu tiên hàng đầu là sẽ làm đủ các yêu cầu. Nếu thừa thời gian thì mới làm)
    - Tiếp theo sẽ đến pattern architecture thì Layer Architecture dùng MVC pattern là lựa chọn hàng đầu vì việc xử lý logic không quá phức tạp, nếu sau này phức tạp quá thì có thể tách ra thêm các Layer khác nữa
    - Tiếp sau đó sẽ là phần thiết kế database. Phần thiết kế database này cũng không quá phức tạp với các bảng: `movies` để chứa thông tin các phim liên kết với các bảng: `movies_times` - bảng chứa giờ chiếu các phim, `movies_items` - bảng chứa mã code của các phim theo giờ công chiếu, các `logs_transaction` chứa thông tin các giao dịch của các bên như: trên trang admin, Ví điện tử, team frontend. Bảng `users` để chứa thông tin user. Đặc biệt còn có bảng: `movies_transaction_id` để sinh ra các giao dịch không bị trùng lặp
    - Tiếp sau đó là viết các file: timer.ts, jwt.ts,... trong helper. Tại sao lại cần viết cái này trước?. Vì các file trong helper là các file mà được sử dụng bởi tất cả các controller nên sẽ phải viết trước
    - Rồi viết tiếp các file connect đến 3rd trong folder: config
    - Tiếp sau đó là sẽ viết code như luồng logic bình thường là từ model rồi mới đến controller rồi đến router và cuối cùng là middleware

7. Các điểm mà bản thân thấy quan trọng trong:
    - docker-compose: điểm mà bản thân thấy quan trọng nhất trong quá trình setup docker-compose là việc mount dữ liệu từ bên ngoài vào container (đẩy code vào trong container) và mount dữ liệu từ trong container ra bên ngoài để làm persistence (dữ liệu sẽ không bị mấy khi container mất, dùng trong mariadb container)

8. 1 số cái vẫn chưa hoàn thành
    - Setup CI/CD vì trong quá trình làm việc thì đã dùng CI/CD rất nhiều rồi nhưng chưa tự tay setup nên sẽ k làm vì thời gian có hạn. Nếu thời gian dài ra và làm xong hết rồi thì mới research rồi làm
    - Trang report thống kê, làm được 2/3 vì lỡ tay xoá mất folder: `ts`
    - Tích hợp hệ thống lưu log, cái này cảm thấy vẫn chưa rõ ý lắm. Với việc hệ thống lưu log như kiểu ELK?. Nhưng phần này độ ưu tiên không cao vì thời gian có hạn. Sẽ research rồi làm nếu thời gian dài ra
    - Chưa viết kịp Unittest
    - Thiếu 1 API cho bên Front-end

9. Các table để làm trang report:
    - Với yêu cầu đầu tiên (Top 5 phim ăn khách) thì có thể lấy trực tiếp trong bảng `logs_transaction` vì bảng đó sẽ lưu logs giao dịch của user mua vé xem phim
    - Với yêu cầu thứ 2 (Hiển thị số lỗi xảy ra từ restful API trả về). Chỗ này sẽ nghĩ đến 2 TH: 1 là trả về mã lỗi của các giao dịch không thành công, 2 là sẽ trả về mã lỗi mà liên quan đến tất cả các API (như lấy thông tin phim không thành công cũng sẽ lưu log vào database trước khi trả về). Với đầu tiên thì sẽ lấy trực tiếp trong bảng `logs_transaction` với TH thứ 2 sẽ lấy trong bảng `errors_response`. Trong code chưa bổ sung phần insert log vào table này

10. 1 số chú thích
    - Trong API  verify giao dịch của bên Ví điện tử. Sau khi verify thành công thì sẽ call 1 API callback sang bên đối tác để xác nhận giao dịch đã thành công (phần này tự nghĩ ra thêm)
    - Các API cho bên Frontend sẽ dùng jwt làm token. Vì vậy cần phải login trước rồi truyền lên header với key là: `Authorization` với value là `Bearer xxxx`
