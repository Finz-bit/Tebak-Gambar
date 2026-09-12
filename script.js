// Database 30+ Level (Dapat ditambah dengan pola yang sama)
const gameLevels = [
    // Checkpoint 1: Level 1 - 9 (Tanpa Timer, Gagal balik ke Level 1)
    { level: 1, category: "Nama Buah", answer: "apel", image: "assets/images/level1.jpg", hint: "Buah favorit berwarna merah atau hijau." },
    { level: 2, category: "Nama Hewan", answer: "kucing", image: "assets/images/level2.jpg", hint: "Hewan berbulu yang gemar mengeong." },
    { level: 3, category: "Benda Sekitar", answer: "pensil", image: "assets/images/level3.jpg", hint: "Alat tulis yang bisa dihapus." },
    { level: 4, category: "Nama Buah", answer: "pisang", image: "assets/images/level4.jpg", hint: "Buah manis berwarna kuning melengkung." },
    { level: 5, category: "Nama Kendaraan", answer: "mobil", image: "assets/images/level5.jpg", hint: "Kendaraan beroda empat." },
    { level: 6, category: "Nama Hewan", answer: "gajah", image: "assets/images/level6.jpg", hint: "Hewan berbelalai panjang." },
    { level: 7, category: "Benda Sekitar", answer: "sepatu", image: "assets/images/level7.jpg", hint: "Alas kaki yang dipakai di kaki." },
    { level: 8, category: "Nama Buah", answer: "semangka", image: "assets/images/level8.jpg", hint: "Buah besar dengan daging air berwarna merah/kuning." },
    { level: 9, category: "Nama Kendaraan", answer: "pesawat", image: "assets/images/level9.jpg", hint: "Kendaraan yang terbang di udara." },
    
    // Boss Level / Stage Checkpoint 1 (Level 10) - Timer 40s, Gagal balik ke Level 1
    { level: 10, category: "Ibukota Negara", answer: "tokyo", image: "assets/images/level10.jpg", hint: "Ibukota negara Jepang." },

    // Checkpoint 2: Level 11 - 19 (Tanpa Timer, Gagal balik ke Level 11)
    { level: 11, category: "Nama Negara", answer: "indonesia", image: "assets/images/level11.jpg", hint: "Negeri nusantara tempat kita tinggal." },
    { level: 12, category: "Nama Negara", answer: "jepang", image: "assets/images/level12.jpg", hint: "Negeri Sakura." },
    { level: 13, category: "Nama Tokoh", answer: "einstein", image: "assets/images/level13.jpg", hint: "Filsuf fisika penemu teori relativitas (E=mc²)." },
    { level: 14, category: "Objek Angkasa", answer: "bulan", image: "assets/images/level14.jpg", hint: "Satelit alami bumi." },
    { level: 15, category: "Nama Bangunan", answer: "monas", image: "assets/images/level15.jpg", hint: "Tugu peringatan di Jakarta beremas." },
    { level: 16, category: "Nama Kota", answer: "bandung", image: "assets/images/level16.jpg", hint: "Kota Kembang / Paris van Java." },
    { level: 17, category: "Nama Kota", answer: "surabaya", image: "assets/images/level17.jpg", hint: "Kota Pahlawan." },
    { level: 18, category: "Nama Hewan", answer: "harimau", image: "assets/images/level18.jpg", hint: "Kucing besar belang khas hutan tropis." },
    { level: 19, category: "Nama Buah", answer: "durian", image: "assets/images/level19.jpg", hint: "Raja buah yang berduri dan berbau tajam." },

    // Boss Level / Stage Checkpoint 2 (Level 20) - Timer 40s, Gagal balik ke Level 11
    { level: 20, category: "Keajaiban Dunia", answer: "colosseum", image: "assets/images/level20.jpg", hint: "Amfiteater kuno di Roma, Italia." },

    // Checkpoint 3: Level 21 - 29 (Tanpa Timer, Gagal balik ke Level 21)
    { level: 21, category: "Nama Hewan", answer: "kanguru", image: "assets/images/level21.jpg", hint: "Hewan berkantung asal Australia." },
    { level: 22, category: "Nama Negara", answer: "mesir", image: "assets/images/level22.jpg", hint: "Negeri Piramida." },
    { level: 23, category: "Benda Teknologi", answer: "laptop", image: "assets/images/level23.jpg", hint: "Komputer jinjing portabel." },
    { level: 24, category: "Nama Bunga", answer: "mawar", image: "assets/images/level24.jpg", hint: "Bunga cantik berduri yang romantis." },
    { level: 25, category: "Nama Alat Musik", answer: "gitar", image: "assets/images/level25.jpg", hint: "Alat musik petik berpapan nada." },
    { level: 26, category: "Nama Olahraga", answer: "basket", image: "assets/images/level26.jpg", hint: "Olahraga memasukkan bola ke ring tinggi." },
    { level: 27, category: "Nama Olahraga", answer: "bulutangkis", image: "assets/images/level27.jpg", hint: "Olahraga raket menggunakan kok (shuttlecock)." },
    { level: 28, category: "Nama Planet", answer: "mars", image: "assets/images/level28.jpg", hint: "Planet merah di tata surya." },
    { level: 29, category: "Nama Lautan", answer: "pasifik", image: "assets/images/level29.jpg", hint: "Samudera terluas di dunia." },

    // Boss Level / Stage Checkpoint 3 (Level 30) - Timer 40s, Gagal balik ke Level 21
    { level: 30, category: "Keajaiban Dunia", answer: "pyramid", image: "assets/images/level30.jpg", hint: "Makam megah firaun di Giza." }
];

