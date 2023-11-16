import peacefulCloud from '../assets/images/peaceful.svg';
import excitedCloud from '../assets/images/excited.svg';
import happyCloud from '../assets/images/happy.svg';
import sadCloud from '../assets/images/sad.svg';
import angryCloud from '../assets/images/angry.svg';
import tiredCloud from '../assets/images/tired.svg';

const CLOUD_DATA = {
  peaceful: {
    name: '양떼구름',
    message: '마냥 평화로워',
    src: peacefulCloud,
  },
  excited: {
    name: '새털구름',
    message: '처럼 신났어!',
    src: excitedCloud,
  },
  happy: {
    name: '뭉게구름',
    message: '마냥 행복해',
    src: happyCloud,
  },
  sad: {
    name: '먹구름',
    message: '같이 슬퍼',
    src: sadCloud,
  },
  angry: {
    name: '천둥',
    message: '치듯 화나!',
    src: angryCloud,
  },
  tired: {
    name: '안개',
    message: '처럼 지쳤어..',
    src: tiredCloud,
  },
};

export default CLOUD_DATA;
