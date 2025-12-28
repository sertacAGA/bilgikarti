// --- DİL VE SABİT METİN AYARLARI ---
let currentLang = 'tr'; // Varsayılan dil

const uiTranslations = {
    tr: {
        startButton: "Oyuna Başla",
        nextButton: "Sonraki Kart",
        scoreLabel: "Puan",
        cardLabel: "Kart",
        correctLabel: "DOĞRU CEVAP:",
        feedbackCorrect: "Doğru! Puan kazandınız.",
        feedbackWrong: "Yanlış. Kartın arka yüzünde doğru cevabı göreceksiniz.",
        gameOver: "Oyun bitti! Toplam {total} karttan {score} doğru cevap verdiniz.",
        playAgain: "Tekrar Oyna",
        finalScore: "Son Skorunuz: {score} / {total}"
    },
    en: {
        startButton: "Start Game",
        nextButton: "Next Card",
        scoreLabel: "Score",
        cardLabel: "Card",
        correctLabel: "CORRECT ANSWER:",
        feedbackCorrect: "Correct! You earned a point.",
        feedbackWrong: "Wrong. Check the back of the card for the answer.",
        gameOver: "Game Over! You answered {score} correctly out of {total} cards.",
        playAgain: "Play Again",
        finalScore: "Final Score: {score} / {total}"
    }
};

