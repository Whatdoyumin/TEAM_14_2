/* eslint-disable import/no-extraneous-dependencies */
import { useCallback, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import DiaryContext from '../../../contexts/DiaryContext';
import getDate from '../../../utils/getDate';
import CLOUD_DATA from '../../../constants/cloudData';
import AppBar from '../../../components/common/appBar/AppBar';
import Box from '../../../components/common/box/Box';
import Button from '../../../components/common/button/Button';
import pictureImg from '../../../assets/images/picture.svg';

import {
  Bar,
  CloudImgWrapper,
  ContentWrapper,
  DiaryBtnWrapper,
  DiaryText,
  DiaryWrapper,
  EmotionWeather,
  PostImgLabel,
  PreviewImg,
  PreviewImgWrapper,
  Today,
} from '../Diary.style';
import Modal from '../../../components/common/modal/Modal';

export default function DiaryEditSection() {
  const [diaryText, setDiaryText] = useState('');
  const { year, month, date } = getDate();
  const { diaryState, setDate, setTodayWrite } = useContext(DiaryContext);
  const navigate = useNavigate();
  const [previewSrc, setPreviewSrc] = useState('');
  const imageWrapperRef = useRef(null);

  const createDiary = useCallback(({ emotion, text }) => {
    // 오늘 일기를 작성했으면 수정 : 작성
    const method = diaryState.isWriteToday ? 'put' : 'post';
    // axios[method](API_URL.POST_DIARY, {
    //   emotion,
    //   text,
    // });
    axios[method](
      `https://jsonplaceholder.typicode.com/posts${diaryState.isWriteToday ? '/1' : ''}`,
      {
        emotion,
        text,
      },
    );
  });

  const { mutate } = useMutation(createDiary);

  const postDiary = useCallback((e) => {
    e.preventDefault();
    mutate(
      { emotion: diaryState.emotion, text: diaryText },
      {
        onSuccess: () => {
          setDate(`${year}-${month}-${date}`);
          setTodayWrite(true);
          navigate('/main');
        },
      },
    );
  });

  const readUrl = (e) => {
    // const formData = new FormData();
    // const userImage = e.target.files[0];
    const reader = new FileReader();

    if (!e.target.files[0]) return;

    reader.onload = ({ target }) => {
      setPreviewSrc(target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AppBar currentPage="구름일기 작성하기" />

      <DiaryWrapper>
        <div>
          <CloudImgWrapper style={{ textAlign: 'center' }}>
            <img
              src={diaryState.emotion && CLOUD_DATA[diaryState.emotion].src}
              alt={CLOUD_DATA[diaryState.emotion].name}
            />
          </CloudImgWrapper>
          <Box>
            <ContentWrapper>
              <Today>
                {year}년 {month}월 {date}일
              </Today>
              <Bar />
              <div>
                <span>감정 날씨</span>
                <EmotionWeather>
                  {diaryState.emotion && CLOUD_DATA[diaryState.emotion].name}
                </EmotionWeather>
              </div>
            </ContentWrapper>
          </Box>
          <PreviewImgWrapper preview={!!previewSrc} ref={imageWrapperRef}>
            <PostImgLabel htmlFor="test" style={{ textAlign: 'center' }}>
              {previewSrc ? (
                <PreviewImg src={previewSrc} alt="미리보기" />
              ) : (
                <>
                  <img src={pictureImg} alt="이미지추가 이미지" />
                  <span>오늘의 하늘은 어떤 풍경인가요?</span>
                </>
              )}
            </PostImgLabel>
            <input
              type="file"
              accept="image/*"
              id="test"
              style={{ display: 'none' }}
              onChange={(e) => {
                readUrl(e);
              }}
            />
          </PreviewImgWrapper>
          <Box>
            <DiaryText
              placeholder="여기에 텍스트를 입력해주세요!"
              onChange={(e) => setDiaryText(e.target.value)}
              // 여기 아래에 서버에서 받아온 오늘 작성된 일기 텍스트 넣어주면 됩니다.
              // defaultValue={}
            />
          </Box>
        </div>
        <DiaryBtnWrapper>
          <Button type="button" usage="grey" onClick={() => setModalOpen(true)}>
            취소
          </Button>
          <Button type="submit" usage="primary" onClick={(e) => postDiary(e)} disabled={!diaryText}>
            저장
          </Button>
        </DiaryBtnWrapper>
      </DiaryWrapper>

      {modalOpen && (
        <Modal
          size="lg"
          title="정말 저장하지 않고 돌아가시겠어요?"
          content="작성한 내용은 임시보관되지 않아요!"
          primaryText="돌아가기"
          cancelBtn
          onClickFn={() => navigate('/main')}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
}
