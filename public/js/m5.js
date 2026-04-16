import { initAnimations } from './modules/animations.js';
import { initVideoEngine } from './modules/video.js';
import { initModals } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Запуск анимаций появления (AOS)
    initAnimations();

    // 2. Запуск видео-двигателя
    initVideoEngine();

    // 3. Запуск модальных окон ТТХ
    initModals();
    
    console.log("/// M5 System Fully Loaded");
});