const RANDOM_INDEX_PC = Math.floor(Math.random() * 14) + 1;
const RANDOM_INDEX_MOBILE = Math.floor(Math.random() * 4) + 1;

// 현재 창의 넓이를 가져오는 함수
const getWindowWidth = () => {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};

const randomBgImage = () => {
  const windowWidth = getWindowWidth();
  let imagePath;
  if (windowWidth >= 600) {
    imagePath = `public/image/pc/${RANDOM_INDEX_PC}.jpg`;
  } else if (windowWidth <= 600) {
    imagePath = `public/image/mobile/mobile_img0${RANDOM_INDEX_MOBILE}.png`;
  }

  return imagePath;
};

export default randomBgImage;
