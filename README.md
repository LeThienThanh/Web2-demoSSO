# DEMO SSO

## Giới thiệu

Demo SSO bằng với jwt (Code trên react js).

## Yêu cầu

- Node.js
- npm (được cài đặt cùng với Node.js)

## Cài đặt

Mở cmd

1. Sao chép kho lưu trữ GitHub này về máy tính của bạn:

git clone [URL của kho lưu trữ GitHub]


2. Điều hướng đến thư mục vừa tải xuống và cài đặt các gói phụ thuộc:

cd web2
npm install


3. Tạo một tệp `.env` trong thư mục gốc của ứng dụng và thiết lập các biến môi trường cần thiết:

touch .env


Mở tệp `.env` và thêm vào các dòng sau (thay đổi giá trị phù hợp với cấu hình của bạn):

API_URL=http://localhost:3001
SECRET_KEY=your-secret-key


4. Khởi động  ứng dụng:

npm start

5. Khởi động server (Nếu đã làm tại ứng dụng web1 thì không cần làm bước này nữa):

Mở cmd tại thư mục jwt-auth-api

chạy lệnh node index.js

6. Mở trình duyệt của bạn và truy cập vào địa chỉ `http://localhost:3000` (hoặc `http://localhost:3002` cho ứng dụng thứ hai) để kiểm tra ứng dụng.

## Sử dụng SSO giữa hai ứng dụng

Để kiểm tra chức năng SSO giữa hai ứng dụng, hãy làm theo các bước sau:

1. Đăng nhập vào ứng dụng đầu tiên tại `http://localhost:3000/login` với tài khoản hợp lệ.
2. Sau khi đăng nhập thành công, bạn sẽ được chuyển hướng đến trang bảo vệ của ứng dụng đầu tiên.
3. Mở một tab mới trong trình duyệt và truy cập vào địa chỉ `http://localhost:3002/protected` của ứng dụng thứ hai.
4. Bạn sẽ thấy rằng bạn đã tự động đăng nhập vào ứng dụng thứ hai mà không cần nhập thông tin đăng nhập lại.

