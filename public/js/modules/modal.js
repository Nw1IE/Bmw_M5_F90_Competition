const specDetails = {
    power: { title: "Инженерия мощности", value: "850 л.с.", desc: "Установлены гибридные турбины...", img: "/img/Engine.png" },
    accel: { title: "Динамика", value: "2.8 сек", desc: "Первая сотня за 2.8с...", img: "/img/Speed.png" },
    speed: { title: "Максимум", value: "305 км/ч", desc: "Ограничитель снят...", img: "/img/MaxSpeed.png" }
};

export const initModals = () => {
    const modal = document.getElementById('spec-modal');
    const modalContent = document.getElementById('modal-content');
    const modalData = document.getElementById('modal-data');
    const modalImg = document.getElementById('modal-image-container');

    if (!modal) return;

    document.querySelectorAll('[data-spec]').forEach(card => {
        card.addEventListener('click', () => {
            const data = specDetails[card.getAttribute('data-spec')];
            modalData.innerHTML = `
                <h3 class="text-blue-500 uppercase tracking-[4px] text-xs font-bold mb-4">${data.title}</h3>
                <div class="text-5xl font-black text-white mb-6 italic uppercase">${data.value}</div>
                <p class="text-zinc-400 leading-relaxed text-lg font-light">${data.desc}</p>
                <div class="mt-12 flex gap-1">
                    <div class="w-10 h-1 bg-blue-600"></div><div class="w-10 h-1 bg-blue-900"></div><div class="w-10 h-1 bg-red-600"></div>
                </div>`;
            modalImg.style.backgroundImage = `url('${data.img}')`;
            modal.classList.replace('hidden', 'flex');
            setTimeout(() => modalContent.classList.remove('scale-95', 'opacity-0'), 10);
        });
    });

    const closeModal = () => {
        modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => modal.classList.replace('flex', 'hidden'), 300);
    };

    document.getElementById('close-modal').onclick = closeModal;
    document.getElementById('modal-overlay').onclick = closeModal;
};