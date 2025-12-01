// Kart Veri Yapısı: Tüm 26 kartınız buraya eklenecek.
// **ÖNEMLİ:** Resim dosyalarınızın isimlerini ve doğru seçeneği buna göre güncelleyin.
const quizCards = [
    {
        question: "Salyangozlar genellikle yağmurdan sonra neden dışarı çıkarlar?",
        image: "images/01.png", // Resim dosyanızın adı (bu dosyayı aynı klasöre koyun)
        options: {
            A: "Nemli havalarda daha rahat hareket ederler.",
            B: "Yağmur kabuklarını parlatır.",
            C: "Yağmur onlara enerji verir.",
            D: "Güneşi çok sevdikleri için."
        },
        correctAnswer: "A", // Doğru seçenek harfi
        answerDetail: "Nemli havalar, salyangozların kurumadan hareket etmesi ve beslenmesi için ideal ortamı sağlar. Kuru hava onlar için tehlikelidir." // Arka yüzde görünecek açıklama
    },
    // Diğer kartlar buraya eklenecek (örnek):
    // {
    //     question: "Dünyanın en yüksek dağı hangisidir?",
    //     image: "dag.png",
    //     options: { A: "K2", B: "Everest", C: "Fuji", D: "Kilimanjaro" },
    //     correctAnswer: "B",
    //     answerDetail: "Everest Dağı, deniz seviyesinden 8.848,86 metre yüksekliğiyle dünyanın en yüksek zirvesidir."
    // }
];

let currentCardIndex = 0;
let score = 0;
let isFlipping = false;

// DOM Elementleri
const quizCard = document.getElementById('quiz-card');
const questionText = document.getElementById('question-text');
const cardImage = document.getElementById('card-image');
const optionsContainer = document.getElementById('options-container');
const optionButtons = optionsContainer.querySelectorAll('.option-btn');
const feedbackText = document.getElementById('feedback-text');
const scoreSpan = document.getElementById('score');
const cardIndexSpan = document.getElementById('card-index');
const correctAnswerText = document.getElementById('correct-answer-text');
const startButton = document.getElementById('start-button');
const nextCardButton = document.querySelector('.next-card-btn');
const cardContainer = document.querySelector('.card-flip-container');
const scoreBoard = document.querySelector('.score-board');


// Oyunu Başlatma
function startGame() {
    score = 0;
    currentCardIndex = 0;
    
    // Gerekli öğeleri göster
    cardContainer.style.display = 'block';
    scoreBoard.style.display = 'block';
    startButton.style.display = 'none';

    loadCard(currentCardIndex);
    
    // Düğmelere dinleyici ekle
    optionButtons.forEach(button => {
        button.addEventListener('click', handleAnswer);
    });
}

// Kartı Yükleme
function loadCard(index) {
    if (index >= quizCards.length) {
        // Oyun Bitti
        showEndScreen();
        return;
    }

    // Kartın ön yüzüne çevir ve "flipped" sınıfını kaldır
    quizCard.classList.remove('flipped');
    
    // Geçerli kart verisi
    const cardData = quizCards[index];

    // Ön Yüz İçeriğini Güncelle
    questionText.textContent = cardData.question;
    cardImage.src = cardData.image; // Resim dosyasının adını set et
    
    // Seçenekleri Güncelle
    optionButtons.forEach(button => {
        const option = button.getAttribute('data-option'); // A, B, C, D
        button.textContent = `${option}) ${cardData.options[option]}`;
        button.disabled = false; // Düğmeleri tekrar aktif et
        button.classList.remove('correct-btn', 'wrong-btn'); // Renkleri sıfırla
    });

    // Arka Yüz İçeriğini Güncelle
    correctAnswerText.textContent = `${cardData.correctAnswer}) ${cardData.options[cardData.correctAnswer]} - ${cardData.answerDetail}`;
    
    // Diğer öğeleri sıfırla
    optionsContainer.style.display = 'grid'; // Seçenekleri göster
    nextCardButton.style.display = 'none'; // Sonraki kart düğmesini gizle
    feedbackText.textContent = '';
    
    // Puanlama ve İlerleme Tahtasını Güncelle
    scoreSpan.textContent = score;
    cardIndexSpan.textContent = index + 1;
}

// Cevap Kontrolü
function handleAnswer(event) {
    if (isFlipping) return; // Kart dönerken tekrar tıklamayı engelle

    const selectedOption = event.target.getAttribute('data-option');
    const cardData = quizCards[currentCardIndex];
    const isCorrect = selectedOption === cardData.correctAnswer;
    
    // Tüm düğmeleri pasif hale getir
    optionButtons.forEach(button => button.disabled = true);
    optionsContainer.style.display = 'block'; // Düğme konteynerini geçici olarak blok yap

    // Geri bildirim (feedback)
    if (isCorrect) {
        score++;
        feedbackText.textContent = 'Doğru! Puan kazandınız.';
        feedbackText.className = 'feedback-message correct';
        event.target.style.backgroundColor = '#4CAF50'; // Yeşil yap
    } else {
        feedbackText.textContent = 'Yanlış. Kartın arka yüzünde doğru cevabı göreceksiniz.';
        feedbackText.className = 'feedback-message wrong';
        event.target.style.backgroundColor = '#F44336'; // Kırmızı yap
        
        // Doğru cevabı da işaretle
        optionButtons.forEach(button => {
            if (button.getAttribute('data-option') === cardData.correctAnswer) {
                button.style.backgroundColor = '#4CAF50';
            }
        });
    }

    // Kartı Çevir
    isFlipping = true;
    quizCard.classList.add('flipped');
    
    // Animasyon bitince (0.8s sonra) sonraki düğmesini göster
    setTimeout(() => {
        nextCardButton.style.display = 'block';
        isFlipping = false;
    }, 800);
}

// Sonraki Karta Geçme
function nextCard() {
    currentCardIndex++;
    // Düğme renklerini ve stillerini sıfırla
    optionButtons.forEach(button => {
        button.style.backgroundColor = '#4db6ac';
    });
    loadCard(currentCardIndex);
}

// Oyun Bitti Ekranı
function showEndScreen() {
    cardContainer.style.display = 'none';
    optionsContainer.style.display = 'none';
    nextCardButton.style.display = 'none';

    feedbackText.textContent = `Oyun bitti! Toplam ${quizCards.length} karttan ${score} doğru cevap verdiniz.`;
    feedbackText.className = 'feedback-message correct';
    
    startButton.textContent = 'Tekrar Oyna';
    startButton.style.display = 'block';
    startButton.onclick = startGame; // Tekrar oynama fonksiyonunu ata
    
    cardIndexSpan.textContent = quizCards.length;
}

// Sayfa yüklendiğinde başlangıç durumunu ayarla
window.onload = () => {
    // Tüm kart sayısını göster
    document.querySelector('.score-board').innerHTML = `Puan: <span id="score">0</span> / Kart: <span id="card-index">0</span>/${quizCards.length}`;
};
