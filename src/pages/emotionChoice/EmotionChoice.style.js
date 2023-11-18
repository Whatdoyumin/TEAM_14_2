import { styled } from 'styled-components';

export const QuestionWrapper = styled.div`
  margin: 80px 0 16px;
`;

export const ChoiceWrapper = styled.div`
  height: calc(100vh - var(--size-header) - 1.5rem - 180px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
