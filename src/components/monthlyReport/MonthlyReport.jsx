import React, { useState, useEffect } from 'react';
import CLOUD_DATA from '../../constants/cloudData';
import { MonthlyReportContainer, CloudImg } from './MonthlyReport.style';
import Modal from '../common/modal/Modal';

function MonthlyReport() {
  const initialData = {
    peaceful: 17,
    excited: 0,
    happy: 6,
    tired: 1,
    angry: 10,
    sad: 0,
  };

  const MIN_SIZE = 50;

  const [cloudPositions, setCloudPositions] = useState({});
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  useEffect(() => {
    const newCloudPositions = {};
    Object.keys(initialData).forEach((emotion, index) => {
      const count = initialData[emotion];
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
  }, [initialData]);

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
          title="뭉게구름"
          content={`이 감정 구름은 총 ${initialData[selectedEmotion]}번 기록됐어요!`}
          primaryText="확인"
          setModalOpen={closeModal}
        />
      )}
    </MonthlyReportContainer>
  );
}

export default MonthlyReport;
