import styled, { css } from 'styled-components';
import Box from '../../components/common/box/Box';

export const CloudImgWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  margin: -4px 0;
  display: flex;
  justify-content: space-between;

  span:first-child,
  div:last-child {
    width: 150px;
  }

  div:last-child {
    padding-left: 16px;

    span:last-child {
      padding-left: 12px;
    }
  }
`;

export const Today = styled.span`
  font-family: 'NPSfontBold', sans-serif;
  font-size: var(--font-size-display3);
`;

export const Bar = styled.div`
  width: 1px;
  height: 20px;
  background-color: var(--color-grey-300);
`;

export const EmotionWeather = styled.span`
  font-family: 'NPSfontBold', sans-serif;
  font-size: var(--font-size-display4);
`;

export const PostImgLabel = styled.label`
  display: block;
  text-align: center;
  padding: 36px 0;
  overflow: hidden;

  img {
    margin: 0 auto;
    display: block;
  }

  span {
    display: block;
    margin-top: 12px;
    font-size: var(--font-size-body2);
  }
`;

export const PreviewImgWrapper = styled(Box)`
  height: 1000px;

  ${({ preview }) =>
    preview
      ? css`
          padding: 0;

          label {
            margin: 0;
          }
        `
      : ''}
`;

export const PreviewImg = styled.img`
  width: 100%;
`;

export const DiaryText = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  min-height: 160px;
  resize: none;
  background-color: inherit;
  font-size: var(--font-size-body);

  &::placeholder {
    color: var(--color-grey-400);
    font-size: inherit;
  }
`;

export const DiaryBtnWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const DiaryWrapper = styled.div`
  height: calc(100vh - var(--size-header) - 1.5rem - 64px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
