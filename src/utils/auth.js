import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';


const API_URL = 'http://localhost:3001'; // Thay đổi URL này thành API xác thực JWT của bạn

export async function login(username, password) {
  try {


    const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });
    const token = response.data.token;
    alert(token);

    Cookies.set('jwt', token, { path: '/', domain: 'localhost' });
  } catch (error) {
      throw new Error('Đăng nhập không thành công');
    }
  }
  
  export function logout() {
    Cookies.remove('jwt', { path: '/', domain: 'localhost' });
  }
  
  export function isAuthenticated() {
    const token = Cookies.get('jwt');

    if (!token) return false;
  
    try {
      jwtDecode(token);
      return true;
    } catch (error) {
      return false;
    }
  }
  
  export function getUsername() {
    const token = Cookies.get('jwt');

    if (!token) return null;
  
    try {
      const decoded = jwtDecode(token);
      return decoded.username;
    } catch (error) {
      return null;
    }
  }