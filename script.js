// Kart Veri Yapısı: Tüm 26 kartınız buraya eklenecek.
// Resim yollarının "images/" klasörünü içerdiğine dikkat edin.
const quizCards = [
    {
        question: "Salyangozlar genellikle yağmurdan sonra neden dışarı çıkarlar?",
        image: "images/salyangoz.png", // Resim dosya yolu
        options: {
            A: "Nemli havalarda daha rahat hareket ederler.",
            B: "Yağmur kabuklarını parlatır.",
            C: "Yağmur onlara enerji verir.",
            D: "Güneşi çok sevdikleri için."
        },
        correctAnswer: "A", 
        answerDetail: "Nemli havalar, salyangozların kurumadan hareket etmesi ve beslenmesi için ideal ortamı sağlar. Kuru hava onlar için tehlikelidir." // Arka yüzde görünecek açıklama
    },
    // Diğer 25 kart buraya eklenecek...
    // { ... },
];

let currentCardIndex = 0;
let score = 0;
let isFlipping = false;

// DOM Elementleri
const quizCard = document.getElementById('quiz-card');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const optionButtons = optionsContainer.querySelectorAll('.option-btn');
const feedbackText = document.getElementById('feedback-text');
const scoreSpan = document.getElementById('score');
const cardIndexSpan = document.getElementById('card-index');
const correctAnswerText = document.getElementById('correct-answer-text');
const startButton = document.getElementById('start-button');
const nextCardButton = document.querySelector('.next-card-btn');
const cardFrontFace = document.getElementById('card-front-face'); 
const initialScreen = document.getElementById('initial-screen');
const gameArea = document.getElementById('game-area'); 


// Oyunu Başlatma
function startGame() {
    if (quizCards.length === 0) {
        alert("Oyun başlatılamadı: Hiç kart verisi yok!");
        return;
    }

    score = 0;
    currentCardIndex = 0;
    
    // Açılış ekranını gizle ve oyun alanını göster
    initialScreen.style.display = 'none'; 
    gameArea.style.display = 'block'; 

    loadCard(currentCardIndex);
    
    // Düğmelere dinleyici ekle (yalnızca bir kez)
    if (optionButtons.length > 0 && !optionButtons[0].hasAttribute('data-listener-added')) {
        optionButtons.forEach(button => {
            button.addEventListener('click', handleAnswer);
            button.setAttribute('data-listener-added', 'true');
        });
    }
}

// Kartı Yükleme
function loadCard(index) {
    if (index >= quizCards.length) {
        showEndScreen();
        return;
    }

    // Kartı ön yüze çevir ve "flipped" sınıfını kaldır
    quizCard.classList.remove('flipped');
    
    const cardData = quizCards[index];

    // Ön Yüz İçeriğini Güncelle: Resmi CSS arka planı olarak ayarla
    questionText.textContent = cardData.question;
    cardFrontFace.style.backgroundImage = `url('${cardData.image}')`; 
    
    // Seçenekleri Güncelle ve Düğmeleri Sıfırla
    optionButtons.forEach(button => {
        const option = button.getAttribute('data-option'); 
        button.textContent = `${option}) ${cardData.options[option]}`;
        button.disabled = false; // Düğmeleri tekrar aktif et
        button.classList.remove('correct-btn', 'wrong-btn'); // Renkleri sıfırla
        button.style.backgroundColor = ''; // CSS rengine geri döner
    });

    // Arka Yüz İçeriğini Güncelle
    correctAnswerText.textContent = `${cardData.correctAnswer}) ${cardData.options[cardData.correctAnswer]} - ${cardData.answerDetail}`;
    
    // Diğer öğeleri sıfırla/göster
    nextCardButton.style.display = 'none'; 
    feedbackText.textContent = '';
    
    // Puanlama ve İlerleme Tahtasını Güncelle
    scoreSpan.textContent = score;
    cardIndexSpan.textContent = index + 1;
}

// Cevap Kontrolü
function handleAnswer(event) {
    if (isFlipping) return; 

    const selectedOption = event.target.getAttribute('data-option');
    const cardData = quizCards[currentCardIndex];
    const isCorrect = selectedOption === cardData.correctAnswer;
    
    // Tüm düğmeleri pasif hale getir
    optionButtons.forEach(button => button.disabled = true);

    // Geri bildirim (feedback)
    if (isCorrect) {
        score++;
        feedbackText.textContent = 'Doğru! Puan kazandınız.';
        feedbackText.className = 'feedback-message correct';
        event.target.classList.add('correct-btn');
    } else {
        feedbackText.textContent = 'Yanlış. Kartın arka yüzünde doğru cevabı göreceksiniz.';
        feedbackText.className = 'feedback-message wrong';
        event.target.classList.add('wrong-btn'); 
        
        // Doğru cevabı işaretle
        optionButtons.forEach(button => {
            if (button.getAttribute('data-option') === cardData.correctAnswer) {
                button.classList.add('correct-btn');
            }
        });
    }

    // Kartı Çevir
    isFlipping = true;
    quizCard.classList.add('flipped');
    
    // Animasyon bitince sonraki düğmesini göster
    setTimeout(() => {
        nextCardButton.style.display = 'block';
        isFlipping = false;
    }, 800);
}

// Sonraki Karta Geçme
function nextCard() {
    currentCardIndex++;
    loadCard(currentCardIndex);
}

// Oyun Bitti Ekranı
function showEndScreen() {
    gameArea.style.display = 'none';
    
    feedbackText.textContent = `Oyun bitti! Toplam ${quizCards.length} karttan ${score} doğru cevap verdiniz.`;
    feedbackText.className = 'feedback-message correct';
    
    startButton.textContent = 'Tekrar Oyna';
    startButton.style.display = 'block';
    initialScreen.style.display = 'flex'; // Tekrar oynatmak için başlangıç ekranını göster
    
    // Puan tahtasını sonuca göre güncelle
    document.querySelector('.score-board').style.display = 'none'; 
}

// Sayfa yüklendiğinde başlangıç durumunu ayarla
window.onload = () => {
    // Puan tahtasındaki toplam kart sayısını göster
    cardIndexSpan.textContent = `0/${quizCards.length}`;
};
