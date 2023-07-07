export default function () {
  let time = {
    hour: null,
    minutes: null,
    seconds: null,
    year: null,
    month: null,
    date: null,
    day: null,
    amPm: null,
  };
  const currentTime = new Date();

  time.hour = currentTime.getHours();

  // '시'를  13,14,23시를 01,02,11.. 이렇게 표현하게끔 하는 코드
  if (time.hour >= 13 && time.hour <= 24) {
    time.hour = String(time.hour - 12).padStart(2, '0');
  } else {
    time.hour = String(time.hour).padStart(2, '0');
  }

  // '분' 을 00, 01, 02 이런식으로 표시하게끔 하는 코드
  time.minutes = currentTime.getMinutes().toString().padStart(2, '0');

  if (currentTime.getSeconds() < 10) {
    time.seconds = `0${currentTime.getSeconds()}`;
  } else {
    time.seconds = currentTime.getSeconds();
  }

  time.year = currentTime.getFullYear();
  time.month = currentTime.getMonth() + 1;
  time.date = currentTime.getDate();

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  time.day = days[currentTime.getDay()];

  if (currentTime.toLocaleTimeString('ko-kr').includes('오전')) {
    time.amPm = 'AM';
  } else {
    time.amPm = 'PM';
  }

  return time;
}
