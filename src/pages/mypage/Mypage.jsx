import React from 'react';
import { EmailSpan, InfoBox, ProfileImageWrapper, ProfileName, Menu } from './MyPage.style';
import AppBar from '../../components/common/appBar/AppBar';
import NavBar from '../../components/common/navBar/NavBar';
import characterSheep from '../../assets/images/sm-sheep.svg';

export default function Mypage() {
  return (
    <>
      <AppBar currentPage="마이페이지" settingBtn />
      <ProfileName>프로필 이름</ProfileName>
      <EmailSpan>Goorumton@gmail.com</EmailSpan>
      <ProfileImageWrapper>
        <img src={characterSheep} alt="" />
      </ProfileImageWrapper>
      <InfoBox>
        <p>
          <strong>15</strong> 번 더 기록하면 오르미가 <b>성장해요!</b>
        </p>
        <p>
          <span>기록한 지</span>
          <span>+ 365 일째</span>
        </p>
      </InfoBox>
      <ul>
        <li>
          <Menu>공지사항</Menu>
        </li>
        <li>
          <Menu>고객센터</Menu>
        </li>
        <li>
          <Menu>약관 및 정책</Menu>
        </li>
        <li>
          <Menu>로그아웃</Menu>
        </li>
        <li>
          <Menu>회원탈퇴</Menu>
        </li>
      </ul>
      <NavBar />
    </>
  );
}
