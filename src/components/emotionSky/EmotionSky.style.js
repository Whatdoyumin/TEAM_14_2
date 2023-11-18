import { styled } from 'styled-components';
import Grass from '../../assets/images/grass.svg';

export const EmotionSkyContainer = styled.div`
  background-color: var(--color-blue-50);
  height: 100vh;
  position: absolute;
  bottom: 0;
  margin-left: calc(-1 * var(--size-side-gap));
  max-width: var(--size-max-width);
  width: calc(100% + var(--size-max-width));
  background: no-repeat center bottom -350px / cover var(--color-blue-50) url(${Grass});
  z-index: 0;
`;

export const MonthContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  text-align: center;
  color: var(--color-blue-25);
  position: absolute;
  bottom: 12%;
`;

export const MonthCloudCount = styled.div`
  font-size: var(--font-size-body2);
`;
