import { styled } from 'styled-components';
import GlobalFont from '../../styles/GlobalFont';

export const EmotionChoiceContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

export const EmotionMent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  h4 {
    font-family: 'NPSfontBold', sans-serif;
    margin: 0 0 0 4px;
  }
`;

export const EmotionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: ${({ isClicked }) => (isClicked ? '10px' : '70px')};
  button {
    background-color: white;
  }
`;

export const EmotionChoiceBtn = styled.div`
  max-width: var(--size-max-width);
  width: 100%;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  & > *:first-child {
    margin-left: 15px;
    margin-right: 10px;
  }

  & > *:nth-child(2) {
    margin-right: 15px;
  }
`;

export const GlobalStyles = GlobalFont;
