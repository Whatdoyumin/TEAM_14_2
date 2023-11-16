import React from 'react';
import { ButtonWrapper, Dialog, ModalContainer } from './Modal.style';

export default function Modal({ src, size, title, content, children }) {
  return (
    <ModalContainer>
      <Dialog size={size} title={title}>
        <img src={src} alt="모달 이미지" />
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <ButtonWrapper>{children}</ButtonWrapper>
      </Dialog>
    </ModalContainer>
  );
}

// ✅ USAGE
// <Modal
//  src={src}
//  size="sm"
//  title="뭉게구름"
//  content="이 감정구름은 총 nn번 기록됐어요!"
// >
//  <Button type="button" usage="primary">
//    확인
//  </Button>
// </Modal>
