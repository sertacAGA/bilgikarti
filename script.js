// Kart Veri Yapısı
// DİKKAT: Resimlerinizi 'images' klasörüne koyun ve isimlerini 01.jpg, 02.jpg ... 26.jpg yapın.
const quizCards = [
    {
        question: "Salyangozlar genellikle yağmurdan sonra neden dışarı çıkarlar?",
        image: "images/01.jpg", 
        options: {
            A: "Nemli havalarda daha rahat hareket ederler.",
            B: "Yağmur kabuklarını parlatır.",
            C: "Yağmur onlara enerji verir.",
            D: "Güneşi çok sevdikleri için."
        },
        correctAnswer: "A", 
        answerDetail: "Nemli havalar, salyangozların kurumadan hareket etmesi ve beslenmesi için ideal ortamı sağlar." 
    },
    {
        question: "Bir kamp ateşini güvenli şekilde yakmak için ilk olarak ne yapılmalıdır?",
        image: "images/02.jpg", 
        options: {
            A: "Doğrudan büyük odunlarla başlamak.",
            B: "Küçük kuru dallardan bir çember yapmak.",
            C: "Ateşi yere yakın otların üstünde yakmak.",
            D: "Yakıt döküp tutuşturmak."
        },
        correctAnswer: "B", 
        answerDetail: "Ateşin kontrolden çıkmaması ve güvenli yanması için önce küçük kuru dallarla temel oluşturulmalıdır." 
    },
    {
        question: "Modern anlamda “moda” kavramı hangi yüzyılda ortaya çıkmıştır?",
        image: "images/03.jpg", 
        options: {
            A: "17. yüzyıl",
            B: "18. yüzyıl",
            C: "19. yüzyıl",
            D: "20. yüzyıl"
        },
        correctAnswer: "C", 
        answerDetail: "19. yüzyıl, seri üretimin başlaması ve moda evlerinin kurulmasıyla modern modanın doğuşu kabul edilir." 
    },
    {
        question: "Mitolojik hikâyelerde “aslan” genellikle neyi temsil eder?",
        image: "images/04.jpg", 
        options: {
            A: "Bilgeliği",
            B: "Sadakati",
            C: "Hırsı",
            D: "Gücü ve cesareti"
        },
        correctAnswer: "D", 
        answerDetail: "Aslan, tarih boyunca pek çok kültürde kraliyetin, gücün ve sarsılmaz cesaretin simgesi olmuştur." 
    },
    {
        question: "Ejderhaların gerçekten yaşadığına dair kanıt var mıdır?",
        image: "images/05.jpg", 
        options: {
            A: "Evet, kalıntılar bulunmuştur.",
            B: "Hayır, sadece efsanelerde geçer.",
            C: "Bilim kesin olarak kanıtlamıştır.",
            D: "Bazı bölgelerde hâlâ yaşadıkları düşünülür."
        },
        correctAnswer: "B", 
        answerDetail: "Ejderhalar, farklı kültürlerin mitolojilerinde yer alan efsanevi yaratıklardır; biyolojik kanıtları yoktur." 
    },
    {
        question: "“Yılan oynatıcıları” geleneği en çok hangi ülkede bilinir?",
        image: "images/06.jpg", 
        options: {
            A: "Hindistan",
            B: "Brezilya",
            C: "Türkiye",
            D: "Japonya"
        },
        correctAnswer: "A", 
        answerDetail: "Hindistan’da yılan oynatıcıları, hareketi değil müziğin titreşimini takip eden kobra yılanlarıyla tanınır." 
    },
    {
        question: "Afro saç modeli köken olarak hangi kültüre dayanır?",
        image: "images/07.jpg", 
        options: {
            A: "Afrika kültürü",
            B: "İskandinav kültürü",
            C: "Çin saray kültürü",
            D: "Güney Amerika kızılderilileri"
        },
        correctAnswer: "A", 
        answerDetail: "Afro saç modeli, Afrika kökenli toplumların doğal saç yapısından doğmuştur ve kimlik, özgürlük sembolüdür." 
    },
    {
        question: "Rus edebiyatının ünlü yazarlarından Dostoyevski hangi eseriyle tanınır?",
        image: "images/08.jpg", 
        options: {
            A: "Sefiller",
            B: "Suç ve Ceza",
            C: "Monte Cristo Kontu",
            D: "Küçük Prens"
        },
        correctAnswer: "B", 
        answerDetail: "Dostoyevski, insanın iç çatışmalarını en derin şekilde işleyen yazarlardan biri olarak “psikolojik roman” öncüsüdür." 
    },
    {
        question: "Eski dönem zarif ve klasik kadın giyim tarzına ne ad verilir?",
        image: "images/09.jpg", 
        options: {
            A: "Vintage",
            B: "Futuristik",
            C: "Sokak Modası",
            D: "Urban Chic"
        },
        correctAnswer: "A", 
        answerDetail: "“Vintage”, geçmiş dönemlere ait kıyafetlerin özgün dokusunu ve zarafetini günümüze taşıyan moda anlayışıdır." 
    },
    {
        question: "Gençlerde arkadaş grubu içinde kabul görememe endişesi çoğunlukla hangi duruma yol açar?",
        image: "images/10.jpg", 
        options: {
            A: "Sosyal kaygı",
            B: "Aşırı özgüven",
            C: "Umursamazlık",
            D: "Saldırganlık artışı"
        },
        correctAnswer: "A", 
        answerDetail: "Gençlik döneminde dışlanma korkusu yaygındır; çoğu genç bu duyguyu yaşar ve zamanla sağlıklı ilişkilerle aşar." 
    },
    {
        question: "Hollywood filmlerinde genellikle kullanılan ünlü ödül heykelciğinin adı nedir?",
        image: "images/11.jpg", 
        options: {
            A: "Grammy",
            B: "Oscar",
            C: "Emmy",
            D: "Golden Globe"
        },
        correctAnswer: "B", 
        answerDetail: "Oscar ödülleri, sinema dünyasının en prestijli ödüllerindendir." 
    },
    {
        question: "Bir çiftçi için “tırpan”ın temel kullanım amacı nedir?",
        image: "images/12.jpg", 
        options: {
            A: "Tahılları biçmek",
            B: "Toprağı karıştırmak",
            C: "Hayvanları yönlendirmek",
            D: "Gübreyi yaymak"
        },
        correctAnswer: "A", 
        answerDetail: "Tırpan, özellikle buğday ve arpa gibi uzun saplı bitkilerin hasadında geleneksel olarak kullanılır." 
    },
    {
        question: "Çocukların genellikle brokoliyi sevmemelerinin nedeni nedir?",
        image: "images/13.jpg", 
        options: {
            A: "Çok yeşil görünmesi",
            B: "Çiğ yenmesi gerekmesi",
            C: "Acımsı tadı ve kokusu",
            D: "Sert olması"
        },
        correctAnswer: "C", 
        answerDetail: "Brokolideki bazı doğal bileşikler, çocukların damak tadına acı gelebilir ama çok sağlıklıdır." 
    },
    {
        question: "Uzun süreli stres, vücutta en çok hangi organ üzerinde etkili olur?",
        image: "images/14.jpg", 
        options: {
            A: "Kalp",
            B: "Mide",
            C: "Akciğer",
            D: "Karaciğer"
        },
        correctAnswer: "B", 
        answerDetail: "Stres, mide asidini artırarak gastrit ve ülser gibi sorunlara yol açabilir." 
    },
    {
        question: "Filistin’deki çocukların yaşadığı zorlukların temel nedeni nedir?",
        image: "images/15.jpg", 
        options: {
            A: "Nüfus fazlalığı",
            B: "Eğitim olanaklarının azlığı",
            C: "İklim koşulları",
            D: "İsrail’in Filistin halkına yaptığı soykırım"
        },
        correctAnswer: "D", 
        answerDetail: "Filistin’de yıllardır süren çatışmalar, binlerce masum çocuğun hayatını etkiliyor. Bu kart farkındalık amacı taşır." 
    },
    {
        question: "Efsanelerde ormanlarda yaşayan savaşçı kadın kabilelere ne ad verildiği söylenir?",
        image: "images/16.jpg", 
        options: {
            A: "Amazonlar",
            B: "Vikingler",
            C: "Hunlar",
            D: "Aztekler"
        },
        correctAnswer: "A", 
        answerDetail: "Efsanelere göre Amazon savaşçıları okçuluk ve atlı savaşlarda olağanüstü bir ustalığa sahipti." 
    },
    {
        question: "“Yeşilçam'ın 4 yapraklı yoncası” olarak bilinen kadın oyunculardan hangisi bu grubun içindedir?",
        image: "images/17.jpg", 
        options: {
            A: "Türkan Şoray",
            B: "Nurgül Yeşilçay",
            C: "Beren Saat",
            D: "Hande Erçel"
        },
        correctAnswer: "A", 
        answerDetail: "Yeşilçam’ın “4 Yapraklı Yoncası”: Türkan Şoray, Hülya Koçyiğit, Filiz Akın ve Fatma Girik olarak bilinir." 
    },
    {
        question: "Anime ve manga kültürü hangi ülkede ortaya çıkmıştır?",
        image: "images/18.jpg", 
        options: {
            A: "Güney Kore",
            B: "Çin",
            C: "Japonya",
            D: "Tayland"
        },
        correctAnswer: "C", 
        answerDetail: "Anime, Japonya’da 1900’lerin başında kısa deneysel filmlerle ortaya çıkmış; zamanla dünya çapında bir kültür hâline gelmiştir." 
    },
    {
        question: "Tarihte bilinen ilk kadın hükümdar-savaşçılardan biri kimdir?",
        image: "images/19.jpg", 
        options: {
            A: "Kleopatra",
            B: "Tomris Hatun",
            C: "Jeanne d'Arc",
            D: "Hatice Sultan"
        },
        correctAnswer: "B", 
        answerDetail: "Tomris Hatun, Pers İmparatoru Keyhüsrev’i yenen ilk kadın hükümdarlardan biri olarak tarihe geçmiştir." 
    },
    {
        question: "Ortaçağ saray palyaçolarının temel görevi neydi?",
        image: "images/20.jpg", 
        options: {
            A: "Askerlere taktik öğretmek",
            B: "Soyluları eğlendirmek",
            C: "Yasaları yazmak",
            D: "Savaşlara katılmak"
        },
        correctAnswer: "B", 
        answerDetail: "Ortaçağ saray soytarıları, yalnızca eğlendirmez; zaman zaman krallara gerçekleri mizah yoluyla söyleyebilen tek kişilerdi." 
    },
    {
        question: "Fok balıklarının vücutlarının soğuk sularda üşümeden yüzebilmesini sağlayan temel özellik nedir?",
        image: "images/21.jpg", 
        options: {
            A: "Kuyruklarının büyük olması",
            B: "Su altında şarkı söyleyebilmeleri",
            C: "Pullu derileri",
            D: "Yüksek vücut yağ oranı"
        },
        correctAnswer: "D", 
        answerDetail: "Foklar kalın yağ tabakaları sayesinde buz gibi sularda bile rahatça yüzebilirler." 
    },
    {
        question: "Leylekler her yıl göç ederken çoğunlukla neye güvenir?",
        image: "images/22.jpg", 
        options: {
            A: "Dünya’nın manyetik alanına",
            B: "Deniz akıntılarına",
            C: "Diğer hayvanları takip etmeye",
            D: "Kokulara"
        },
        correctAnswer: "A", 
        answerDetail: "Leylekler her yıl aynı yuva bölgesine geri dönebilecek kadar güçlü bir yön bulma içgüdüsüne sahiptir." 
    },
    {
        question: "Orangutanlar hangi özelliğiyle diğer primatlardan en çok ayrılır?",
        image: "images/23.jpg", 
        options: {
            A: "Uzayabilen boyunları",
            B: "Çok uzun kolları",
            C: "Uçmaları",
            D: "Soğuk iklimlerde yaşamaları"
        },
        correctAnswer: "B", 
        answerDetail: "Orangutanların kolları neredeyse kendileri kadar uzundur; ağaçtan ağaca adeta süzülürler." 
    },
    {
        question: "Tüysüz kedi türü olan “Sphynx” kedilerine bu adın verilmesinin temel nedeni nedir?",
        image: "images/24.jpg", 
        options: {
            A: "Mısır’da keşfedilmiş olmaları",
            B: "Güneşte renk değiştirmeleri",
            C: "Görünüşlerinin Antik Mısır’daki Sfenks heykeline benzemesi",
            D: "Tüylerinin sonradan dökülmesi"
        },
        correctAnswer: "C", 
        answerDetail: "Sphynx kedileri aslında Kanada kökenlidir; isimleri yalnızca yüz hatlarının Sfenks heykeline benzemesinden gelir." 
    },
    {
        question: "Sincaplar biriktirdikleri yiyecekleri genellikle nereye saklar?",
        image: "images/25.jpg", 
        options: {
            A: "Ağaç kovuklarına",
            B: "Su kuyularına",
            C: "Güneşin altına",
            D: "Taşların üzerine"
        },
        correctAnswer: "A", 
        answerDetail: "Sincaplar, kış için sakladıkları bazı tohumları unutur ve böylece doğada yeni ağaçların büyümesine katkı sağlar." 
    },
    {
        question: "Köpeklerin “sadık hayvanlar” olarak anılmasının en önemli nedeni nedir?",
        image: "images/26.jpg", 
        options: {
            A: "Tek başlarına yaşamayı sevmeleri",
            B: "Çok yavaş koşmaları",
            C: "Sadece geceleri aktif olmaları",
            D: "Sürü içgüdüsüyle hareket etmeleri"
        },
        correctAnswer: "D", 
        answerDetail: "Köpekler binlerce yıldır insanlarla birlikte yaşayan ilk evcil hayvanlardan biridir ve insanı sürü lideri olarak görür." 
    }
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
    scoreSpan.textContent = score; // Skoru görsel olarak sıfırla
    
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
        scoreSpan.textContent = score; // ✅ PUAN GÜNCELLEME
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
    
    // Tekrar oynama için hazırlık
    startButton.textContent = 'Tekrar Oyna';
    startButton.onclick = startGame; 
    
    initialScreen.style.display = 'flex'; // Başlangıç ekranını geri getir
    
    // Sonuç mesajını başlangıç ekranına ekleyelim
    const oldMsg = document.getElementById('final-msg');
    if(oldMsg) oldMsg.remove();
    
    const finalMsg = document.createElement('p');
    finalMsg.id = 'final-msg';
    finalMsg.style.fontWeight = 'bold';
    finalMsg.style.fontSize = '1.2em';
    finalMsg.style.color = '#333';
    finalMsg.textContent = `Son Skorunuz: ${score} / ${quizCards.length}`;
    
    initialScreen.insertBefore(finalMsg, startButton);
}

// Sayfa yüklendiğinde başlangıç durumunu ayarla
window.onload = () => {
    // Puan tahtasındaki toplam kart sayısını göster
    cardIndexSpan.textContent = `0/${quizCards.length}`;
};
