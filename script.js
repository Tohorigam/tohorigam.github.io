// Enhanced Typing Speed Test with Comprehensive Fixes
class RetroTypingSpeedTest {
    constructor() {
        // === LANGUAGE SUPPORT ===
        this.currentLanguage = 'id';
        this.translations = {
            id: {
                title: "TYPING SPEED TEST",
                subtitle: "Selamat datang di tantangan mengetik terakhir!<br>Uji kecepatan, presisi, dan daya tahan Anda.",
                startButton: "MULAI TEST",
                selectMode: "PILIH MODE",
                chooseMode: "Pilih mode tantangan mengetik Anda",
                gameTitle: "TYPING SPEED TEST",
                normalMode: "NORMAL",
                survivalMode: "SURVIVAL",
                proceed: "LANJUT KE TEST",
                normalDesc: "Ketik dengan akurat dan konsisten. Mode yang cocok untuk berlatih dan meningkatkan akurasi.",
                survivalDesc: "Ketik secepat mungkin! Setiap kesalahan mengurangi waktu yang tersisa.",
                timeSettings: "Pengaturan Waktu",
                finalScore: "SKOR AKHIR",
                scoreDescription: "Selesaikan test untuk melihat skor Anda!",
                timeElapsed: "WAKTU TERSISA",
                wpm: "WPM",
                burst: "BURST",
                accuracy: "AKURASI",
                correct: "BENAR",
                wrong: "SALAH",
                time: "WAKTU",
                startTest: "MULAI TEST",
                reset: "RESET",
                performanceChart: "Grafik Performa",
                clickStart: "Klik \"MULAI TEST\" untuk memulai tantangan mengetik...",
                // Results
                outstanding: "Luar biasa! Anda adalah master mengetik! 🏆",
                excellent: "Sangat bagus! Skill mengetik Anda di atas rata-rata! 🎯",
                good: "Kerja bagus! Terus berlatih untuk meningkatkan! 📈",
                keepTrying: "Jangan menyerah! Latihan membuat sempurna! 💪",
                trueSurvivor: "Pebertahanan sejati! Anda bertahan dengan minimal kesalahan! 🛡️",
                wellDoneSurvival: "Kerja bagus! Anda bertahan dalam tantangan mengetik! ⚔️",
                tryAgainSurvival: "Coba lagi! Setiap kesalahan adalah pelajaran! 🎯"
            },
            en: {
                title: "TYPING SPEED TEST",
                subtitle: "Welcome to the ultimate typing challenge!<br>Test your speed, precision, and endurance.",
                startButton: "START TEST",
                selectMode: "SELECT MODE",
                chooseMode: "Choose your typing challenge mode",
                gameTitle: "TYPING SPEED TEST",
                normalMode: "NORMAL",
                survivalMode: "SURVIVAL",
                proceed: "PROCEED TO TEST",
                normalDesc: "Type accurately with consistent pace. Perfect for practice and improving accuracy.",
                survivalDesc: "Type as fast as possible! Each mistake reduces your remaining time.",
                timeSettings: "Time Settings",
                finalScore: "FINAL SCORE",
                scoreDescription: "Complete the test to see your score!",
                timeElapsed: "TIME REMAINING",
                wpm: "WPM",
                burst: "BURST",
                accuracy: "ACCURACY",
                correct: "CORRECT",
                wrong: "WRONG",
                time: "TIME",
                startTest: "START TEST",
                reset: "RESET",
                performanceChart: "Performance Chart",
                clickStart: "Click \"START TEST\" to begin your typing challenge...",
                // Results
                outstanding: "Outstanding! You're a typing master! 🏆",
                excellent: "Excellent! Your typing skills are above average! 🎯",
                good: "Good job! Keep practicing to improve further! 📈",
                keepTrying: "Don't give up! Practice makes perfect! 💪",
                trueSurvivor: "True survivor! You survived with minimal mistakes! 🛡️",
                wellDoneSurvival: "Well done! You survived the typing challenge! ⚔️",
                tryAgainSurvival: "Try again! Every mistake is a lesson learned! 🎯"
            }
        };

        // === EXTENDED WORD-LISTS – BILINGUAL, NO MODE GROUPING ===
        this.textCollections = {
            id: [
                "adalah","air","akan","aku","anda","apa","atas","atau","ayah","bahwa",
                "baru","bisa","buah","buat","cara","cinta","dan","dari","dasar","datang",
                "dengan","depan","dia","dong","dunia","durasi","enam","engkau","gambar","guna",
                "hari","hasil","hati","hidup","hingga","ibu","ingin","ini","itu","jalan",
                "juga","kali","kami","kamu","karena","kecil","kembali","kenapa","kita","lahir",
                "lanjut","lebih","lima","luar","makan","mana","masa","masih","mata","mau",
                "melaju","melihat","memang","menjadi","mereka","meski","milik","minum","mulai","nama",
                "nanas","nanti","nasib","nelayan","noda","nomor","nyala","nyanyi","olah","orang",
                "padi","pakai","paling","panas","para","pasir","pelukis","pohon","punya","putih",
                "ragu","rakit","rasa","rindu","rumah","saja","sakit","sama","satu","saya",
                "sejak","selalu","semua","senang","seperti","siapa","sini","suara","suka","tahun",
                "tak","taman","tangan","tapi","tawa","tentu","tua","tujuh","tulis","uang",
                "ular","umur","undang","untuk","usia","warna","waktu","wibawa","yakin","yoga",
                "zaman","zinah","zodiak","abad","abang","abjad","acara","adat","adik","agama",
                "ahli","ajar","akal","akhir","akun","alam","alat","alias","alih","aman",
                "ambil","ampuh","anak","ancam","anda","angin","angka","anugerah","api","aplikasi",
                "arah","asal","asap","asli","asuh","atap","awas","ayah","azas","baca",
                "badai","bahaya","bahasa","baju","bakar","bakti","balap","balik","bambu","bangga",
                "bangkit","banjir","bantu","bapak","barat","batas","batu","bawah","bayar","bayi",
                "bebas","bebek","beda","bejana","bekas","bekerja","belah","belas","belek","beli",
                "benci","benda","benih","bening","benar","bentuk","benua","beras","berat","beri",
                "berkat","bersih","berubah","besar","besi","betapa","biar","biaya","bila","bimbang",
                "binar","bingung","biola","bisa","bisnis","bius","bocah","bodoh","bohong","buku",
                "bulan","bulat","bumi","bunga","burung","busuk","cabang","cari","catat","cinta",
                "cita","citra","cium","coba","cocok","cukup","curah","curiga","daging","dahaga",
                "dahulu","dalam","darah","daring","darurat","dasar","data","daun","daya","debat",
                "debu","demi","demokrasi","denda","dengan","desa","detak","detik","dewan","dewasa",
                "diagnosa","dialog","diam","diary","didik","digital","dinar","dini","diri","diskusi"
            ],
            en: [
                "about","above","actor","acute","admit","adopt","adult","after","again","agent",
                "agree","ahead","alarm","album","alert","alien","align","alike","alive","allow",
                "alone","along","alter","angel","anger","angle","angry","apron","arena","argue",
                "arise","array","aside","asset","avoid","award","aware","awful","badge","basic",
                "beach","birth","black","blame","blank","blast","blaze","bleak","blend","bless",
                "blind","blink","block","blood","bloom","blown","blunt","blush","board","boost",
                "boast","bonus","brain","brake","brand","brave","bread","break","breed","brick",
                "brief","bring","broad","broke","brown","brush","build","built","burst","cabin",
                "cable","cache","calm","camel","camp","canal","candy","carry","catch","cause",
                "chain","chair","chaos","charm","chart","chase","cheap","cheat","check","cheek",
                "chess","chest","chief","child","chill","chips","choir","choke","chord","chore",
                "civic","claim","class","clean","clear","clerk","click","cliff","climb","cloak",
                "clock","close","cloth","cloud","coach","coast","cocoa","coded","coins","colony",
                "color","comet","comic","cook","cool","cope","copy","coral","could","count",
                "court","cover","crack","craft","crash","crawl","crazy","cream","crime","crisp",
                "cross","crowd","crown","crude","cruel","crush","crust","cubic","curve","cycle",
                "daily","dairy","daisy","dance","dated","dealt","death","debit","debug","debut",
                "delay","delta","dense","depot","depth","deter","devil","dial","diary","digit",
                "diner","dirty","disco","ditch","dizzy","dodge","doing","doubt","dozen","draft",
                "drain","drama","drawn","dream","drift","drill","drink","drive","drove","dying",
                "eager","eagle","early","earth","eight","elite","empty","enemy","enjoy","enter",
                "entry","equal","error","event","every","exact","exist","extra","faith","false",
                "fancy","favor","feast","fence","ferry","fever","fiber","field","fifth","fifty",
                "fight","final","first","fixed","flame","flash","fleet","flesh","float","flood",
                "floor","flora","fluid","flush","focal","focus","force","forge","forth","forty",
                "forum","found","frame","fresh","front","frost","fruit","fully","funny","giant",
                "given","glass","globe","glory","glove","going","grace","grade","grain","grand",
                "grant","grape","graph","grasp","grass","grave","great","green","grief","grill",
                "gross","group","grown","guard","guess","guest","guide","guild","happy","harry",
                "harsh","haste","hasty","haven","heart","heavy","hello","hence","horse","hotel",
                "house","human","humid","humor","ideal","image","imply","index","indie","inept",
                "inert","infer","inner","input","irate","ivory","joint","jolly","judge","juice",
                "jumbo","jumpy","juror","karma","kayak","kebab","ketchup","knife","knock","known",
                "label","labor","ladder","large","laser","later","laugh","layer","learn","lease",
                "least","leave","legal","lemon","level","lever","light","limit","links","liver",
                "local","logic","loose","loyal","lucky","lunar","lunch","lyric","magic","major",
                "maker","march","marry","match","maybe","mayor","meant","media","melon","mercy",
                "merge","merit","metal","meter","micro","mighty","minor","minus","mixed","model",
                "money","month","moral","motel","motor","mount","mouse","mouth","mover","movie",
                "music","naked","nasal","nasty","naval","needs","never","night","noble","noise",
                "north","noted","novel","nurse","oasis","occur","ocean","offer","often","olive",
                "onion","opera","orbit","order","organ","other","ought","outer","owner","oxide",
                "ozone","paint","panel","paper","park","party","paste","patch","peace","penal",
                "phase","phone","photo","piano","piece","pilot","pitch","place","plain","plane",
                "plant","plate","point","pound","power","press","price","pride","prime","print",
                "prior","prize","probe","prone","proof","proud","prove","proxy","psych","pulse",
                "punch","pupil","pure","quasi","queen","query","quest","quick","quiet","quite",
                "quota","quote","radio","raise","range","rapid","ratio","reach","react","ready",
                "realm","rebel","refer","reign","relax","relay","relief","renal","renew","repel",
                "reply","reset","retro","reuse","revel","rhyme","right","rigid","river","roach",
                "roast","robot","rock","rogue","roman","rough","round","route","royal","rural",
                "sadly","salad","sales","salty","sauce","scale","scare","scene","scope","score",
                "scrap","screw","seize","sense","serve","seven","shall","shape","share","sharp",
                "sheep","sheet","shelf","shell","shift","shine","shirt","shock","shoot","short",
                "shout","shown","sick","side","siege","sight","silly","since","sixth","sixty",
                "sized","skill","sleep","slice","slick","slide","small","smart","smash","smell",
                "smile","smoke","snack","snake","sneak","snow","sober","solid","solve","sorry",
                "sound","south","space","spare","speak","speed","spend","spent","spice","spike",
                "spine","split","spoil","spoon","sport","stake","stale","stamp","stand","stare",
                "start","state","steam","steel","steep","steer","stems","stern","stick","stiff",
                "still","sting","stock","stole","stone","stood","store","storm","story","strip",
                "stuck","study","stuff","stunt","style","sugar","suite","sunny","super","sushi",
                "swear","sweep","sweet","swell","swept","swift","swim","swing","sword","syrup",
                "table","taken","taste","taxes","teach","teens","teeth","tempo","tempt","tenor",
                "tense","tent","terms","terse","text","thank","theft","their","theme","there",
                "these","thick","thing","think","third","those","three","threw","throw","thumb",
                "tiger","tight","timer","title","toast","today","token","tomato","tonic","topic",
                "torch","total","touch","tough","towel","tower","toxic","trace","track","trade",
                "train","trait","trash","treat","trend","trial","tribe","trick","tried","tries",
                "truly","trunk","trust","truth","twice","twist","tying","udder","ultra","under",
                "undue","union","unity","until","upper","upset","urban","urine","usage","usual",
                "valid","value","video","vital","vivid","vocal","voice","voter","vouch","waste",
                "watch","water","watts","waves","wears","weird","wheel","where","which","while",
                "white","whole","whose","wind","wine","wired","witch","woman","women","world",
                "worry","worse","worst","worth","would","wound","write","wrong","wrote","yacht",
                "years","yield","young","yours","youth","zebra","zesty","zinc","zonal","zoned"
            ]
        };

        // === GAME STATE ===
        this.currentPage = 1;
        this.selectedMode = null;
        this.timeLimit = 60;
        this.currentText = '';
        this.currentTextIndex = 0;
        this.testStartTime = null;
        this.testActive = false;
        this.timer = null;
        this.timeRemaining = 0;
        this.totalChars = 0;
        this.correctChars = 0;
        this.wrongChars = 0;
        this.currentWpm = 0;
        this.currentBurst = 0;
        this.maxBurst = 0;
        this.performanceData = [];
        this.chart = null;
        this.wordPool = [];
        this.usedWords = [];
        this.wordCount = 0;

        this.init();
    }

