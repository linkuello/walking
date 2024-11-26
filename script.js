function sendRequest() {
    // Отображение сообщения благодарности
    const thankYouSection = document.getElementById('thank-you');
    thankYouSection.classList.remove('hidden');
    thankYouSection.style.display = 'block';

    // Запуск фейерверков
    const fireworks = document.querySelectorAll('.fireworks');
    fireworks.forEach((fw, index) => {
        fw.style.left = `${index % 2 === 0 ? '10%' : '90%'}`;
        fw.style.top = `${Math.random() * 50 + 20}%`;
    });
}
