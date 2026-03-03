fetch('nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;
    initNav(); //nav 요소가 DOM에 추가된 후 이벤트 초기화
  });

  

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.side-menu-btn');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const panel = document.getElementById(targetId);

      const marginGap = 15; //기존 CSS margin-top 간격
      const panelHeight = panel ? panel.scrollHeight : 0; //패널 없으면 0
      const translateDistance = panelHeight - marginGap;

      //다른 패널 닫고, 아래 메뉴 위치 초기화
      buttons.forEach((btn, i) => {
        const otherPanelId = btn.dataset.target;
        const otherPanel = document.getElementById(otherPanelId);

        if (otherPanelId !== targetId) {
          //패널이 있을 때만 classList 조작
          if (otherPanel) {
            otherPanel.classList.remove('active');
          }
          btn.classList.remove('active');

          //클릭한 버튼 아래 메뉴 원위치
          if (i > index) {
            btn.parentElement.style.transform = 'translateY(0)';
          }
        }
      });

      //클릭한 버튼/패널 토글
      if (panel) {
        panel.classList.toggle('active');
      }
      button.classList.toggle('active');

      //클릭한 버튼 아래 메뉴 밀기 or 원위치
      buttons.forEach((btn, i) => {
        if (i > index) {
          if (panel && panel.classList.contains('active')) {
            btn.parentElement.style.transform = `translateY(${translateDistance}px)`;
          } else {
            btn.parentElement.style.transform = 'translateY(0)';
          }
        }
      });
    });
  });
});
