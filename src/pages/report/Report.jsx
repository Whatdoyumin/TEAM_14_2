import React, { useState } from 'react';
import WeeklyReport from '../../components/weeklyReport/WeeklyReport';
import NavBar from '../../components/common/navBar/NavBar';
import { ToggleInput, ToggleLabel, ToggleWrapper } from './Report.style';
import AppBar from '../../components/common/appBar/AppBar';
import EmotionSky from '../../components/emotionSky/EmotionSky';

export default function Report() {
  const [viewWeather, setViewWeather] = useState(true);

  const diaryData = [
    { emotion: 'peaceful' },
    { emotion: 'peaceful' },
    { emotion: 'happy' },
    { emotion: 'peaceful' },
    { emotion: 'sad' },
    { emotion: 'peaceful' },
    { emotion: 'peaceful' },
  ];

  return (
    <>
      <AppBar currentPage="내 기록" />
      <ToggleWrapper>
        <ToggleInput
          type="radio"
          name="emotion"
          id="weather-toggle"
          defaultChecked={viewWeather}
          onClick={() => {
            setViewWeather(true);
          }}
        />
        <ToggleLabel htmlFor="weather-toggle">감정 날씨</ToggleLabel>
        <ToggleInput
          type="radio"
          name="emotion"
          id="sky-toggle"
          defaultChecked={!viewWeather}
          onClick={() => {
            setViewWeather(false);
          }}
        />{' '}
        <ToggleLabel htmlFor="sky-toggle">감정 하늘</ToggleLabel>
      </ToggleWrapper>
      {viewWeather ? <WeeklyReport diaryData={diaryData} /> : <EmotionSky />}
      <NavBar />
    </>
  );
}
