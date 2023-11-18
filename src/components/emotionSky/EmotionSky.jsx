import React from 'react';
import Month from '../month/Month';
import MonthlyReport from '../monthlyReport/MonthlyReport';
import EmotionSkyContainer from './EmotionSky.style';

export default function EmotionSky() {
  return (
    <>
      <EmotionSkyContainer />
      <Month />
      <MonthlyReport />
    </>
  );
}
