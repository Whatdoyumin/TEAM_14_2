import React from 'react';
import Month from '../month/Month';
import MonthlyReport from '../monthlyReport/MonthlyReport';
import { EmotionSkyContainer, MonthContainer, MonthCloudCount } from './EmotionSky.style';

export default function EmotionSky() {
  return (
    <>
      <EmotionSkyContainer />
      <MonthlyReport />
      <MonthContainer>
        <MonthCloudCount>
          <span>총 </span>
          <span>18</span>
          <span>개의 구름을 띄웠어요!</span>
        </MonthCloudCount>
        <Month />
      </MonthContainer>
    </>
  );
}
