const noticeList = [
  {
    no: 1916,
    park: "본사",
    title: "국립공원 사칭 물품 납품 요구 신종 사기 수법 주의 안내",
    writer: "홍보실",
    views: 5098,
    date: "2025.06.13"
  },
  {
    no: 1915,
    park: "본사",
    title: "국립공원공단 공공건축심의위원회 위원 후보자 모집 안내",
    writer: "홍보실",
    views: 443,
    date: "2025.12.08"
  },
  {
    no: 1914,
    park: "본사",
    title: "[크리스마스 한정판 굿즈 출시] 국립공원 굿즈와 함께하세요!",
    writer: "디자인실",
    views: 1451,
    date: "2025.12.01"
  },
  {
    no: 1913,
    park: "본사",
    title: "국립공원 시설사용료 인상 및 할인제도 확대 알림예산부",
    writer: "예산부",
    views: 840,
    date: "2025.11.28"
  },
  {
    no: 1912,
    park: "본사",
    title: "2026년 국립공원 달력 이미지(화면보호기, 바탕화면,…",
    writer: "홍보실",
    views: 4200,
    date: "2025.11.24"
  },
  {
    no: 1911,
    park: "본사",
    title: "국립공원수입징수규칙 일부개정(안)에 대한 이해관계인 의…",
    writer: "예산부",
    views: 358,
    date: "2025.11.21"
  },
  {
    no: 1910,
    park: "본사",
    title: "산림·자연공원·관광지 등에서 불법행위 금지 및 캠페인 안내",
    writer: "홍보실",
    views: 427,
    date: "2025.11.19"
  },
  {
    no: 1909,
    park: "본사",
    title: "국립공원 시설사용료 조정안에 대한 이해관계인 의견 청취…",
    writer: "예산부",
    views: 449,
    date: "2025.11.12"
  },
  {
    no: 1908,
    park: "본사",
    title: "2026년 국립공원달력 교보문고 온라인 서점에서 예약 …",
    writer: "홍보실",
    views: 958,
    date: "2025.06.13"
  },
  {
    no: 1907,
    park: "본사",
    title: "25년 국립공원 재난안전 콘텐츠 공모전 수상자안전대책부",
    writer: "안전대책부",
    views: 715,
    date: "2025.06.13"
  },
  {
    no: 1906,
    park: "본사",
    title: "’25년 국립공원 재난안전 콘텐츠 공모전 수상자",
    writer: "안전대책부",
    views: 715,
    date: "2025.10.23"
  },
  {
    no: 1905,
    park: "본사",
    title: "2025년 가을철 국립공원 탐방로 출입 통제 공고",
    writer: "안전대책부",
    views: 8114,
    date: "2025.10.21"
  },
  {
    no: 1904,
    park: "본사",
    title: "	국립공원 멤버십 데이 행사 당첨자 명단 공개",
    writer: "고객만족실",
    views: 545,
    date: "2025.10.13"
  },
  {
    no: 1903,
    park: "본사",
    title: "	국립공원 멤버십 데이 참여 안내",
    writer: "고객만족실",
    views: 895,
    date: "2025.10.01"
  },
  {
    no: 1902,
    park: "본사",
    title: "가을철 밀집지역 인파사고 예방 안전수칙",
    writer: "안전대책부",
    views: 31,
    date: "2025.11.12"
  },
  {
    no: 1901,
    park: "본사",
    title: "국립공원 숲 속 피크닉존 운영 안내",
    writer: "고객만족실",
    views: 650,
    date: "2025.09.30"
  },
  {
    no: 1900,
    park: "본사",
    title: "국립공원 서비스 만족도조사 관련 개인정보처리의 위탁사항 알림",
    writer: "고객만족실",
    views: 181,
    date: "2025.09.26"
  }
  ,
  {
    no: 1899,
    park: "본사",
    title: "국립공원 재난·안전신고 「국립공원 안전똑똑」 채널 시범운영",
    writer: "재난관리부",
    views: 657,
    date: "2025.09.24"
  }
  ,
  {
    no: 1898,
    park: "본사",
    title: "「교통약자 대상 국립공원 명소 이용 편의 서비스」 참가…",
    writer: "탐방정책부",
    views: 593,
    date: "2025.09.03"
  }
  ,
  {
    no: 1897,
    park: "본사",
    title: "국립공원 멤버십 야영장 할인쿠폰 지급 일정 알림",
    writer: "고객만족실",
    views: 762,
    date: "2025.08.29"
  }
  ,
  {
    no: 1896,
    park: "본사",
    title: "국립공원 멤버십 제도 시행 알림",
    writer: "고객만족실",
    views: 979,
    date: "2025.08.22"
  },
  {
    no: 1895,
    park: "본사",
    title: "금정산, 도심 최초 국립공원 지정 기원 나만의 우표 구…",
    writer: "홍보실",
    views: 1046,
    date: "2025.08.13"
  },
  {
    no: 1894,
    park: "본사",
    title: "[8.13.온라인 판매 완료] 광복 80주년 기념, 국…",
    writer: "생태디자인실",
    views: 1390,
    date: "2025.08.05"
  },
  {
    no: 1893,
    park: "본사",
    title: "[홍보실] 국립공원 SNS 레인저 1기 모집",
    writer: "홍보실",
    views: 1124,
    date: "2025.07.28"
  },
  {
    no: 1892,
    park: "본사",
    title: "국립공원 여름 성수기 사전예고 집중단속 공고",
    writer: "환경관리부",
    views: 984,
    date: "2025.07.17"
  },
  {
    no: 1891,
    park: "본사",
    title: "금정산국립공원 지정 및 공원계획 전략환경영향평가서(초안…",
    writer: "미래전략부",
    views: 766,
    date: "2025.07.11"
  },
  {
    no: 1890,
    park: "본사",
    title: "공공기관 종합청렴도 평가 관련 개인정보 제3자 제공사항 알림",
    writer: "홍보실",
    views: 464,
    date: "2025.07.11"
  },
  {
    no: 1889,
    park: "본사",
    title: "[상품공모 결과안내] 캐릭터 상품공모 심사 결과 안내드립니다",
    writer: "생태디자인실",
    views: 727,
    date: "2025.07.10"
  },
  {
    no: 1888,
    park: "본사",
    title: "2025년 상반기 국립공원 서비스 경험조사 실시 안내",
    writer: "고객만족실",
    views: 179,
    date: "2025.07.09"
  },
  {
    no: 1887,
    park: "본사",
    title: "국립공원 홈페이지 국민소통 페이지 개선 안내",
    writer: "고객만족실",
    views: 372,
    date: "2025.07.02"
  }
];




