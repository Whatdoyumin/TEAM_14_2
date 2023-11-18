import React from 'react';
import AppBar from '../../components/common/appBar/AppBar';
import EmotionQuestion from '../../components/emotionQuestion/EmotionQuestion';
import EmotionCloudChoice from '../../components/emotionCloudChoice/EmotionCloudChoice';
import { QuestionWrapper, ChoiceWrapper } from './EmotionChoice.style';

export default function EmotionChoice() {
  return (
    <>
      <AppBar currentPage="감정구름 고르기" />
      <QuestionWrapper>
        <EmotionQuestion />
      </QuestionWrapper>
      <ChoiceWrapper>
        <EmotionCloudChoice />
      </ChoiceWrapper>
    </>
  );
}
