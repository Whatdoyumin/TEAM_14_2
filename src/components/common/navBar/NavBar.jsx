import { useNavigate } from 'react-router-dom';
import * as S from './NavBar.style';
import home from '../../../assets/images/home.svg';
import homeEmpty from '../../../assets/images/home-empty.svg';
import myReport from '../../../assets/images/report.svg';
import myReportEmpty from '../../../assets/images/report-empty.svg';
import mypage from '../../../assets/images/mypage.svg';
import mypageEmpty from '../../../assets/images/mypage-empty.svg';

export default function NavBar() {
  const navigate = useNavigate();
  const path = window.location.pathname;

  const getHomeImage = () => (path === '/main' ? home : homeEmpty);
  const getReportImage = () => (path === '/report' ? myReport : myReportEmpty);
  const getMypageImage = () => (path === '/mypage' ? mypage : mypageEmpty);

  return (
    <S.BottomNav>
      <S.BottomDiv>
        <S.NavDiv onClick={() => navigate('/main')}>
          <S.NavIcon alt="" src={getHomeImage()} />
          <S.NavText>홈</S.NavText>
        </S.NavDiv>
        <S.NavDiv onClick={() => navigate('/report')}>
          <S.NavIcon alt="" src={getReportImage()} />
          <S.NavText>기록</S.NavText>
        </S.NavDiv>
        <S.NavDiv onClick={() => navigate('/mypage')}>
          <S.NavIcon alt="" src={getMypageImage()} />
          <S.NavText>설정</S.NavText>
        </S.NavDiv>
      </S.BottomDiv>
    </S.BottomNav>
  );
}