const tbody = document.getElementById("notice-body");
const selectionNumber = document.getElementById("selection-number");
const searchType = document.getElementById("search-type");
const searchText = document.getElementById("search-text");
const noticeNumber = document.getElementById("notice-number");
const next01 = document.querySelector('.skip-01');   //한 페이지 이동
const next10 = document.querySelector('.skip-10');   //10페이지 이동
const searchBtn = document.querySelector(".search-selection .board-btn");

/* 데이터 및 초기값 */
let rowsPerPage = parseInt(selectionNumber.value);  //기본 10개
let filteredList = [...noticeList];
let currentPage = 1;

/* 테이블 렌더링 */
function renderTable() {
  const totalPages = Math.ceil(filteredList.length / rowsPerPage);
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = filteredList.slice(start, end);

  tbody.innerHTML = pageData.map(item => `
    <tr>
      <td>${item.no}</td>
      <td>${item.park}</td>
      <td class="notice-board-title">${item.title}</td>
      <td>${item.writer}</td>
      <td>${item.views}</td>
      <td>${item.date}</td>
    </tr>
  `).join("");

  renderPagination(totalPages);
}

/* 페이지네이션 */
function renderPagination(totalPages) {
  const minPageButtons = 10;  //최소 10개 버튼
  const displayPageCount = Math.max(minPageButtons, totalPages);

  let html = '';
  for (let i = 1; i <= displayPageCount; i++) {
    const disabled = i > totalPages ? 'disabled' : '';
    const active = i === currentPage ? 'active' : '';
    html += `<li><a href="#" class="${active} ${disabled}" data-page="${i}">${i}</a></li>`;
  }

  noticeNumber.innerHTML = html;

   //화살표 항상 보이도록
  next01.style.display = 'block';
  next10.style.display = 'block';
}

/* 검색 */
function applySearch() {
  const type = searchType.value;
  const text = searchText.value.trim().toLowerCase();

  filteredList = text
    ? noticeList.filter(item => item[type].toString().toLowerCase().includes(text))
    : [...noticeList];

  currentPage = 1;
  renderTable();
}




 //페이지당 항목 수 변경
selectionNumber.addEventListener("change", e => {
  rowsPerPage = parseInt(e.target.value);
  currentPage = 1;
  renderTable();
});

 //검색 버튼 클릭
searchBtn.addEventListener("click", applySearch);

 //검색 입력에서 Enter
searchText.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    applySearch();
  }
});

 //페이지 번호 클릭
noticeNumber.addEventListener("click", e => {
  e.preventDefault();
  const target = e.target;
  if (target.tagName !== "A" || target.classList.contains("disabled")) return;
  currentPage = parseInt(target.dataset.page);
  renderTable();
});

 //next01 → 한 페이지 이동
next01.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredList.length / rowsPerPage);
  if (currentPage < totalPages) {
    currentPage += 1;
    renderTable();
  }
});

 //next10 → 10페이지 이동
next10.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredList.length / rowsPerPage);
  currentPage = Math.min(totalPages, currentPage + 10);
  renderTable();
});

/* 초기 렌더링 */
renderTable();
