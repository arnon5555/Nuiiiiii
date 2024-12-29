document.getElementById('submit').addEventListener('click', function () {
    const answer = document.getElementById('answer').value.trim();
    if (answer === 'รัก') {
        document.getElementById('surprise').classList.remove('hidden');
    } else {
        alert('คำตอบไม่ถูกต้อง ลองอีกครั้ง!');
    }
});