// State Game
let gameState = {
    score: parseInt(localStorage.getItem('tg_score')) || 0,
    currentLevel: parseInt(localStorage.getItem('tg_level')) || 1,
    highestLevel: parseInt(localStorage.getItem('tg_highest')) || 1,
    hintUsed: false
};

let timerInterval = null;
let timeLeft = 40;

// Elemen DOM
const scoreEl = document.getElementById('score');
const currentLevelEl = document.getElementById('current-level');
const timerContainer = document.getElementById('timer-container');
const timerEl = document.getElementById('timer');
const categoryTag = document.getElementById('category-tag');
const checkpointInfo = document.getElementById('checkpoint-info');
const gameImage = document.getElementById('game-image');
const imageLoading = document.getElementById('image-loading');
const btnHint = document.getElementById('btn-hint');
const hintText = document.getElementById('hint-text');
const userAnswer = document.getElementById('user-answer');
const btnSubmit = document.getElementById('btn-submit');
const btnResetProgress = document.getElementById('btn-reset-progress');

const modal = document.getElementById('game-modal');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalStats = document.getElementById('modal-stats');
const finalScore = document.getElementById('final-score');
const finalLevel = document.getElementById('final-level');
const modalBtn = document.getElementById('modal-btn');

// Web Audio API untuk Efek Suara Sederhana (Tanpa File Eksternal)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'timeout') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.setValueAtTime(150, now + 0.2);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
    }
}

// Inisialisasi Game
function initGame() {
    updateUI();
    loadLevelData();
}

function updateUI() {
    scoreEl.textContent = gameState.score;
    currentLevelEl.textContent = gameState.currentLevel;
    
    // Tentukan Checkpoint aktif berdasarkan aturan
    let currentCheckpoint = Math.floor((gameState.currentLevel - 1) / 10) * 10 + 1;
    checkpointInfo.textContent = `Checkpoint: Level ${currentCheckpoint}`;

    // Simpan ke localStorage
    localStorage.setItem('tg_score', gameState.score);
    localStorage.setItem('tg_level', gameState.currentLevel);
    if (gameState.currentLevel > gameState.highestLevel) {
        gameState.highestLevel = gameState.currentLevel;
        localStorage.setItem('tg_highest', gameState.highestLevel);
    }
}

