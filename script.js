function checkPassword() {
    const inputPassword = document.getElementById('password').value;
    const correctPassword = '@0108';
    const errorMessage = document.getElementById('error-message');

    if (inputPassword === correctPassword) {
        errorMessage.textContent = '';
        alert('認証成功！ようこそ！');
        window.location.href = 'works.html'; // works.htmlに遷移
    } else {
        errorMessage.textContent = 'パスワードが違います。もう一度入力してください。';
    }
}
function toggleCategory(categoryId) {
    const categoryContent = document.getElementById(categoryId);
    if (categoryContent.style.display === 'none' || categoryContent.style.display === '') {
        categoryContent.style.display = 'block';
    } else {
        categoryContent.style.display = 'none';
    }
}
