import { styled } from 'styled-components';

export const MonthlyReportContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 40px;
  position: relative;
  overflow: hidden;
`;

export const CloudImg = styled.img`
  position: absolute;
  height: ${({ size }) => (size > 0 ? 'auto' : 0)};
  width: ${({ size }) => `${size}px`};
  display: ${({ size }) => (size > 0 ? 'block' : 'none')};
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
`;

export default MonthlyReportContainer;
