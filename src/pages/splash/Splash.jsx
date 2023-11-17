import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import Button from '../../components/common/button/Button';
import AppIntroduction from './Splash.style';

export default function Splash() {
  const navigate = useNavigate();

  return (
    <>
      <AppIntroduction>
        <img src={Logo} alt="로고 이미지" />
        <p>구름으로 쓰는 오늘의 일기</p>
      </AppIntroduction>
      <Button type="button" usage="cta" onClick={() => navigate('/main')}>
        시작하기
      </Button>
    </>
  );
}