    init() {
        this.bindEvents();
        this.updateLanguage();
        this.createChart();
    }

    bindEvents() {
        // Page navigation
        document.getElementById('startBtn').addEventListener('click', () => this.goToPage(2));
        document.getElementById('proceedBtn').addEventListener('click', () => this.goToPage(3));
        document.getElementById('restartBtn').addEventListener('click', () => this.resetGame());

        // Mode selection
        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', () => this.selectMode(card));
        });

        // Language toggle
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchLanguage(btn.dataset.lang));
        });

        // Test controls
        document.getElementById('startTestBtn').addEventListener('click', () => this.startTest());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetTest());

        // Input handling
        const inputArea = document.getElementById('inputArea');
        inputArea.addEventListener('input', () => this.handleInput());
        inputArea.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    goToPage(pageNumber) {
        // Hide current page with slide out animation
        const currentPage = document.querySelector('.page.active');
        if (currentPage) {
            currentPage.classList.add('slide-out');
            
            setTimeout(() => {
                currentPage.classList.remove('active', 'slide-out');
                
                // Show target page with animation
                const targetPage = document.getElementById(`page${pageNumber}`);
                if (targetPage) {
                    targetPage.classList.add('active');
                    this.currentPage = pageNumber;

                    // Page-specific initialization
                    if (pageNumber === 3) {
                        this.prepareTest();
                    }
                }
            }, 300);
        }
    }

    selectMode(card) {
        // Remove previous selection
        document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
        
        // Select current card
        card.classList.add('selected');
        this.selectedMode = card.dataset.mode;

        // Get time limit
        const timeInput = card.querySelector('input[type="radio"]:checked');
        this.timeLimit = parseInt(timeInput.value);

        // Enable proceed button
        const proceedBtn = document.getElementById('proceedBtn');
        if (proceedBtn) {
            proceedBtn.disabled = false;
            proceedBtn.classList.add('pulse');
            setTimeout(() => {
                proceedBtn.classList.remove('pulse');
            }, 1000);
        }
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        
        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        this.updateLanguage();
    }

    updateLanguage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (this.translations[this.currentLanguage][key]) {
                if (element.tagName === 'INPUT' && element.type === 'button') {
                    element.value = this.translations[this.currentLanguage][key];
                } else {
                    element.innerHTML = this.translations[this.currentLanguage][key];
                }
            }
        });
    }

    prepareTest() {
        // Get word pool for current language
        this.wordPool = [...this.textCollections[this.currentLanguage]];
        this.usedWords = [];
        
        // Reset text and index
        this.currentText = '';
        this.currentTextIndex = 0;
        this.wordCount = 0;
        
        // Reset stats
        this.totalChars = 0;
        this.correctChars = 0;
        this.wrongChars = 0;
        this.currentWpm = 0;
        this.currentBurst = 0;
        this.maxBurst = 0;
        this.performanceData = [];
        this.timeRemaining = this.timeLimit;
        
        // Reset UI
        const wpmDisplay = document.getElementById('wpmDisplay');
        const accuracyDisplay = document.getElementById('accuracyDisplay');
        const burstDisplay = document.getElementById('burstDisplay');
        const timeDisplay = document.getElementById('timeDisplay');
        const progressBar = document.getElementById('progressBar');
        const inputArea = document.getElementById('inputArea');
        const startTestBtn = document.getElementById('startTestBtn');
        
        if (wpmDisplay) wpmDisplay.textContent = '0';
        if (accuracyDisplay) accuracyDisplay.textContent = '100';
        if (burstDisplay) burstDisplay.textContent = '0';
        if (timeDisplay) timeDisplay.textContent = this.timeLimit;
        if (progressBar) progressBar.style.width = '0%';
        if (inputArea) {
            inputArea.value = '';
            inputArea.disabled = true;
        }
        if (startTestBtn) startTestBtn.disabled = false;
        
        // Prepare first words
        this.appendRandomWords(20);
        this.displayText();
    }

    displayText() {
        const display = document.getElementById('textDisplay');
        if (!display) return;
        
        const chars = this.currentText.split('');
        display.innerHTML = chars.map((ch, i) => {
            let cls = 'text-char';
            if (i === this.currentTextIndex) cls += ' current';
            return `<span class="${cls}" data-index="${i}">${ch === ' ' ? '&nbsp;' : ch}</span>`;
        }).join('');
    }

    startTest() {
        this.testActive = true;
        this.testStartTime = Date.now();
        
        // Enable input
        const inputArea = document.getElementById('inputArea');
        if (inputArea) {
            inputArea.disabled = false;
            inputArea.focus();
        }
        
        // Update button
        const startTestBtn = document.getElementById('startTestBtn');
        if (startTestBtn) {
            startTestBtn.disabled = true;
        }
        
        // Start timer
        this.startTimer();
        
        // Start performance tracking
        this.trackPerformance();
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.timeRemaining--;
            const timeDisplay = document.getElementById('timeDisplay');
            if (timeDisplay) {
                timeDisplay.textContent = this.timeRemaining;
            }
            
            // Update progress
            const progress = ((this.timeLimit - this.timeRemaining) / this.timeLimit) * 100;
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
            
            // Survival mode penalty
            if (this.selectedMode === 'survival' && this.wrongChars > 0) {
                this.timeRemaining = Math.max(0, this.timeRemaining - 2); // 2 second penalty
            }
            
            if (this.timeRemaining <= 0) {
                this.endTest();
            }
        }, 1000);
    }

    appendRandomWords(n = 15) {
        const pool = this.wordPool;
        for (let i = 0; i < n; i++) {
            const idx = Math.floor(Math.random() * pool.length);
            const word = pool[idx];
            this.currentText += (this.currentText ? ' ' : '') + word;
            this.usedWords.push(word);
        }
    }

    trackPerformance() {
        const trackInterval = setInterval(() => {
            if (!this.testActive) {
                clearInterval(trackInterval);
                return;
            }
            
            this.performanceData.push({
                time: this.timeLimit - this.timeRemaining,
                wpm: this.currentWpm,
                accuracy: this.calculateAccuracy(),
                burst: this.currentBurst,
                wrong: this.wrongChars
            });
        }, 1000);
    }

    handleInput() {
        if (!this.testActive) return;

        const input = document.getElementById('inputArea').value;
        const inputLen = input.length;

        // Add more words if user has typed more than 80% of current text
        if (inputLen > this.currentText.length * 0.8) {
            this.appendRandomWords(10);
            this.displayText();
        }

        // Update text highlighting
        this.updateTextDisplay(input);

        // Calculate statistics
        this.calculateStats(input);
    }

    updateTextDisplay(input) {
        const chars = document.querySelectorAll('.text-char');
        let correctCount = 0;
        let wrongCount = 0;

        chars.forEach((span, idx) => {
            span.classList.remove('correct', 'wrong', 'current');

            if (idx < input.length) {
                if (input[idx] === this.currentText[idx]) {
                    span.classList.add('correct');
                    correctCount++;
                } else {
                    span.classList.add('wrong');
                    wrongCount++;
                }
            } else if (idx === input.length) {
                span.classList.add('current');
            }
        });

        this.correctChars = correctCount;
        this.wrongChars = wrongCount;
    }

    calculateStats(input) {
        const timeElapsed = (Date.now() - this.testStartTime) / 1000 / 60; // minutes
        const wordsTyped = input.length / 5; // Average word length
        
        // WPM calculation
        this.currentWpm = Math.round(wordsTyped / Math.max(timeElapsed, 0.1));
        
        // Burst calculation (last 10 seconds)
        const recentTime = Math.min(timeElapsed * 60, 10); // Last 10 seconds
        const recentChars = Math.min(input.length, 50); // Approximate
        this.currentBurst = Math.round((recentChars / 5) / (recentTime / 60));
        this.maxBurst = Math.max(this.maxBurst, this.currentBurst);
        
        // Update display
        const wpmDisplay = document.getElementById('wpmDisplay');
        const burstDisplay = document.getElementById('burstDisplay');
        const accuracyDisplay = document.getElementById('accuracyDisplay');
        
        if (wpmDisplay) wpmDisplay.textContent = this.currentWpm;
        if (burstDisplay) burstDisplay.textContent = this.currentBurst;
        if (accuracyDisplay) accuracyDisplay.textContent = this.calculateAccuracy();
    }

    calculateAccuracy() {
        const total = this.correctChars + this.wrongChars;
        return total > 0 ? Math.round((this.correctChars / total) * 100) : 100;
    }

    handleKeydown(e) {
        if (e.key === 'Enter' && !this.testActive) {
            e.preventDefault();
            this.startTest();
        }
    }

    endTest() {
        this.testActive = false;
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Disable input
        const inputArea = document.getElementById('inputArea');
        if (inputArea) {
            inputArea.disabled = true;
        }
        
        // Calculate final stats
        const finalAccuracy = this.calculateAccuracy();
        const finalScore = Math.round((this.currentWpm * finalAccuracy) / 100);
        
        // Show results
        this.showResults(finalScore, finalAccuracy);
    }

    showResults(finalScore, finalAccuracy) {
        // Update result displays
        const finalScoreDisplay = document.getElementById('finalScoreDisplay');
        const finalWpm = document.getElementById('finalWpm');
        const finalAccuracyEl = document.getElementById('finalAccuracy');
        const finalCorrect = document.getElementById('finalCorrect');
        const finalWrong = document.getElementById('finalWrong');
        const finalBurst = document.getElementById('finalBurst');
        const finalTime = document.getElementById('finalTime');
        
        if (finalScoreDisplay) finalScoreDisplay.textContent = finalScore;
        if (finalWpm) finalWpm.textContent = this.currentWpm;
        if (finalAccuracyEl) finalAccuracyEl.textContent = `${finalAccuracy}%`;
        if (finalCorrect) finalCorrect.textContent = this.correctChars;
        if (finalWrong) finalWrong.textContent = this.wrongChars;
        if (finalBurst) finalBurst.textContent = this.maxBurst;
        if (finalTime) finalTime.textContent = `${this.timeLimit - this.timeRemaining}s`;
        
        // Show appropriate message
        const messageElement = document.getElementById('scoreMessage');
        let message = '';
        
        if (this.selectedMode === 'survival') {
            if (finalAccuracy >= 95) {
                message = this.translations[this.currentLanguage].trueSurvivor;
            } else if (finalAccuracy >= 85) {
                message = this.translations[this.currentLanguage].wellDoneSurvival;
            } else {
                message = this.translations[this.currentLanguage].tryAgainSurvival;
            }
        } else {
            if (this.currentWpm >= 80) {
                message = this.translations[this.currentLanguage].outstanding;
            } else if (this.currentWpm >= 60) {
                message = this.translations[this.currentLanguage].excellent;
            } else if (this.currentWpm >= 40) {
                message = this.translations[this.currentLanguage].good;
            } else {
                message = this.translations[this.currentLanguage].keepTrying;
            }
        }
        
        if (messageElement) {
            messageElement.textContent = message;
        }
        
        // Update chart
        this.updateChart();
        
        // Go to results page with animation
        setTimeout(() => {
            this.goToPage(4);
        }, 500);
    }

    createChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx) return;
        
        this.chart = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        label: 'WPM',
                        data: [],
                        borderColor: '#00ff41',
                        backgroundColor: 'rgba(0, 255, 65, 0.1)',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 3
                    },
                    {
                        label: 'Accuracy (%)',
                        data: [],
                        borderColor: '#4ecdc4',
                        backgroundColor: 'rgba(78, 205, 196, 0.1)',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 3
                    },
                    {
                        label: 'Burst WPM',
                        data: [],
                        borderColor: '#ff6b35',
                        backgroundColor: 'rgba(255, 107, 53, 0.1)',
                        tension: 0.4,
                        fill: false,
                        borderWidth: 3
                    },
                    {
                        label: 'Wrong Characters',
                        data: [],
                        borderColor: '#ff4444',
                        backgroundColor: 'rgba(255, 68, 68, 0.1)',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#e0e0e0',
                            font: {
                                size: 12,
                                weight: 'bold'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(42, 42, 42, 0.9)',
                        titleColor: '#00ff41',
                        bodyColor: '#e0e0e0',
                        borderColor: '#4a4a4a',
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#b0b0b0',
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: '#4a4a4a',
                            lineWidth: 1
                        },
                        title: {
                            display: true,
                            text: 'Time (seconds)',
                            color: '#b0b0b0',
                            font: {
                                size: 12,
                                weight: 'bold'
                            }
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        min: 0,
                        max: 100,
                        ticks: {
                            color: '#b0b0b0',
                            font: {
                                size: 11
                            },
                            stepSize: 20
                        },
                        grid: {
                            color: '#4a4a4a',
                            lineWidth: 1
                        },
                        title: {
                            display: true,
                            text: 'Performance Metrics',
                            color: '#b0b0b0',
                            font: {
                                size: 12,
                                weight: 'bold'
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    updateChart() {
        if (!this.chart || this.performanceData.length === 0) return;

        const labels = this.performanceData.map(d => `${d.time}s`);
        const wpmData = this.performanceData.map(d => d.wpm);
        const accuracyData = this.performanceData.map(d => d.accuracy);
        const burstData = this.performanceData.map(d => d.burst);
        const wrongData = this.performanceData.map(d => d.wrong);

        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = wpmData;
        this.chart.data.datasets[1].data = accuracyData;
        this.chart.data.datasets[2].data = burstData;
        this.chart.data.datasets[3].data = wrongData;
        
        // Adjust Y-axis max based on data
        const maxWpm = Math.max(...wpmData, ...burstData);
        const maxWrong = Math.max(...wrongData);
        const maxValue = Math.max(maxWpm, maxWrong, 100);
        
        this.chart.options.scales.y.max = Math.ceil(maxValue / 20) * 20;
        
        this.chart.update('active');
    }

    resetTest() {
        // Stop timer
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Reset state
        this.testActive = false;
        this.currentTextIndex = 0;
        this.totalChars = 0;
        this.correctChars = 0;
        this.wrongChars = 0;
        this.currentWpm = 0;
        this.currentBurst = 0;
        this.maxBurst = 0;
        this.performanceData = [];
        this.timeRemaining = this.timeLimit;
        
        // Reset UI
        this.prepareTest();
        const startTestBtn = document.getElementById('startTestBtn');
        if (startTestBtn) {
            startTestBtn.disabled = false;
        }
    }

    resetGame() {
        // Reset all game state
        this.currentPage = 1;
        this.selectedMode = null;
        this.testActive = false;
        
        // Reset UI
        document.querySelectorAll('.mode-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        const proceedBtn = document.getElementById('proceedBtn');
        if (proceedBtn) {
            proceedBtn.disabled = true;
        }
        
        // Go to first page
        this.goToPage(1);
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RetroTypingSpeedTest();
});