import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../constants/apiBaseUrl';
import CLOUD_DATA from '../../constants/cloudData';
import { MonthlyReportContainer, CloudImg } from './MonthlyReport.style';
import Modal from '../common/modal/Modal';

function MonthlyReport() {
  const MIN_SIZE = 50;

  const [cloudPositions, setCloudPositions] = useState({});
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL.GET_RECORD_SKY)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  useEffect(() => {
    if (userData) {
      const newCloudPositions = {};
      Object.keys(userData).forEach((emotion, index) => {
        const count = userData[emotion];
        const size = count > 0 ? MIN_SIZE + count * 8 : 0;

        const fixedPositions = [
          { left: 0, top: 100 },
          { left: 170, top: 90 },
          { left: 120, top: 150 },
          { left: 20, top: 50 },
          { left: 230, top: 8 },
          { left: 60, top: 10 },
        ];

        const fixedPosition = fixedPositions[index] || { left: 0, top: 0 };

        newCloudPositions[emotion] = { size, left: fixedPosition.left, top: fixedPosition.top };
      });
      setCloudPositions(newCloudPositions);
    }
  }, [userData]);

  const onCloudClick = (emotion) => {
    setSelectedEmotion(emotion);
  };
  const closeModal = () => {
    setSelectedEmotion(null);
  };

  return (
    <MonthlyReportContainer>
      {Object.keys(CLOUD_DATA).map((emotion, index) => (
        <CloudImg
          key={emotion}
          src={CLOUD_DATA[emotion].src}
          alt={emotion}
          size={cloudPositions[emotion] ? cloudPositions[emotion].size : undefined}
          left={cloudPositions[emotion] ? cloudPositions[emotion].left : undefined}
          top={cloudPositions[emotion] ? cloudPositions[emotion].top : undefined}
          style={{ zIndex: index }}
          onClick={() => onCloudClick(emotion)}
        />
      ))}
      {selectedEmotion && (
        <Modal
          src={CLOUD_DATA[selectedEmotion].src}
          size="lg"
          title={CLOUD_DATA[selectedEmotion].name}
          content={`이 감정 구름은 총 ${userData[selectedEmotion]}번 기록됐어요!`}
          primaryText="확인"
          setModalOpen={closeModal}
        />
      )}
    </MonthlyReportContainer>
  );
}

export default MonthlyReport;
