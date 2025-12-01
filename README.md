# 🃏 Bilgi Kartı Oyunu (Flashcard Quiz App)

## 📝 Proje Tanımı

Bu proje, HTML, CSS ve saf JavaScript kullanılarak geliştirilmiş basit ve etkileşimli bir Bilgi Kartı (Flashcard) Quiz uygulamasıdır. Kullanıcıların soruları yanıtlaması, kartın arka yüzünde doğru cevabı ve detaylı bilgiyi görmesi üzerine kurulmuştur.

## ✨ Temel Özellikler

  * **Kart Çevirme Efekti:** CSS3 `transform` özellikleri kullanılarak akıcı 3D kart çevirme animasyonu.
  * **Puanlama Sistemi:** Doğru cevaplar için anlık puan güncellemesi.
  * **Açılış/Bitiş Ekranı:** Oyun başlangıcını ve final skorunu gösteren ayrı ekranlar.
  * **Geri Bildirim:** Doğru ve yanlış cevaplar için renkli görsel geri bildirim.
  * **Esnek Veri Yapısı:** Tüm soru ve cevaplar kolayca yönetilebilir bir JavaScript dizisi (`quizCards`) içinde tutulur.

## 🚀 Nasıl Çalıştırılır?

Bu uygulama tamamen istemci tabanlı (client-side) olduğu için herhangi bir sunucuya ihtiyaç duymaz.

1.  Projeyi indirin veya klonlayın.
2.  Ana dizindeki **`index.html`** dosyasını herhangi bir modern web tarayıcısında (Chrome, Firefox, Edge vb.) açın.

## 📂 Dosya Yapısı

Proje aşağıdaki temel dosya ve klasörlerden oluşur:

```
bilgi-kart-oyunu/
├── index.html          # Ana sayfa yapısı ve DOM
├── style.css           # Görünüm ve kart çevirme animasyonları
├── script.js           # Oyun mantığı ve JavaScript kodu
└── images/             # Tüm soru, açılış ve arka plan resimleri
    ├── 01.jpg
    ├── 02.jpg
    ├── ...
    └── 26.jpg
    └── arkaplan.jpg
    └── opening_image.jpg
```

-----

## 🔧 Özelleştirme ve Geliştirme

### Yeni Kart Ekleme

Yeni bir kart eklemek veya mevcut kartları düzenlemek için **`script.js`** dosyasının başındaki **`quizCards`** dizisini düzenleyebilirsiniz.

```javascript
const quizCards = [
    {
        question: "Yeni soru metni buraya gelir?",
        image: "images/27.jpg", // Yeni resminizin adını yazın
        options: {
            A: "Seçenek A",
            B: "Seçenek B",
            C: "Seçenek C",
            D: "Seçenek D"
        },
        correctAnswer: "A", 
        answerDetail: "Doğru cevabın detaylı açıklaması buraya gelir." 
    },
    // ... diğer kartlar
];
```

### 🖼️ Resim Kuralları

  * Tüm resimler **`images/`** klasöründe olmalıdır.
  * Kart resimlerinin adları (örn: `01.jpg`, `02.jpg`, `26.jpg`) dosya içindeki `image` alanıyla **tam olarak** eşleşmelidir.

### 📊 Kart Sayısını Güncelleme

Eğer kart sayısını 26'dan farklı bir değere (örneğin 30) çıkarırsanız, `index.html` dosyasındaki Puan Tahtası bölümünü manuel olarak güncellemeniz gerekir:

```html
<div class="score-board">Puan: <span id="score">0</span> / Kart: <span id="card-index">0</span>/**30**</div>
```

-----

## 🛠️ Sorun Giderme

Eğer yaptığınız değişiklikler tarayıcıda görünmüyorsa:

1.  **Hard Refresh (Zorla Yenileme):** Tarayıcı önbelleğini temizlemek için **`Ctrl + F5`** (Windows/Linux) veya **`Cmd + Shift + R`** (Mac) tuşlarına basın.
2.  **Dosya Yolu Kontrolü:** `script.js` içindeki resim yollarının (`images/01.jpg`) ve dosya uzantılarının (jpg/png) doğru olduğundan emin olun.
