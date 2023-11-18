/* eslint-disable no-param-reassign */
import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmotionChoiceContainer, EmotionGrid, EmotionChoiceBtn } from './EmotionCloudChoice.style';
import Button from '../common/button/Button';
import CLOUD_DATA from '../../constants/cloudData';
import DiaryContext from '../../contexts/DiaryContext';

export default function EmotionCloudChoice({ onConfirm }) {
  const { diaryState, setEmotion } = useContext(DiaryContext);
  const [selectedEmotion, setSelectedEmotion] = useState(diaryState.emotion);
  const emotionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (emotionRef.current) {
      const labels = emotionRef.current.parentElement.querySelectorAll('label');

      labels.forEach((el) => {
        const emotionImg = el.children[0];
        emotionImg.classList.remove('select');
        if (emotionImg.alt === selectedEmotion) emotionImg.classList.add('select');
      });
    }
  }, [selectedEmotion]);

  return (
    <>
      <EmotionChoiceContainer>
        {selectedEmotion ? (
          <>
            <span>나는 오늘</span>
            <strong>{CLOUD_DATA[selectedEmotion].name}</strong>
            <span>{CLOUD_DATA[selectedEmotion].message}</span>
          </>
        ) : (
          ''
        )}
        <EmotionGrid>
          {Object.keys(CLOUD_DATA).map((emotion) => (
            <React.Fragment key={emotion}>
              <label htmlFor={emotion} ref={emotionRef}>
                <img src={CLOUD_DATA[emotion].src} alt={emotion} />
                <input
                  type="radio"
                  name="emotion"
                  id={emotion}
                  onChange={() => setSelectedEmotion(emotion)}
                />
              </label>
            </React.Fragment>
          ))}
        </EmotionGrid>
      </EmotionChoiceContainer>
      <EmotionChoiceBtn>
        <Button usage="grey" onClick={() => navigate(-1)}>
          취소
        </Button>
        <Button
          usage="primary"
          disabled={!selectedEmotion}
          onClick={() => {
            setEmotion(selectedEmotion);
            if (onConfirm) onConfirm();
            navigate('/diary/write');
          }}
        >
          확인
        </Button>
      </EmotionChoiceBtn>
    </>
  );
}
