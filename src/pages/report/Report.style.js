import { styled } from 'styled-components';

export const ToggleWrapper = styled.div`
  max-width: var(--size-max-width);
  width: 100%;
  /* height: 51px; */
  margin-top: -1.5rem;
  margin-left: calc(-1 * var(--size-side-gap));
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const ToggleInput = styled.input`
  display: none;

  &:checked + label {
    color: var(--color-grey-900);
    font-weight: 700;
  }

  &:checked + label::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--color-primary);
  }
`;

export const ToggleLabel = styled.label`
  position: relative;
  text-align: center;
  line-height: 52px;
  flex-grow: 1;
  box-sizing: border-box;
  color: var(--color-grey-400);
  background-color: var(--color-grey-50);
  cursor: pointer;
  z-index: 1;
`;
