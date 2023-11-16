import { styled, css } from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const MODAL_SIZE = {
  sm: { margin: '64px', padding: '30px' },
  lg: { margin: '28px', padding: '20px' },
};

export const Dialog = styled.div`
  max-width: calc(var(--size-max-width) - 2 * ${({ size }) => MODAL_SIZE[size].margin});
  width: 100%;
  padding: 32px ${({ size }) => MODAL_SIZE[size].padding};
  border-radius: 12px;
  background-color: var(--color-grey-25);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;

  img {
    display: block;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 8px;
    color: var(--color-grey-800);
    font-size: var(--font-size-head);
    font-weight: 700;

    ${({ title = '' }) =>
      title.includes('구름') &&
      css`
        font-family: 'NPSfontBold', sans-serif;
        font-size: var(--font-size-display3);
      `};
  }

  p {
    color: var(--color-grey-400);
    font-size: var(--font-size-body);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
