import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Footer from './components/Footer/Footer';
import List from './pages/List/List';
import ResList from './pages/ResList/ResList';
import ResDetail from './pages/ResDetail/ResDetail';
import KakaoLogin from './pages/Login/KakaoLogin';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/kakao/callback" element={<KakaoLogin />} />
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/resList" element={<ResList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resDetail/:id" element={<ResDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
