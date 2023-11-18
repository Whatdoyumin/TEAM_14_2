import React, { useState, useContext } from 'react';
import getDate from '../../utils/getDate';
import { Date, DiaryLink, MainBg } from './Main.style';
import sketchbook from '../../assets/images/sketchbook.svg';
import smSheep from '../../assets/images/sm-sheep.svg';
import clouldBalloon from '../../assets/images/cloud-balloon.svg';
// import heartBalloon from '../../assets/images/heart-balloon.svg';
import modalSheep from '../../assets/images/modal-sheep.svg';
import DiaryContext from '../../contexts/DiaryContext';

import AppBar from '../../components/common/appBar/AppBar';
import NavBar from '../../components/common/navBar/NavBar';
import Modal from '../../components/common/modal/Modal';

export default function Main() {
  const today = getDate();
  const [modalOpen, setModalOpen] = useState(false);
  const { diaryState } = useContext(DiaryContext);

  return (
    <>
      <AppBar currentPage="나의 구름" showInfoBtn onInfoBtnClick={() => setModalOpen(true)} />
      <Date>
        {today.year}년 {today.month}월 {today.date}일
      </Date>
      <span>
        일기를 작성해서 나의 <strong>오르미</strong>를 키워보세요
      </span>
      <MainBg>
        <img src={clouldBalloon} alt="" />
        <img src={smSheep} alt="" />
      </MainBg>
      <DiaryLink to={diaryState.isWriteToday ? '/diary/write' : '/emotionChoice'}>
        <img src={sketchbook} alt="" />
        <p>오늘 당신의 감정날씨를 알려주세요!</p>
      </DiaryLink>
      <NavBar />
      {modalOpen && (
        <Modal
          src={modalSheep}
          size="lg"
          title="감정으로 자라나는 구름양"
          content="뭉게뭉게한 양구름이 되도록 도와주세요!"
          setModalOpen={setModalOpen}
          helpModal
        />
      )}
    </>
  );
}
