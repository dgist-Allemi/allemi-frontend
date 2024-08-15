document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "yujung0819@dgsw.hs.kr" && password === "password") {
        alert('로그인에 성공했습니다.');
        window.location.href = '../html/allergy.html'; // 로그인 후 이동할 페이지
    } else {
        alert('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
});