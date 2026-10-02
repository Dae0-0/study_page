// .btn-menu 요소를 가져와 btn 변수에 저장
const btn = document.querySelector('.btn-menu');
// .main-nav 요소를 가져와 nav 변수에 저장.
const nav = document.querySelector('.main-nav');

// 버튼을 클릭하면..
btn.addEventListener('click', () => {
    // nav 요소의 클래스에 'open-menu'를 토글한다.
    nav.classList.toggle('open-menu');
    // 만약 btn 요소의 innerHTML 이 'Menu'인 경우
    if(btn.innerHTML === 'Menu') {
        // btn 요소의 innerHTML을 'Close'로 변경
        btn.innerHTML = 'Close' ;
    } 
    else {
        // btn요소의 innerHTML을 'Menu'로 변경
        btn.innerHTML = 'Menu';
    }
});

// 다크 모드 버튼
const themeBtn = document.querySelector('.btn-theme');

themeBtn.addEventListener('click', () => {
    // body에 'dark' 클래스를 붙였다 뗀다.
    document.body.classList.toggle('dark');
    // body에 'dark' 클래스가 있으면 해 아이콘, 없으면 달 아이콘으로 변경
    if (document.body.classList.contains('dark')) {
        themeBtn.innerHTML = '☀️';
    } else {
        themeBtn.innerHTML = '🌙';
    }
});

// 신청 폼 글자 수 세기
const textarea = document.querySelector('.apply-textarea');
const charCount = document.querySelector('.char-count');

// 글자를 입력할 때마다('input' 이벤트) 실행
textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    charCount.textContent = length + ' / 200자';

    // 180자 이상이면 경고 스타일(warn)을 붙이고, 아니면 뗀다.
    if (length >= 180) {
        charCount.classList.add('warn'); // warn 클래스 붙이기
    } else {
        charCount.classList.remove('warn'); // warn 클래스 떼기
    }
});

// 디지털 시계 (날짜 + 시간)
const clockDate = document.querySelector('.clock-date');
const clockTime = document.querySelector('.clock-time');
const days = ['일', '월', '화', '수', '목', '금', '토'];

function updateClock() {
    const now = new Date();

    // 날짜
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const date = now.getDate();
    const day = days[now.getDay()]; // 요일은 0(일)~6(토) 숫자로 나옴
    clockDate.textContent = year + '년 ' + month + '월 ' + date + '일  (' + day + ')'

    // 시각
    // STring(값).padStart(2, '0') - 값을 글자로 바꾼 뒤, 두자리가 되도록 앞에 '0'을 사용
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockTime.textContent = h + ':' + m + ':' + s;
}

updateClock(); // 함수 호출, 페이지를 열자마자 한 번 실행

// 정해진 시간(밀리초)마다 함수를 계속 실행
setInterval(updateClock, 1000); // 이후 1초마다 반복 실행

// 커리큘럼 탭 메뉴
const tabBtns = document.querySelectorAll('.tab-btn'); // 모든 탭 버튼을 가져와 tabBtns 변수에 저장
const tabPanels = document.querySelectorAll('.tab-panel'); // 모든 탭 패널을 가져와 tabPanels 변수에 저장

tabBtns.forEach((tab) => { // 각 탭 버튼에 클릭 이벤트를 등록
    tab.addEventListener('click', () => { // 클릭하면 실행되는 함수
        tabBtns.forEach((b) => b.classList.remove('active')); // 클릭한 버튼에만 active 클래스 붙이기
        // 클릭한 버튼의 data-tab 속성값과 같은 id를 가진 패널에 active 클래스 붙이기
        tabPanels.forEach((p) => p.classList.remove('active')); 

        // 클릭한 버튼에 active 클래스 붙이기
        tab.classList.add('active');
        // 클릭한 버튼의 data-tab 속성값과 같은 id를 가진 패널에 active 클래스 붙이기
        document.getElementById(tab.dataset.tab).classList.add('active'); 
    });
});

// 스터디 사진 갤러리
const galleryMain = document.querySelector('.gallery-main'); // 큰 사진
const galleryThumbs = document.querySelectorAll('.gallery-thumbs img'); // 작은 사진들

galleryThumbs.forEach((thumb) => { // 작은 사진들 각각에 클릭 이벤트 등록
    thumb.addEventListener('click', () => { // 클릭하면 실행되는 함수
        galleryMain.src = thumb.src; // 큰 사진의 src를 클릭한 작은 사진의 src로 변경
        galleryMain.alt = thumb.alt; // 큰 사진의 alt를 클릭한 작은 사진의 alt로 변경

        // 모든 작은 사진에서 active 클래스 제거
        galleryThumbs.forEach((t) => t.classList.remove('active'));
        // 클릭한 작은 사진에만 active 클래스 추가
        thumb.classList.add('active');
    });
});