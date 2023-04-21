const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express(); // Khởi tạo biến app trước
app.use(cors()); // Sử dụng cors middleware sau khi khởi tạo app
app.use(express.json());

// Thay đổi giá trị này bằng mật khẩu JWT bí mật của bạn
const JWT_SECRET = 'lct14092002';

// Đây là ví dụ về cách lưu trữ thông tin người dùng - thay thế bằng cơ sở dữ liệu thực tế
const users = [
  {
    id: 1,
    username: 'user1',
    password: bcrypt.hashSync('123', 10),
  },
  {
    id: 2,
    username: 'user2',
    password: bcrypt.hashSync('password2', 10),
  },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).send({ error: 'Tên đăng nhập không tồn tại' });
  }

  const passwordValid = bcrypt.compareSync(password, user.password);
  if (!passwordValid) {
    return res.status(400).send({ error: 'Mật khẩu không hợp lệ' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.send({ token });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

