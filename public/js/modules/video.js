export const initVideoEngine = () => {
    const video = document.getElementById('m5-video');
    const btn = document.getElementById('m-action-btn');
    const overlay = document.getElementById('video-overlay');

    if (!video || !btn) return;

    btn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            video.muted = false; 
            btn.classList.add('active');
            btn.innerText = 'ОСТАНОВИТЬ ДВИГАТЕЛЬ';
            video.classList.add('video-running');
            overlay.classList.add('overlay-clear');
        } else {
            video.pause();
            video.muted = true;
            btn.classList.remove('active');
            btn.innerText = 'ЗАПУСТИТЬ V8';
            video.classList.remove('video-running');
            overlay.classList.remove('overlay-clear');
        }
    });
};