// --- SORU VERİ HAVUZU ---
const quizData = {
    tr: [
        {
            question: "Salyangozlar genellikle yağmurdan sonra neden dışarı çıkarlar?",
            image: "images/01.jpg", 
            options: { A: "Nemli havalarda rahat hareket ederler.", B: "Yağmur kabuklarını parlatır.", C: "Enerji verir.", D: "Güneşi severler." },
            correctAnswer: "A", 
            answerDetail: "Nemli havalar, kurumadan hareket etmeleri için idealdir." 
        },
        {
            question: "Bir kamp ateşini güvenli şekilde yakmak için ilk olarak ne yapılmalıdır?",
            image: "images/02.jpg", 
            options: { A: "Büyük odunlarla başlamak.", B: "Küçük kuru dallardan çember yapmak.", C: "Otların üstünde yakmak.", D: "Yakıt dökmek." },
            correctAnswer: "B", 
            answerDetail: "Ateşin kontrolden çıkmaması için önce temel oluşturulmalıdır." 
        },
        {
            question: "Modern anlamda “moda” kavramı hangi yüzyılda ortaya çıkmıştır?",
            image: "images/03.jpg", 
            options: { A: "17. yüzyıl", B: "18. yüzyıl", C: "19. yüzyıl", D: "20. yüzyıl" },
            correctAnswer: "C", 
            answerDetail: "19. yüzyıl, seri üretimin başlamasıyla modern modanın doğuşudur." 
        },
        {
            question: "Mitolojik hikâyelerde “aslan” genellikle neyi temsil eder?",
            image: "images/04.jpg", 
            options: { A: "Bilgeliği", B: "Sadakati", C: "Hırsı", D: "Gücü ve cesareti" },
            correctAnswer: "D", 
            answerDetail: "Aslan, tarih boyunca pek çok kültürde kraliyetin, gücün ve sarsılmaz cesaretin simgesi olmuştur." 
        },
        {
            question: "Ejderhaların gerçekten yaşadığına dair kanıt var mıdır?",
            image: "images/05.jpg", 
            options: { A: "Evet, kalıntılar bulunmuştur.", B: "Hayır, sadece efsanelerde geçer.", C: "Bilim kesin olarak kanıtlamıştır.", D: "Bazı bölgelerde hâlâ yaşadıkları düşünülür." },
            correctAnswer: "B", 
            answerDetail: "Ejderhalar, farklı kültürlerin mitolojilerinde yer alan efsanevi yaratıklardır; biyolojik kanıtları yoktur." 
        },
        {
            question: "“Yılan oynatıcıları” geleneği en çok hangi ülkede bilinir?",
            image: "images/06.jpg", 
            options: { A: "Hindistan", B: "Brezilya", C: "Türkiye", D: "Japonya" },
            correctAnswer: "A", 
            answerDetail: "Hindistan’da yılan oynatıcıları, hareketi değil müziğin titreşimini takip eden kobra yılanlarıyla tanınır." 
        },
        {
            question: "Afro saç modeli köken olarak hangi kültüre dayanır?",
            image: "images/07.jpg", 
            options: { A: "Afrika kültürü", B: "İskandinav kültürü", C: "Çin saray kültürü", D: "Güney Amerika kızılderilileri" },
            correctAnswer: "A", 
            answerDetail: "Afro saç modeli, Afrika kökenli toplumların doğal saç yapısından doğmuştur ve kimlik, özgürlük sembolüdür." 
        },
        {
            question: "Rus edebiyatının ünlü yazarlarından Dostoyevski hangi eseriyle tanınır?",
            image: "images/08.jpg", 
            options: { A: "Sefiller", B: "Suç ve Ceza", C: "Monte Cristo Kontu", D: "Küçük Prens" },
            correctAnswer: "B", 
            answerDetail: "Dostoyevski, insanın iç çatışmalarını en derin şekilde işleyen yazarlardan biri olarak “psikolojik roman” öncüsüdür." 
        },
        {
            question: "Eski dönem zarif ve klasik kadın giyim tarzına ne ad verilir?",
            image: "images/09.jpg", 
            options: { A: "Vintage", B: "Futuristik", C: "Sokak Modası", D: "Urban Chic" },
            correctAnswer: "A", 
            answerDetail: "“Vintage”, geçmiş dönemlere ait kıyafetlerin özgün dokusunu ve zarafetini günümüze taşıyan moda anlayışıdır." 
        },
        {
            question: "Gençlerde arkadaş grubu içinde kabul görememe endişesi çoğunlukla hangi duruma yol açar?",
            image: "images/10.jpg", 
            options: { A: "Sosyal kaygı", B: "Aşırı özgüven", C: "Umursamazlık", D: "Saldırganlık artışı" },
            correctAnswer: "A", 
            answerDetail: "Gençlik döneminde dışlanma korkusu yaygındır; çoğu genç bu duyguyu yaşar ve zamanla sağlıklı ilişkilerle aşar." 
        },
        {
            question: "Hollywood filmlerinde genellikle kullanılan ünlü ödül heykelciğinin adı nedir?",
            image: "images/11.jpg", 
            options: { A: "Grammy", B: "Oscar", C: "Emmy", D: "Golden Globe" },
            correctAnswer: "B", 
            answerDetail: "Oscar ödülleri, sinema dünyasının en prestijli ödüllerindendir." 
        },
        {
            question: "Bir çiftçi için “tırpan”ın temel kullanım amacı nedir?",
            image: "images/12.jpg", 
            options: { A: "Tahılları biçmek", B: "Toprağı karıştırmak", C: "Hayvanları yönlendirmek", D: "Gübreyi yaymak" },
            correctAnswer: "A", 
            answerDetail: "Tırpan, özellikle buğday ve arpa gibi uzun saplı bitkilerin hasadında geleneksel olarak kullanılır." 
        },
        {
            question: "Çocukların genellikle brokoliyi sevmemelerinin nedeni nedir?",
            image: "images/13.jpg", 
            options: { A: "Çok yeşil görünmesi", B: "Çiğ yenmesi gerekmesi", C: "Acımsı tadı ve kokusu", D: "Sert olması" },
            correctAnswer: "C", 
            answerDetail: "Brokolideki bazı doğal bileşikler, çocukların damak tadına acı gelebilir ama çok sağlıklıdır." 
        },
        {
            question: "Uzun süreli stres, vücutta en çok hangi organ üzerinde etkili olur?",
            image: "images/14.jpg", 
            options: { A: "Kalp", B: "Mide", C: "Akciğer", D: "Karaciğer" },
            correctAnswer: "B", 
            answerDetail: "Stres, mide asidini artırarak gastrit ve ülser gibi sorunlara yol açabilir." 
        },
        {
            question: "Filistin’deki çocukların yaşadığı zorlukların temel nedeni nedir?",
            image: "images/15.jpg", 
            options: { A: "Nüfus fazlalığı", B: "Eğitim olanaklarının azlığı", C: "İklim koşulları", D: "İsrail’in Filistin halkına yaptığı soykırım" },
            correctAnswer: "D", 
            answerDetail: "Filistin’de yıllardır süren çatışmalar, binlerce masum çocuğun hayatını etkiliyor. Bu kart farkındalık amacı taşır." 
        },
        {
            question: "Efsanelerde ormanlarda yaşayan savaşçı kadın kabilelere ne ad verildiği söylenir?",
            image: "images/16.jpg", 
            options: { A: "Amazonlar", B: "Vikingler", C: "Hunlar", D: "Aztekler" },
            correctAnswer: "A", 
            answerDetail: "Efsanelere göre Amazon savaşçıları okçuluk ve atlı savaşlarda olağanüstü bir ustalığa sahipti." 
        },
        {
            question: "“Yeşilçam'ın 4 yapraklı yoncası” olarak bilinen kadın oyunculardan hangisi bu grubun içindedir?",
            image: "images/17.jpg", 
            options: { A: "Türkan Şoray", B: "Nurgül Yeşilçay", C: "Beren Saat", D: "Hande Erçel" },
            correctAnswer: "A", 
            answerDetail: "Yeşilçam’ın “4 Yapraklı Yoncası”: Türkan Şoray, Hülya Koçyiğit, Filiz Akın ve Fatma Girik olarak bilinir." 
        },
        {
            question: "Anime ve manga kültürü hangi ülkede ortaya çıkmıştır?",
            image: "images/18.jpg", 
            options: { A: "Güney Kore", B: "Çin", C: "Japonya", D: "Tayland" },
            correctAnswer: "C", 
            answerDetail: "Anime, Japonya’da 1900’lerin başında kısa deneysel filmlerle ortaya çıkmış; zamanla dünya çapında bir kültür hâline gelmiştir." 
        },
        {
            question: "Tarihte bilinen ilk kadın hükümdar-savaşçılardan biri kimdir?",
            image: "images/19.jpg", 
            options: { A: "Kleopatra", B: "Tomris Hatun", C: "Jeanne d'Arc", D: "Hatice Sultan" },
            correctAnswer: "B", 
            answerDetail: "Tomris Hatun, Pers İmparatoru Keyhüsrev’i yenen ilk kadın hükümdarlardan biri olarak tarihe geçmiştir." 
        },
        {
            question: "Ortaçağ saray palyaçolarının temel görevi neydi?",
            image: "images/20.jpg", 
            options: { A: "Askerlere taktik öğretmek", B: "Soyluları eğlendirmek", C: "Yasaları yazmak", D: "Savaşlara katılmak" },
            correctAnswer: "B", 
            answerDetail: "Ortaçağ saray soytarıları, yalnızca eğlendirmez; zaman zaman krallara gerçekleri mizah yoluyla söyleyebilen tek kişilerdi." 
        },
        {
            question: "Fok balıklarının vücutlarının soğuk sularda üşümeden yüzebilmesini sağlayan temel özellik nedir?",
            image: "images/21.jpg", 
            options: { A: "Kuyruklarının büyük olması", B: "Su altında şarkı söyleyebilmeleri", C: "Pullu derileri", D: "Yüksek vücut yağ oranı" },
            correctAnswer: "D", 
            answerDetail: "Foklar kalın yağ tabakaları sayesinde buz gibi sularda bile rahatça yüzebilirler." 
        },
        {
            question: "Leylekler her yıl göç ederken çoğunlukla neye güvenir?",
            image: "images/22.jpg", 
            options: { A: "Dünya’nın manyetik alanına", B: "Deniz akıntılarına", C: "Diğer hayvanları takip etmeye", D: "Kokulara" },
            correctAnswer: "A", 
            answerDetail: "Leylekler her yıl aynı yuva bölgesine geri dönebilecek kadar güçlü bir yön bulma içgüdüsüne sahiptir." 
        },
        {
            question: "Orangutanlar hangi özelliğiyle diğer primatlardan en çok ayrılır?",
            image: "images/23.jpg", 
            options: { A: "Uzayabilen boyunları", B: "Çok uzun kolları", C: "Uçmaları", D: "Soğuk iklimlerde yaşamaları" },
            correctAnswer: "B", 
            answerDetail: "Orangutanların kolları neredeyse kendileri kadar uzundur; ağaçtan ağaca adeta süzülürler." 
        },
        {
            question: "Tüysüz kedi türü olan “Sphynx” kedilerine bu adın verilmesinin temel nedeni nedir?",
            image: "images/24.jpg", 
            options: { A: "Mısır’da keşfedilmiş olmaları", B: "Güneşte renk değiştirmeleri", C: "Görünüşlerinin Antik Mısır’daki Sfenks heykeline benzemesi", D: "Tüylerinin sonradan dökülmesi" },
            correctAnswer: "C", 
            answerDetail: "Sphynx kedileri aslında Kanada kökenlidir; isimleri yalnızca yüz hatlarının Sfenks heykeline benzemesinden gelir." 
        },
        {
            question: "Sincaplar biriktirdikleri yiyecekleri genellikle nereye saklar?",
            image: "images/25.jpg", 
            options: { A: "Ağaç kovuklarına", B: "Su kuyularına", C: "Güneşin altına", D: "Taşların üzerine" },
            correctAnswer: "A", 
            answerDetail: "Sincaplar, kış için sakladıkları bazı tohumları unutur ve böylece doğada yeni ağaçların büyümesine katkı sağlar." 
        },
        {
            question: "Köpeklerin “sadık hayvanlar” olarak anılmasının en önemli nedeni nedir?",
            image: "images/26.jpg", 
            options: { A: "Tek başlarına yaşamayı sevmeleri", B: "Çok yavaş koşmaları", C: "Sadece geceleri aktif olmaları", D: "Sürü içgüdüsüyle hareket etmeleri" },
            correctAnswer: "D", 
            answerDetail: "Köpekler binlerce yıldır insanlarla birlikte yaşayan ilk evcil hayvanlardan biridir ve insanı sürü lideri olarak görür." 
        }
    ],
    en: [
        {
            question: "Why do snails usually come out after rain?",
            image: "images/01.jpg", 
            options: { A: "Moist air helps them move easily.", B: "Rain polishes their shells.", C: "Rain gives them energy.", D: "They love the sun." },
            correctAnswer: "A", 
            answerDetail: "Moist weather provides the ideal environment for them to move without drying out." 
        },
        {
            question: "What is the first step to safely start a campfire?",
            image: "images/02.jpg", 
            options: { A: "Start directly with big logs.", B: "Make a circle with small dry twigs.", C: "Light it on grass.", D: "Pour fuel and light it." },
            correctAnswer: "B", 
            answerDetail: "To keep the fire controlled, a foundation with small twigs must be built first." 
        },
        {
            question: "In which century did the concept of 'fashion' emerge in the modern sense?",
            image: "images/03.jpg", 
            options: { A: "17th Century", B: "18th Century", C: "19th Century", D: "20th Century" },
            correctAnswer: "C", 
            answerDetail: "The 19th century is considered the birth of modern fashion with the start of mass production." 
        },
        {
            question: "In mythological stories, what does the 'lion' usually represent?",
            image: "images/04.jpg",
            options: { A: "Wisdom", B: "Loyalty", C: "Ambition", D: "Strength and courage" },
            correctAnswer: "D",
            answerDetail: "The lion has been a symbol of royalty, power, and unwavering courage in many cultures throughout history."
        }, 
        {
            question: "Is there any evidence that dragons actually existed?",
            image: "images/05.jpg",
            options: { A: "Yes, remains have been found.", B: "No, they only appear in legends.", C: "Science has definitively proven it.", D: "It is believed that they still live in some regions." },
            correctAnswer: "B",
            answerDetail: "Dragons are mythical creatures found in the mythologies of different cultures; there is no biological evidence."
        },
        {
            question: "In which country is the tradition of 'snake charmers' best known?",
            image: "images/06.jpg",
            options: { A: "India", B: "Brazil", C: "Turkey", D: "Japan" },
            correctAnswer: "A",
            answerDetail: "In India, snake charmers are known for their cobra snakes that follow the vibration of the music, not the movement."
        },
        {
            question: "From which culture does the Afro hairstyle originate?",
            image: "images/07.jpg",
            options: { A: "African culture", B: "Scandinavian culture", C: "Chinese court culture", D: "South American Native Americans" },
            correctAnswer: "A",
            answerDetail: "The Afro hairstyle originated from the natural hair structure of African-descended communities and is a symbol of identity and freedom."
        },
        {
            question: "Which work is Dostoevsky, one of the famous writers of Russian literature, known for?",
            image: "images/08.jpg",
            options: { A: "Les Misérables", B: "Crime and Punishment", C: "The Count of Monte Cristo", D: "The Little Prince" },
            correctAnswer: "B",
            answerDetail: "Dostoevsky is a pioneer of the 'psychological novel' as one of the writers who deals with the inner conflicts of man in the deepest way."
        },
        {
            question: "What is the name given to the elegant and classic women's clothing style of the past?",
            image: "images/09.jpg",
            options: { A: "Vintage", B: "Futuristic", C: "Street Fashion", D: "Urban Chic" },
            correctAnswer: "A",
            answerDetail: "'Vintage' is a fashion concept that brings the original texture and elegance of clothing from past eras to the present day."
        },
        {
            question: "What situation does the fear of not being accepted within a peer group often lead to in young people?",
            image: "images/10.jpg",
            options: { A: "Social anxiety", B: "Overconfidence", C: "Indifference", D: "Increased aggression" },
            correctAnswer: "A",
            answerDetail: "The fear of exclusion is common in adolescence; most young people experience this feeling and overcome it with healthy relationships over time."
        }, 
        {
            question: "What is the name of the famous award statuette commonly used in Hollywood films?",
            image: "images/11.jpg",
            options: { A: "Grammy", B: "Oscar", C: "Emmy", D: "Golden Globe" },
            correctAnswer: "B",
            answerDetail: "The Oscar awards are among the most prestigious awards in the film world."
        },
        {
            question: "What is the primary use of a scythe for a farmer?",
            image: "images/12.jpg",
            options: { A: "To harvest grains", B: "To mix the soil", C: "To guide animals", D: "To spread manure" },
            correctAnswer: "A",
            answerDetail: "The scythe is traditionally used, especially for harvesting long-stemmed plants such as wheat and barley."
        },
        {
            question: "What is the reason why children generally don't like broccoli?",
            image: "images/13.jpg",
            options: { A: "It looks too green", B: "It needs to be eaten raw", C: "Its bitter taste and smell", D: "It's hard" },
            correctAnswer: "C",
            answerDetail: "Some natural compounds in broccoli may taste bitter to children's palates, but it is very healthy."
        }, 
        {
            question: "Which organ in the body is most affected by long-term stress?",
            image: "images/14.jpg",
            options: { A: "Heart", B: "Stomach", C: "Lungs", D: "Liver" },
            correctAnswer: "B",
            answerDetail: "Stress can increase stomach acid, leading to problems such as gastritis and ulcers."
        },
        {
            question: "What is the root cause of the hardships faced by children in Palestine?",
            image: "images/15.jpg",
            options: { A: "Overpopulation", B: "Lack of educational opportunities", C: "Climate conditions", D: "Genocide committed by Israel against the Palestinian people" },
            correctAnswer: "D",
            answerDetail: "The conflicts that have been going on in Palestine for years are affecting the lives of thousands of innocent children. This card is for awareness purposes."
        },
        {
            question: "What is the name given to the warrior women tribes living in the forests in legends?",
            image: "images/16.jpg",
            options: { A: "Amazons", B: "Vikings", C: "Huns", D: "Aztecs" },
            correctAnswer: "A",
            answerDetail: "According to legends, Amazon warriors possessed extraordinary skill in archery and horsemanship."
        },
        {
            question: "Which of the female actors known as the 'four-leaf clover of Yeşilçam' is in this group?",
            image: "images/17.jpg",
            options: { A: "Türkan Şoray", B: "Nurgül Yeşilçay", C: "Beren Saat", D: "Hande Erçel" },
            correctAnswer: "A",
            answerDetail: "The 'Four-Leaf Clover' of Yeşilçam: Türkan Şoray, Hülya Koçyiğit, Filiz Akın and Fatma Girik are known as."
        },
        {
            question: "In which country did anime and manga culture originate?",
            image: "images/18.jpg",
            options: { A: "South Korea", B: "China", C: "Japan", D: "Thailand" },
            correctAnswer: "C",
            answerDetail: "Anime emerged in Japan in the early 1900s with short experimental films; Over time, it has become a global culture."
        },
        {
            question: "Who is one of the first known female ruler-warriors in history?",
            image: "images/19.jpg",
            options: { A: "Cleopatra", B: "Tomris Hatun", C: "Jeanne d'Arc", D: "Hatice Sultan" },
            correctAnswer: "B",
            answerDetail: "Tomris Hatun went down in history as one of the first female rulers to defeat the Persian Emperor Keyhüsrev."
        }, 
        {
            question: "What was the main task of medieval court clowns?",
            image: "images/20.jpg",
            options: { A: "To teach tactics to soldiers", B: "To entertain the nobility", C: "To write laws", D: "To participate in wars" },
            correctAnswer: "B",
            answerDetail: "Medieval court jesters did not only entertain; They were the only ones who could sometimes tell kings the truth through humor."
        },
        {
            question: "What is the main characteristic that allows seals to swim in cold waters without getting cold?",
            image: "images/21.jpg",
            options: { A: "Their large tails", B: "Their ability to sing underwater", C: "Their scaly skin", D: "High body fat percentage" },
            correctAnswer: "D",
            answerDetail: "Seals can swim comfortably even in icy waters thanks to their thick layers of fat."
        }, 
        {
            question: "What do storks mostly rely on when migrating every year?",
            image: "images/22.jpg",
            options: { A: "The Earth's magnetic field", B: "Ocean currents", C: "Following other animals", D: "Smells" },
            correctAnswer: "A",
            answerDetail: "Storks have such a strong sense of direction that they can return to the same nesting area every year."
        },
        {
            question: "What characteristic distinguishes orangutans from other primates the most?",
            image: "images/23.jpg",
            options: { A: "Their extendable necks", B: "Their very long arms", C: "Their ability to fly", D: "Their ability to live in cold climates" },
            correctAnswer: "B",
            answerDetail: "Orangutans' arms are almost as long as they are; They glide from tree to tree."
        },
        {
            question: "What is the main reason for giving the name 'Sphynx' to the hairless cat breed?",
            image: "images/24.jpg",
            options: { A: "Because they were discovered in Egypt", B: "Because they change color in the sun", C: "Because their appearance resembles the Sphinx statue in Ancient Egypt", D: "Because their fur sheds later" },
            correctAnswer: "C",
            answerDetail: "Sphynx cats are actually of Canadian origin; Their names come only from the fact that their facial features resemble the Sphinx statue."
        },
        {
            question: "Where do squirrels usually hide the food they collect?",
            image: "images/25.jpg",
            options: { A: "In tree hollows", B: "In water wells", C: "Under the sun", D: "On stones" },
            correctAnswer: "A",
            answerDetail: "Squirrels forget some of the seeds they've stored for the winter, thus contributing to the growth of new trees in nature."
        },
        {
            question: "What is the most important reason why dogs are called 'loyal animals'?",
            image: "images/26.jpg",
            options: { A: "They like to live alone", B: "They run very slowly", C: "They are only active at night", D: "They act with pack instinct" },
            correctAnswer: "D",
            answerDetail: "Dogs are one of the first domesticated animals to live with humans for thousands of years and see humans as pack leaders."
        }
    ]
};

