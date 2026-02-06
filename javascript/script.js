/* 네비 스크립트 */
let menuItems = document.querySelectorAll('.menu-item');
let subMenus = document.querySelectorAll('.sub-menu');

function closeAll() {
  subMenus.forEach(sub => sub.classList.remove('active'));
}
//메인 메뉴 아이템에 마우스를 올렸을 때
menuItems.forEach(item => {
  item.addEventListener('mouseenter', function(){
    closeAll(); //일단 다 닫고
    let targetId = this.dataset.target;
    let target = document.getElementById(targetId);
    if(target){
      target.classList.add('active'); //해당 메뉴만 열기
    }
  });
});
//서브 메뉴 영역 자체에 마우스가 들어오고 나갈때
subMenus.forEach(sub => {
  //서브 메뉴 안에 마우스가 있을 때는 닫히지 않음(CSS active 유지)  
  //서브 메뉴 영역을 완전히 벗어날 때만 닫기
  sub.addEventListener('mouseleave', function(){
    closeAll();
  });
});

let searchBtn = document.getElementById('search-btn');
let searchBar = document.getElementById('search-bar');
let searchClose = document.getElementById('search-close');

searchBtn.addEventListener('click', function(){
  searchBar.classList.toggle('active')
  if(searchBar.classList.contains('active')){
    searchBar.querySelector('.search-bar-wrap').focus()
  }
})
searchClose.addEventListener('click', function(){
  searchBar.classList.remove('active')
})

searchBtn.addEventListener('mouseenter', function(){
  subMenus.forEach(sub => sub.classList.remove('active'));
});




/* 최신소식 탭 */
let newsBtn = document.querySelectorAll('.news-btn');
let newsList = document.querySelectorAll('.news-list');

newsBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);

    //1️⃣모든 뉴스 닫기
    newsList.forEach(list => {
      list.classList.remove('active');
    });

    //2️⃣모든 버튼 active 제거
    newsBtn.forEach(b => {
      b.classList.remove('active');
    });

    //3️⃣클릭한 뉴스 & 버튼만 active
    if (target) {
      target.classList.add('active');
      btn.classList.add('active');
    }
  });
});



/* 지금 국립공원 슬라이드 */
const slides = document.querySelectorAll('.gallery-slide');
const slideWrap = document.querySelector('.slide-wrap');
const control = document.querySelector('.gallery-control');
const galleryBtn = document.querySelectorAll('.gallery-btn');

function updateSlidePosition(slide) {
  const wrapRect = slideWrap.getBoundingClientRect();
  const lastImg = slide.querySelector('img:last-child');
  if (!lastImg) return;

  // 마지막 이미지 오른쪽 끝 좌표
  const lastImgRect = lastImg.getBoundingClientRect();
  const RIGHT_PADDING = 30; // 오른쪽 여유 px
  // 현재 slide 이동값
  const currentTransform = slide.style.transform
    ? parseFloat(slide.style.transform.replace(/translateX\(-?(\d+)px\)/, '$1')) || 0
    : 0;

  // 최대 이동 가능한 거리: 마지막 이미지가 wrap 끝에 딱 맞도록 계산
  let maxMove = slide.scrollWidth - slideWrap.offsetWidth + RIGHT_PADDING;

  // range 비율 적용
  const percent = control.value / 100;
  const moveX = Math.min(maxMove, maxMove * percent);

  slide.style.transform = `translateX(-${moveX}px)`;
}

/* range 조작 */
control.addEventListener('input', () => {
  const activeSlide = document.querySelector('.gallery-slide.active');
  if (activeSlide) updateSlidePosition(activeSlide);
});

/* 탭 클릭 */
galleryBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    slides.forEach(slide => {
      slide.classList.remove('active');
      slide.style.transform = 'translateX(0)';
    });
    galleryBtns.forEach(b => b.classList.remove('active'));

    const target = document.getElementById(btn.dataset.target);
    if (!target) return;

    target.classList.add('active');
    btn.classList.add('active');

    control.value = 0;
    updateSlidePosition(target);
  });
});

/* 화면 리사이즈 대응 */
window.addEventListener('resize', () => {
  const activeSlide = document.querySelector('.gallery-slide.active');
  if (activeSlide) updateSlidePosition(activeSlide);
});




/* 지금 국립공원은 탭 */
let gallerySlide = document.querySelectorAll('.gallery-slide');

galleryBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);

    //1️⃣모든 슬라이드 active 제거
    gallerySlide.forEach(list => {
      list.classList.remove('active');
    });

    //2️⃣모든 버튼 active 제거 ← 여기 수정!
    galleryBtn.forEach(b => {
      b.classList.remove('active');
    });

    //3️⃣클릭한 슬라이드 & 버튼만 active
    if (target) {
      target.classList.add('active');
      btn.classList.add('active');
    }
  });
});



const toggle = document.getElementById('toggle');
const mobileMenu = document.getElementById('mobile-Menu');

let scrollPosition = 0; //메뉴 열 때 현재 스크롤 위치 저장

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const isActive = mobileMenu.classList.toggle('active');

    if (isActive) {
      //메뉴 열리면
      scrollPosition = window.scrollY; //현재 스크롤 위치 저장
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';

      mobileMenu.style.overflow = 'auto'; //메뉴 내부 스크롤 허용
    } else {
      //메뉴 닫으면
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';

      window.scrollTo(0, scrollPosition); //이전 스크롤 위치로 복원
      mobileMenu.style.overflow = 'hidden'; //메뉴 내부 스크롤 막기
    }
  });
} else {
  document.body.style.overflow = 'auto'; //페이지 기본 스크롤 허용
  mobileMenu.style.overflow = 'hidden'; //메뉴 내부 스크롤 막기
}

//1단 아코디언
const menuTitles = document.querySelectorAll('.accordion-menu-title');

menuTitles.forEach(menuTitle => {
  menuTitle.addEventListener('click', e => {
    e.preventDefault();

    const menu = menuTitle.parentElement; //.accordion-menu
    const isOpen = menu.classList.contains('active');

    //모든 1단 메뉴 닫기
    document.querySelectorAll('.accordion-menu').forEach(m => {
      m.classList.remove('active');
    });
    document.querySelectorAll('.accordion-menu-title').forEach(t => {
      t.classList.remove('active');
    });
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
    });
    document.querySelectorAll('.accordion-content').forEach(c => {
      c.classList.remove('active');
    });

    //닫혀있던 경우만 열기
    if (!isOpen) {
      menu.classList.add('active');
      menuTitle.classList.add('active');

      menu.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.add('active');
      });
    }
  });
});

//2단 아코디언: accordion-title → accordion-content
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');

  //content 없는 항목은 무시
  if (!title || !content) return;

  title.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = content.classList.contains('active');

    //같은 메뉴 안 content 닫기
    const contents = item.parentElement.querySelectorAll('.accordion-content');
    contents.forEach(c => c.classList.remove('active'));

    //다시 열기
    if (!isOpen) {
      content.classList.add('active');
    }
    else {
      content.classList.remove('active');
    }
  });
});



/* 메인 페이지 팝업 */
let mainPopup = document.getElementById("modal");
let mainClose = document.querySelector(".popup-close");

mainClose.addEventListener('click', () => {
  mainPopup.classList.remove('active');
})