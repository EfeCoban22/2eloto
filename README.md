# 🚗 2ElOto - İkinci El Araç Platformu

## 📋 Proje Hakkında

**2ElOto**, ikinci el araç satışı ve arama platformu olarak tasarlanmış bir web uygulamasıdır. Kullanıcıların farklı kriterlere göre araç araması yapabilmesi, filtreleme işlemleri gerçekleştirebilmesi ve araç detaylarını incelemesi sağlayan modern bir platformdur.

**Proje Tipi**: Frontend Uygulaması  
**Geliştirici**: Efe Çoban  
**Başlangıç Tarihi**: 2026  
**GitHub Repository**: [EfeCoban22/2eloto](https://github.com/EfeCoban22/2eloto)

---

## ✨ Özellikler

### 1. **Araç Listeleme**
- Mock veri ile 5 araçlık örnek araç veritabanı
- Responsive grid layout ile araç kartları görüntüleme
- Hover efektleri ile kullanıcı deneyimi iyileştirmesi
- Araç resmi, marka, model, araç tipi ve fiyat bilgileri

### 2. **Filtreleme Sistemi**
- **Marka Filtrelemesi**: Renault, Volkswagen, Fiat, Toyota, Hyundai
- **Motor Tipi Filtrelemesi**: Benzin, Dizel, Hibrit, Elektrik
- **Fiyat Aralığı Filtrelemesi**: Maksimum fiyat giriş alanı
- **Dinamik Sonuç Sayacı**: Filtreleme sonrası eşleşen araç sayısı
- **Temizle Butonu**: Tüm filtreleri sıfırlama işlevi

### 3. **Araç Detay Sayfası**
- Tam araç bilgileri: Araç tipi, motor tipi, kasko durumu, sigorta bilgisi, kredi imkânı
- Büyütülmüş araç resmi
- Geri dönme linki ile navigasyon
- Formatlı fiyat gösterimi (₺ sembolü)

### 4. **Responsive Tasarım**
- Desktop, tablet ve mobil cihazlara uyumlu arayüz
- CSS Grid ve Flexbox kullanarak esnek layout
- @media queries ile mobile görünüm optimizasyonu

### 5. **Yönlendirme (Routing) Sistemi**
- Hash-based routing (#liste, #detay/:id)
- Sayfa yenileme olmadan navigasyon
- Browser history desteği

---

## 🛠️ Teknolojiler & Araçlar

| Teknoloji | Kullanım |
|-----------|----------|
| **HTML5** | Yapısal içerik ve semantik markup |
| **CSS3** | Stil, layout ve responsive tasarım |
| **JavaScript (ES6)** | Dinamik işlemler ve state yönetimi |
| **Unsplash API** | Araç görselleri |

---

## 📁 Proje Yapısı

```
2eloto/
├── index.html           # Ana HTML dosyası
├── app.js              # JavaScript mantığı ve işlevsellik
├── style.css           # Stil dosyası
└── README.md           # Belgelendirme
```

### Dosya Açıklamaları

#### **index.html**
- Sayfa başlığı ve meta tag'ler
- Header ile logo ve navigasyon
- `#app-icerik` id'li dinamik içerik alanı
- JavaScript ve CSS dosyalarının bağlanması

#### **app.js**
Beş ana bölümden oluşmaktadır:

1. **Mock Veri & Filtre Hafızası** (Satır 1-20)
   - 5 araçlık örnek veri seti
   - Filtre durumunu tutan `guncelFiltreler` objesi
   - Para formatlama fonksiyonu

2. **Listeleme & Filtre Ekranı** (Satır 22-75)
   - `renderListe()` fonksiyonu: Araç kartları ve filtreleri oluşturur
   - Dropdown menüler ve input alanları

3. **Filtreleme Algoritmaları** (Satır 77-105)
   - `filtreUygula()`: Seçilen kriterlere göre araçları filtreler
   - `filtreTemizle()`: Filtreleri sıfırlar

4. **Detay Ekranı** (Satır 107-140)
   - `renderDetay()` fonksiyonu: Seçilen araç için detay sayfası oluşturur
   - Araç bulunamadığı durumda hata mesajı gösterir

5. **Yönlendirme (Router) Kontrolü** (Satır 142-156)
   - `yonlendir()` fonksiyonu: URL hash'ine göre sayfaları değiştirir
   - `hashchange` ve `DOMContentLoaded` event listener'ları

#### **style.css**
- **Genel Stiller**: Renk, font ve box-sizing
- **Header**: Başlık ve navigasyon stilini
- **Araç Kartları**: Grid layout ve hover efektleri
- **Detay Sayfası**: Responsive flex layout
- **Filtreleme Alanı**: Form elemanları ve butonlar
- **Responsive**: @media queries ile mobil uyumluluğu

---

## 🎯 Kod Mimarisi & Tasarım Desenleri

### **1. Fonksiyonel Programlama**
- Saf fonksiyonlar kullanılarak, side effects minimize edilmiş
- `mockAraclar` verisi immutable olarak kullanılır

### **2. State Yönetimi**
- Global `guncelFiltreler` objesi ile filtre durumu yönetimi
- Basit ama etkili state yapısı

### **3. Event-Driven Architecture**
- Event listener'ları ile kullanıcı etkileşimlerine yanıt verme
- Hash change olayları ile navigasyon

### **4. Responsive Web Design**
- Mobile-first yaklaşımı
- CSS Grid ve Flexbox kullanımı
- Media queries ile breakpoint'ler

---

## 🚀 Kurulum & Kullanım

### **Gereksinimler**
- Modern tarayıcı (Chrome, Firefox, Safari, Edge)
- Basit HTTP server (isteğe bağlı, dosya protokolü çalışır)

### **Kurulum Adımları**

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/EfeCoban22/2eloto.git
cd 2eloto
```

2. **Projeyi açın**
   - Doğrudan `index.html` dosyasını tarayıcıda açın veya
   - Python ile local server başlatın:
   ```bash
   python -m http.server 8000
   ```
   - Tarayıcıda `http://localhost:8000` adresine gidin

### **Kullanım**

1. **Ana Sayfa**: Tüm araçlar listelenir
2. **Filtreleme**: 
   - Marka, motor tipi ve/veya maksimum fiyat seçin
   - "Filtrele" butonuna tıklayın
   - Sonuçlar dinamik olarak güncellenir
3. **Araç Detayları**: Araç kartına tıklayarak detayları görüntüleyin
4. **Geri Dönme**: Detay sayfasından "← İlanlara Dön" linkine tıklayın

---

## 📊 Mock Veri Şeması

Her araç objesi aşağıdaki özelliklerle tanımlanır:

```javascript
{
  id: Number,              // Araç benzersiz kimliği
  marka: String,          // Araç markası
  model: String,          // Araç modeli
  arac_tipi: String,      // Hatchback, Sedan vb.
  motor_tipi: String,     // Benzin, Dizel, Hibrit, Elektrik
  fiyat: Number,          // Fiyat (₺)
  resim_url: String,      // Araç resmi URL'si
  kasko_bilgisi: String,  // Kasko durumu
  sigorta_bilgisi: String,// Sigorta bilgisi
  kredi_imkani: Boolean   // Kredi imkânı var/yok
}
```

---

## 🔄 İş Akışı (User Journey)

```
Uygulama Başlatılır
    ↓
Ana Sayfa Yüklenir (Tüm araçlar listelenir)
    ↓
┌───────────────────────────────────────┐
│  Filtreleme Yapılır (İsteğe Bağlı)   │
│  - Marka Seç                         │
│  - Motor Tipi Seç                    │
│  - Max Fiyat Gir                     │
│  - Filtrele Butonu Tıkla             │
└───────────────────────────────────────┘
    ↓
Filtrelenmiş Sonuçlar Görüntülenir
    ↓
Araç Kartına Tıkla
    ↓
Araç Detay Sayfası Açılır
    ↓
Geri Dön Linki ile Ana Sayfaya Dön
```

---

## 🧪 Test Senaryoları

| Senaryo | Adımlar | Beklenen Sonuç |
|---------|---------|----------------|
| **Uygulama Yükleme** | index.html dosyasını açın | Tüm 5 araç görüntülenir |
| **Marka Filtrelemesi** | Renault seçip Filtrele tıklayın | Sadece Renault araçları görüntülenir |
| **Fiyat Filtrelemesi** | 1200000 girin ve Filtrele tıklayın | 1200000'den ucuz araçlar görüntülenir |
| **Temiz Filtre** | Temizle butonuna tıklayın | Tüm araçlar yeniden görüntülenir |
| **Detay Sayfası** | Bir araç kartına tıklayın | İlgili araç detayları gösterilir |
| **Responsive Tasarım** | Tarayıcı genişliğini değiştirin | Düzen mobil cihazlara uyum sağlar |

---

## 💡 Geliştirme Fırsatları & İyileştirmeler

### Kısa Vadeli İyileştirmeler
- [ ] Backend entegrasyonu (Node.js, Express vb.)
- [ ] Gerçek veritabanı bağlantısı (MongoDB, PostgreSQL)
- [ ] Kullanıcı kimlik doğrulaması ve oturum yönetimi
- [ ] Arama (search) fonksiyonalitesi eklenmesi
- [ ] Sıralama (sorting) seçenekleri (fiyat, yeni, vb.)

### Orta Vadeli İyileştirmeler
- [ ] React/Vue.js ile modern framework'e geçiş
- [ ] API testi ve hata yönetimi
- [ ] Sayfalama (pagination) sistemi
- [ ] Favoriler/Watchlist özelliği
- [ ] Kullanıcı incelemeleri ve değerlendirmeleri

### Uzun Vadeli İyileştirmeler
- [ ] Admin paneli (araç ekleme, düzenleme, silme)
- [ ] İleri filtreleme seçenekleri (km, model yılı, vb.)
- [ ] Araç karşılaştırma özelliği
- [ ] Galeri ve 360° araç fotoğrafları
- [ ] Mobil uygulama (React Native/Flutter)

---

## 📈 Performans Optimizasyonları

1. **Resim Optimizasyonu**
   - Unsplash API'dan optimize edilmiş resimler kullanılmış
   - Lazy loading uygulanabilir

2. **CSS Optimizasyonu**
   - Minified CSS dosyası oluşturulabilir
   - Kritik CSS ayırabilir

3. **JavaScript Optimizasyonu**
   - Debounce/Throttle uygulanabilir
   - Code splitting yapılabilir

---

## 🔒 Güvenlik Notları

- Şu an mock veri kullanıldığından güvenlik sorunu yoktur
- Backend entegrasyonunda:
  - Input validation ve sanitization uygulanmalı
  - SQL injection koruması
  - CSRF token kullanımı
  - HTTPS bağlantısı zorunlu

---

## 📞 İletişim & Katkılar

- **GitHub**: [EfeCoban22/2eloto](https://github.com/EfeCoban22/2eloto)
- **Katkılar Hoşgeldindir**: Pull request'ler kabul edilir
- **Hata Raporları**: Issues sekmesinden bildirebilirsiniz

---

## 📄 Lisans

Bu proje MIT Lisansı altında yayınlanmıştır.

---

## 📚 Kaynaklar & Referanslar

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS-Tricks Grid Rehberi](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Web Design Prensipleri](https://www.w3.org/TR/mobile-bp/)
- [Unsplash API Dokümantasyonu](https://unsplash.com/api)

---

## 🎓 Staj Programı İçeriği

### Kazanılan Beceriler
✅ HTML5 Semantik Markup  
✅ CSS3 - Grid, Flexbox, Responsive Design  
✅ JavaScript ES6+ - Fonksiyonel Programlama, DOM Manipulasyonu  
✅ State Yönetimi ve Event Handling  
✅ Web Performance ve UX Tasarımı  
✅ Git ve GitHub Kullanımı  
✅ API Entegrasyonu (Unsplash)  
✅ Proje Belgelendirmesi (Documentation)  

---

**Son Güncelleme**: 29 Ağustos 2026

**Versyon**: 1.0.0

---

*2ElOto © 2026 - Tüm Hakları Saklıdır*