// --- OYUN DEĞİŞKENLERİ ---
let currentCardIndex = 0;
let score = 0;
let isFlipping = false;
let currentQuestions = []; // Seçilen dile göre sorular buraya yüklenecek

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
const answerLabel = document.querySelector('.answer-label'); // Yeni eklenen
const langButtons = document.querySelectorAll('.lang-btn');

// --- FONKSİYONLAR ---

// Dil Seçimi
function setLanguage(lang) {
    currentLang = lang;
    
    // Buton aktiflik durumu
    langButtons.forEach(btn => btn.classList.remove('active'));
    if(lang === 'tr') langButtons[0].classList.add('active');
    else langButtons[1].classList.add('active');

    // Başlangıç butonu metnini güncelle
    startButton.textContent = uiTranslations[currentLang].startButton;
}

// Oyunu Başlatma
function startGame() {
    currentQuestions = quizData[currentLang]; // Dile göre soruları seç
    
    // Eğer o dilde soru yoksa uyarı ver (güvenlik)
    if (!currentQuestions || currentQuestions.length === 0) {
        alert("Bu dilde henüz soru eklenmemiş!");
        return;
    }

    score = 0;
    currentCardIndex = 0;
    scoreSpan.textContent = score;
    
    initialScreen.style.display = 'none'; 
    gameArea.style.display = 'block'; 

    // Arayüzü dile göre güncelle
    updateUITexts();

    loadCard(currentCardIndex);
    
    // Dinleyiciler
    if (optionButtons.length > 0 && !optionButtons[0].hasAttribute('data-listener-added')) {
        optionButtons.forEach(button => {
            button.addEventListener('click', handleAnswer);
            button.setAttribute('data-listener-added', 'true');
        });
    }
}

