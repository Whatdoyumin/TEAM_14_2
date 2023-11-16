import React from 'react';

import CustomButton from './Button.style';

export default function Button({ usage, disabled, children, onClick }) {
  return (
    <CustomButton usage={usage} disabled={disabled} onClick={onClick}>
      {children}
    </CustomButton>
  );
}

// ✅ USAGE
// {/* 활성화된 버튼 */}
// <Button usage="primary">
//  확인
// </Button>

// {/* 비활성화된 버튼 */}
// <Button usage="disabled" disabled>
//  확인
// </Button>

// {/* 회색 버튼 */}
// <Button usage="grey">
//  취소
// </Button>
