import { useNavigate } from 'react-router-dom';
import * as S from './NavBar.style';
import home from '../../../assets/images/home.svg';
import myReportEmpty from '../../../assets/images/report-empty.svg';
import mypageEmpty from '../../../assets/images/mypage-empty.svg';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <S.BottomNav>
      <S.BottomDiv>
        <S.NavDiv onClick={() => navigate('/main')}>
          <S.NavIcon alt="" src={home} />
          <S.NavText>홈</S.NavText>
        </S.NavDiv>
        <S.NavDiv onClick={() => navigate('/report')}>
          <S.NavIcon alt="" src={myReportEmpty} />
          <S.NavText>기록</S.NavText>
        </S.NavDiv>
        <S.NavDiv onClick={() => navigate('/mypage')}>
          <S.NavIcon alt="" src={mypageEmpty} />
          <S.NavText>설정</S.NavText>
        </S.NavDiv>
      </S.BottomDiv>
    </S.BottomNav>
  );
}
