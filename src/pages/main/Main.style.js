import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import GrassCloud from '../../assets/images/grass-cloud.svg';

export const Date = styled.strong`
  display: block;
  margin-bottom: 8px;
  font-family: 'NPSfontBold', sans-serif;
  font-size: var(--font-size-display2);
  color: var(--color-grey-800);
`;
export const MainBg = styled.div`
  width: 100%;
  aspect-ratio: 390 / 478;
  margin-left: calc(-1 * var(--size-side-gap));
  position: absolute;
  bottom: 5%;
  background: no-repeat url(${GrassCloud});
  background-size: cover;
  background-position: center bottom;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img:first-child {
    bottom: 100%;
  }
  img {
    position: absolute;
    bottom: 49%;
  }
`;

export const DiaryLink = styled(Link)`
  display: block;
  width: calc(100% - 2 * var(--size-side-gap));
  position: absolute;
  bottom: 112px;

  img {
    width: 100%;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 100%;
    text-align: center;
    font-family: 'NPSfontBold', sans-serif;
    font-size: var(--font-size-display4);
    color: var(--color-grey-900);
  }
`;
