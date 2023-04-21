import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import Login from './components/Login';
import Protected from './components/Protected';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateWrapper />} >
            <Route path="/protected" element={<Protected />} />
          </Route>
          <Route path="*" element={<h1>404 - Trang không tìm thấy</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

function PrivateWrapper() {
  const isAuth = isAuthenticated();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default App;
