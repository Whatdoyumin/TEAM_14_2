import { useState } from 'react';
import {
  EmotionChoiceContainer,
  EmotionMent,
  EmotionGrid,
  EmotionChoiceBtn,
} from './EmotionCloudChoice.style';
import Button from '../common/button/Button';
import CLOUD_DATA from '../../constants/cloudData';

export default function EmotionCloudeChoice() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [isPrimaryBtnDisabled, setPrimaryBtnDisabled] = useState(true);

  const onEmotionClick = (emotion) => {
    setSelectedEmotion(CLOUD_DATA[emotion]);
    setPrimaryBtnDisabled(false);
  };

  return (
    <EmotionChoiceContainer>
      {selectedEmotion && (
        <EmotionMent>
          <p>나는 오늘 </p>
          <h4>{selectedEmotion.name}</h4>
          <p>{selectedEmotion.message}</p>
        </EmotionMent>
      )}
      <EmotionGrid>
        {Object.keys(CLOUD_DATA).map((emotion) => (
          <button key={emotion} onClick={() => onEmotionClick(emotion)} type="button">
            <img src={CLOUD_DATA[emotion].src} alt={emotion} />
          </button>
        ))}
      </EmotionGrid>
      <EmotionChoiceBtn>
        <Button usage="grey">취소</Button>
        <Button usage="primary" disabled={isPrimaryBtnDisabled}>
          확인
        </Button>
      </EmotionChoiceBtn>
    </EmotionChoiceContainer>
  );
}
