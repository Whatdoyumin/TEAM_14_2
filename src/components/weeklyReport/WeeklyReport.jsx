import React from 'react';
import CLOUD_DATA from '../../constants/cloudData';
import {
  DailyWeatherReport,
  Weather,
  WeatherBox,
  WeatherList,
  WeekTitle,
} from './WeeklyReport.style';

export default function WeeklyReport({ diaryData }) {
  const date = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <>
      <WeekTitle>2023년 11월 3주차</WeekTitle>
      <WeatherBox>
        <WeatherList>
          {diaryData.map((diary, index) => {
            return (
              // 데이터 들어오면 키 수정 필요
              <DailyWeatherReport key={date[index]}>
                <span>{date[index]}</span>
                <Weather to="./">
                  <img src={CLOUD_DATA[diary.emotion].src} alt="" />
                </Weather>
              </DailyWeatherReport>
            );
          })}
        </WeatherList>
      </WeatherBox>
    </>
  );
}
