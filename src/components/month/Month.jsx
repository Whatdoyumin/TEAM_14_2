import React from 'react';
import { CurrentMonth } from './Month.style';

export default function Month() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;

  return <CurrentMonth>{formattedDate}의 하늘</CurrentMonth>;
}