function loadLevelData() {
    // Cek jika game tamat (melebihi jumlah level data)
    if (gameState.currentLevel > gameLevels.length) {
        showModal(
            "🏆", 
            "SELAMAT! KAMU MENANG!", 
            "Kamu telah berhasil menyelesaikan seluruh level game tebakan ini dengan luar biasa!", 
            true, 
            () => { resetGameProgress(); }
        );
        return;
    }

    const currentData = gameLevels.find(l => l.level === gameState.currentLevel);
    if (!currentData) return;

    // Reset State per Level
    gameState.hintUsed = false;
    hintText.classList.add('hidden');
    hintText.textContent = '';
    userAnswer.value = '';
    imageLoading.classList.remove('hidden');

    // Load Gambar
    gameImage.src = currentData.image;
    gameImage.onload = () => {
        imageLoading.classList.add('hidden');
    };
    gameImage.onerror = () => {
        // Fallback jika file gambar belum ada/gagal dimuat
        imageLoading.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Gambar "${currentData.image}" belum ada di folder assets/images/`;
    };

    categoryTag.textContent = `Kategori: ${currentData.category}`;

    // Cek apakah ini Boss Level kelipatan 10 (Gunakan Timer 40 detik)
    if (gameState.currentLevel % 10 === 0) {
        timerContainer.classList.remove('hidden');
        startTimer();
    } else {
        timerContainer.classList.add('hidden');
        stopTimer();
    }
}

// Logika Timer Boss Level
function startTimer() {
    stopTimer();
    timeLeft = 40;
    timerEl.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            stopTimer();
            playSound('timeout');
            handleFailure("Waktu Habis!", "Waktu untuk menjawab boss level ini telah habis.");
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Tombol Jawab Ditekan
function checkAnswer() {
    const currentData = gameLevels.find(l => l.level === gameState.currentLevel);
    if (!currentData) return;

    const userCleanInput = userAnswer.value.trim().toLowerCase();

    if (userCleanInput === "") {
        userAnswer.focus();
        return;
    }

    stopTimer();

    if (userCleanInput === currentData.answer.toLowerCase()) {
        // BENAR
        playSound('correct');
        let pointsEarned = gameState.hintUsed ? 5 : 10; // Bonus jika tidak pakai hint
        gameState.score += pointsEarned;
        gameState.currentLevel++;
        updateUI();

        showModal(
            "🎉", 
            "JAWABAN BENAR!", 
            `Hebat! Kamu mendapatkan +${pointsEarned} poin. Lanjut ke level berikutnya.`, 
            false, 
            () => { loadLevelData(); }
        );
    } else {
        // SALAH
        playSound('wrong');
        handleFailure("Jawaban Salah!", `Sayang sekali jawabanmu kurang tepat.`);
    }
}

// Aturan Kegagalan & Checkpoint Spesifik
function handleFailure(title, message) {
    stopTimer();
    
    // Perhitungan Checkpoint Mundur Sesuai Aturan:
    // Level 1-9 -> Checkpoint 1 (Kembali ke Level 1)
    // Level 10 -> Checkpoint 1 (Kembali ke Level 1)
    // Level 11-19 -> Checkpoint 11 (Kembali ke Level 11)
    // Level 20 -> Checkpoint 11 (Kembali ke Level 11)
    // Level 21-29 -> Checkpoint 21 (Kembali ke Level 21)
    // Level 30 -> Checkpoint 21 (Kembali ke Level 21)
    
    let currentLevelNum = gameState.currentLevel;
    let targetCheckpoint;

    if (currentLevelNum % 10 === 0) {
        // Jika gagal di Boss Level (misal Level 10, 20, 30)
        targetCheckpoint = currentLevelNum - 9;
    } else {
        // Jika gagal di level biasa (misal 1-9, 11-19, 21-29)
        targetCheckpoint = Math.floor((currentLevelNum - 1) / 10) * 10 + 1;
    }

    gameState.currentLevel = targetCheckpoint;
    updateUI();

    showModal(
        "💥", 
        title, 
        `${message} Berdasarkan aturan checkpoint, kamu dikembalikan ke **Level ${targetCheckpoint}**.`, 
        false, 
        () => { loadLevelData(); }
    );
}

// Sistem Hint / Bantuan
btnHint.addEventListener('click', () => {
    if (gameState.hintUsed) return;
    
    const currentData = gameLevels.find(l => l.level === gameState.currentLevel);
    if (!currentData) return;

    if (gameState.score < 10) {
        alert("Poin kamu tidak cukup untuk membuka petunjuk! (Butuh min. 10 poin)");
        return;
    }

    gameState.score -= 10;
    gameState.hintUsed = true;
    updateUI();

    hintText.textContent = `💡 Petunjuk: ${currentData.hint} (Panjang kata: ${currentData.answer.length} huruf)`;
    hintText.classList.remove('hidden');
});

// Event Listeners Input & Tombol
btnSubmit.addEventListener('click', checkAnswer);
userAnswer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

btnResetProgress.addEventListener('click', () => {
    if (confirm("Apakah kamu yakin ingin mereset seluruh progress permainan dari awal?")) {
        resetGameProgress();
    }
});

function resetGameProgress() {
    localStorage.removeItem('tg_score');
    localStorage.removeItem('tg_level');
    localStorage.removeItem('tg_highest');
    gameState.score = 0;
    gameState.currentLevel = 1;
    gameState.highestLevel = 1;
    stopTimer();
    updateUI();
    loadLevelData();
}

// Fungsi Helper Modal Pop-up
function showModal(icon, title, message, showStats = false, callback = null) {
    modalIcon.textContent = icon;
    modalTitle.textContent = title;
    modalMessage.innerHTML = message;
    
    if (showStats) {
        finalScore.textContent = gameState.score;
        finalLevel.textContent = gameState.highestLevel;
        modalStats.classList.remove('hidden');
    } else {
        modalStats.classList.add('hidden');
    }

    modal.classList.remove('hidden');

    // Handle tombol modal sekali klik
    const newBtn = modalBtn.cloneNode(true);
    modalBtn.parentNode.replaceChild(newBtn, modalBtn);
    
    newBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        if (callback) callback();
    });
}

// Jalankan game saat halaman dimuat
window.addEventListener('DOMContentLoaded', initGame);
