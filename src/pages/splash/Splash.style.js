import { styled } from 'styled-components';

const AppIntroduction = styled.div`
  position: absolute;
  top: calc(50% - 64px);
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    display: block;
    margin: 0 auto;
  }

  p {
    margin-top: 12px;
    font-family: 'NPSfontBold', sans-serif;
    color: var(--color-grey-500);
    font-size: var(--font-size-display4);
  }
`;

export default AppIntroduction;
