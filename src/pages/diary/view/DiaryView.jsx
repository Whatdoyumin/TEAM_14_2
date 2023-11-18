import { useNavigate } from 'react-router-dom';
import AppBar from '../../../components/common/appBar/AppBar';
import { Bar, CloudImgWrapper, ContentWrapper, EmotionWeather, Today } from '../Diary.style';
import CLOUD_DATA from '../../../constants/cloudData';
import Box from '../../../components/common/box/Box';
import Button from '../../../components/common/button/Button';

export default function DiaryViewSection({ emotion, image, date, text }) {
  const [writeYear, writeMonth, writeDate] = date ? date.split('-') : [];
  const navigate = useNavigate();
  return (
    <>
      <AppBar backBtn currentPage="지난 일기" />
      <CloudImgWrapper style={{ textAlign: 'center' }}>
        <img src={CLOUD_DATA[emotion].src} alt={CLOUD_DATA[emotion].name} />
      </CloudImgWrapper>
      <Box>
        <ContentWrapper>
          <Today>
            {writeYear}년 {writeMonth}월 {writeDate}일
          </Today>
          <Bar />
          <div>
            <span>감정 날씨</span>
            <EmotionWeather>{CLOUD_DATA[emotion].name}</EmotionWeather>
          </div>
        </ContentWrapper>
      </Box>
      {image && (
        <Box>
          <img src={image} alt="" />
        </Box>
      )}
      <Box>{text}</Box>
      <Button type="button" usage="cta" onClick={() => navigate(-1)}>
        돌아가기
      </Button>
    </>
  );
}