// Sabit arayüz metinlerini güncelleme fonksiyonu
function updateUITexts() {
    const t = uiTranslations[currentLang];
    const scoreBoard = document.querySelector('.score-board');
    // Score board textini yeniden oluşturuyoruz çünkü içinde span'ler var
    scoreBoard.innerHTML = `${t.scoreLabel}: <span id="score">${score}</span> / ${t.cardLabel}: <span id="card-index">${currentCardIndex + 1}</span>/${currentQuestions.length}`;
    
    nextCardButton.textContent = t.nextButton;
    answerLabel.textContent = t.correctLabel;
}

// Kartı Yükleme
function loadCard(index) {
    if (index >= currentQuestions.length) {
        showEndScreen();
        return;
    }

    quizCard.classList.remove('flipped');
    const cardData = currentQuestions[index];
    const t = uiTranslations[currentLang];

    questionText.textContent = cardData.question;
    cardFrontFace.style.backgroundImage = `url('${cardData.image}')`; 
    
    optionButtons.forEach(button => {
        const option = button.getAttribute('data-option'); 
        button.textContent = `${option}) ${cardData.options[option]}`;
        button.disabled = false;
        button.classList.remove('correct-btn', 'wrong-btn');
        button.style.backgroundColor = '';
    });

    correctAnswerText.textContent = `${cardData.correctAnswer}) ${cardData.options[cardData.correctAnswer]} - ${cardData.answerDetail}`;
    
    nextCardButton.style.display = 'none'; 
    feedbackText.textContent = '';
    
    // Skor tabelasını güncelle
    document.getElementById('card-index').textContent = index + 1;
    // Toplam sayıyı da güncelle (dil değişince dizi boyutu değişebilir)
    const scoreBoardText = document.querySelector('.score-board').lastChild; // "/ 26" kısmı
    if(scoreBoardText) scoreBoardText.textContent = `/${currentQuestions.length}`;
}

