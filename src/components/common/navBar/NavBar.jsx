import { BottomNav, BottomDiv, NavDiv, NavIcon, NavText } from '../../../styles/NavBar.style';
import home from '../../../assets/images/home.svg';
import reportEmpty from '../../../assets/images/report-empty.svg';
import mypageEmpty from '../../../assets/images/mypage-empty.svg';

export default function NavBar() {
  return (
    <BottomNav>
      <BottomDiv>
        <NavDiv>
          <NavIcon alt="" src={home} />
          <NavText>홈</NavText>
        </NavDiv>
        <NavDiv>
          <NavIcon alt="" src={reportEmpty} />
          <NavText>기록</NavText>
        </NavDiv>
        <NavDiv>
          <NavIcon alt="" src={mypageEmpty} />
          <NavText>설정</NavText>
        </NavDiv>
      </BottomDiv>
    </BottomNav>
  );
}
