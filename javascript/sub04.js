const buttons = document.querySelectorAll('.sub-map-btn');
const popup = document.getElementById('map-popup');
const popupClose = document.querySelector('.popup-close');

let isPopupOpen = false; // 팝업 열림 상태 체크

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (isPopupOpen) return; //이미 열려있으면 클릭 무시

    const imgName = btn.getAttribute('data-name');
    const imgPath = `/images/sub04-popup-img${imgName}.svg`;

    //이미지가 존재할 때만 팝업 띄우기
    const testImg = new Image();
    testImg.src = imgPath;

    testImg.onload = () => {
      popup.style.backgroundImage = `url(${imgPath})`;
      popup.style.display = "block";
      isPopupOpen = true; //팝업 열림 상태
    };

    testImg.onerror = () => {
      console.warn(`이미지 없음: ${imgPath}`);
    };
  });
});

// 팝업 닫기
popupClose.addEventListener('click', () => {
  popup.style.display = "none";
  isPopupOpen = false;
});
