import React from 'react';
import { ButtonWrapper, Dialog, ModalContainer } from './Modal.style';
import Button from '../button/Button';

export default function Modal({
  src,
  size,
  title,
  content,
  primaryText,
  cancelBtn,
  onClickFn,
  setModalOpen,
  helpModal,
}) {
  return (
    <ModalContainer>
      <Dialog size={size} title={title}>
        {helpModal && <span>오르미</span>}
        {src && <img src={src} alt="모달 이미지" />}
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        {helpModal && (
          <p>
            오늘의 일기를 작성하며 얻는
            <br />
            감정구름으로 오르미가 성장할 수 있어요.
            <br />
            꾸준히 기록해서 나의 오르미를 키워보세요!
          </p>
        )}
        <ButtonWrapper>
          {cancelBtn && (
            <Button type="button" usage="grey" onClick={() => setModalOpen(false)}>
              취소
            </Button>
          )}
          <Button
            type="button"
            usage="primary"
            onClick={() => {
              setModalOpen(false);
              if (onClickFn) onClickFn();
            }}
          >
            {primaryText || '확인'}
          </Button>
        </ButtonWrapper>
      </Dialog>
    </ModalContainer>
  );
}

// ✅ USAGE
// <Modal
//  src={src}
//  size="lg"
//  title="정말 작성하지 않고 돌아가시겠어요?"
//  content="작성한 내용은 임시보관되지 않아요!"
//  primaryText="돌아가기"
//  cancelBtn
//  setModalOpen={setModalOpen}
//  helpModal
// />
