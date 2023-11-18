import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BoxDiv from '../common/box/Box.style';

export const WeekTitle = styled.h4`
  margin-bottom: 8px;
`;

export const WeatherBox = styled(BoxDiv)`
  padding: 12px 10px;
  margin-bottom: 20px;
`;

export const WeatherList = styled.ol`
  display: flex;
  gap: 20px;
  text-align: center;
`;

export const DailyWeatherReport = styled.li`
  color: var(--color-grey-700);
  font-size: var(--font-size-body2);

  & img {
    width: 30px;
    height: 30px;
    margin-top: 4px;
  }
`;

export const Weather = styled(Link)``;