// Cevap Kontrolü
function handleAnswer(event) {
    if (isFlipping) return; 

    const selectedOption = event.target.getAttribute('data-option');
    const cardData = currentQuestions[currentCardIndex];
    const isCorrect = selectedOption === cardData.correctAnswer;
    const t = uiTranslations[currentLang];

    optionButtons.forEach(button => button.disabled = true);

    if (isCorrect) {
        score++;
        document.getElementById('score').textContent = score;
        feedbackText.textContent = t.feedbackCorrect;
        feedbackText.className = 'feedback-message correct';
        event.target.classList.add('correct-btn');
    } else {
        feedbackText.textContent = t.feedbackWrong;
        feedbackText.className = 'feedback-message wrong';
        event.target.classList.add('wrong-btn'); 
        
        optionButtons.forEach(button => {
            if (button.getAttribute('data-option') === cardData.correctAnswer) {
                button.classList.add('correct-btn');
            }
        });
    }

    isFlipping = true;
    quizCard.classList.add('flipped');
    
    setTimeout(() => {
        nextCardButton.style.display = 'block';
        isFlipping = false;
    }, 800);
}

function nextCard() {
    // 1. Önce "Sonraki Kart" butonunu gizleyelim ki üst üste basılmasın
    nextCardButton.style.display = 'none';

    // 2. Kartı hemen tersine (ön yüzüne) çevirmeye başla
    // Bu aşamada henüz index'i arttırmıyoruz, yani eski cevap kartın arkasında duruyor.
    quizCard.classList.remove('flipped');

    // 3. Verileri yüklemek için kartın dönmesini bekle
    // CSS'te dönüş süresi 0.8s idi. Biz 0.6s (600ms) bekleyip öyle değiştirelim.
    // Böylece kart neredeyse kapandığında soru değişecek.
    setTimeout(() => {
        currentCardIndex++;
        loadCard(currentCardIndex);
    }, 600); 
}

function showEndScreen() {
    gameArea.style.display = 'none';
    const t = uiTranslations[currentLang];
    
    // Mesajı dile göre formatla
    let msg = t.gameOver.replace('{score}', score).replace('{total}', currentQuestions.length);
    feedbackText.textContent = msg;
    feedbackText.className = 'feedback-message correct';
    
    startButton.textContent = t.playAgain;
    startButton.onclick = startGame; 
    
    initialScreen.style.display = 'flex'; 
    
    const oldMsg = document.getElementById('final-msg');
    if(oldMsg) oldMsg.remove();
    
    const finalMsg = document.createElement('p');
    finalMsg.id = 'final-msg';
    finalMsg.style.fontWeight = 'bold';
    finalMsg.style.fontSize = '1.2em';
    finalMsg.style.color = '#333';
    
    let scoreMsg = t.finalScore.replace('{score}', score).replace('{total}', currentQuestions.length);
    finalMsg.textContent = scoreMsg;
    
    initialScreen.insertBefore(finalMsg, startButton);
}

window.onload = () => {
    // İlk açılışta tr yüklü gelsin
    setLanguage('tr');
};
