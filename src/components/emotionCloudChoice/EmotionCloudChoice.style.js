import { styled } from 'styled-components';

export const EmotionChoiceContainer = styled.div`
  position: relative;
  min-height: 320px;
  text-align: center;
  font-size: var(--font-size-subhead);

  strong {
    font-family: 'NPSfontBold', sans-serif;
    margin: 0 0 0 4px;
  }
`;

export const EmotionGrid = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  input {
    display: none;
  }

  img {
    opacity: 0.5;
    cursor: pointer;
  }

  img.select {
    opacity: 1;
  }
`;

export const EmotionChoiceBtn = styled.div`
  max-width: var(--size-max-width);
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
