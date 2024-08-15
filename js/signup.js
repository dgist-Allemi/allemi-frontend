// 샘플 학교 데이터
let schools = ["서울고등학교", "부산고등학교", "대구소프트웨어마이스터고등학교"];

// 학교 리스트 갱신
function updateSchoolList() {
    const schoolList = document.getElementById('school-list');
    schoolList.innerHTML = '';
    
    schools.forEach((school, index) => {
        const li = document.createElement('li');
        li.textContent = school;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = function() {
            deleteSchool(index);
        };
        li.appendChild(deleteButton);
        schoolList.appendChild(li);
    });
}

// 학교 추가
document.getElementById('school-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newSchoolName = document.getElementById('new-school-name').value.trim();
    if (newSchoolName && !schools.includes(newSchoolName)) {
        schools.push(newSchoolName);
        updateSchoolList();
        document.getElementById('new-school-name').value = ''; // 입력 필드 초기화
    } else {
        alert('이미 존재하는 학교이거나 유효하지 않은 이름입니다.');
    }
});

// 학교 삭제
function deleteSchool(index) {
    schools.splice(index, 1);
    updateSchoolList();
}

// 로그인 폼 처리
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const schoolName = document.getElementById('school-name').value.trim();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (schools.includes(schoolName)) {
        // 로그인 성공 시 처리 (예: 다음 페이지로 이동)
        alert(`학교명: ${schoolName}로 로그인되었습니다.`);
        window.location.href = '../html/allergy.html'; // 로그인 후 이동할 페이지
    } else {
        // 학교명이 없는 경우 경고
        alert('입력한 학교명을 찾을 수 없습니다. 다시 입력해주세요.');
    }
});

// 페이지 로드 시 학교 리스트 초기화
updateSchoolList();
