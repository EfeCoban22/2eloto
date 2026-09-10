# 🚗 2ElOto - İkinci El Araç Platformu

## 📋 Proje Hakkında

**2ElOto**, ikinci el araç satışı ve arama platformu olarak tasarlanmış bir web uygulamasıdır. Kullanıcıların farklı kriterlere göre araç araması yapabilmesi, filtreleme işlemleri gerçekleştirebilmesi ve araç detaylarını incelemesi sağlayan modern bir platformdur. 

Bu proje, staj programı kapsamında yapay zeka destekli geliştirme süreçleri kullanılarak uçtan uca (Front-to-Back) inşa edilmiştir.

**Proje Tipi**: Full-Stack Web Uygulaması (SPA)
**Geliştirici**: Efe Çoban  
**Başlangıç Tarihi**: 2026  
**GitHub Repository**: [EfeCoban22/2eloto](https://github.com/EfeCoban22/2eloto)

---

## ✨ Özellikler

### 1. **Araç Listeleme**
- PostgreSQL veritabanından dinamik olarak beslenen araç listesi
- Responsive grid layout ile araç kartları görüntüleme
- Hover efektleri ile kullanıcı deneyimi iyileştirmesi
- Araç resmi, marka, model, araç tipi ve fiyat bilgileri

### 2. **Filtreleme Sistemi**
- **Marka Filtrelemesi**: Renault, Volkswagen, Fiat, Toyota, Hyundai
- **Motor Tipi Filtrelemesi**: Benzin, Dizel, Hibrit, Elektrik
- **Fiyat Aralığı Filtrelemesi**: Maksimum fiyat giriş alanı
- **Dinamik Sonuç Sayacı**: Filtreleme sonrası API'den dönen eşleşen araç sayısı
- **Temizle Butonu**: Tüm filtreleri sıfırlama işlevi

### 3. **Araç Detay Sayfası**
- Tam araç bilgileri: Araç tipi, motor tipi, kasko durumu, sigorta bilgisi, kredi imkânı
- Büyütülmüş araç resmi
- Geri dönme linki ile navigasyon
- Formatlı fiyat gösterimi (₺ sembolü)

### 4. **Yönlendirme (Routing) Sistemi**
- Hash-based routing (`#liste`, `#detay/:id`)
- Sayfa yenileme olmadan (SPA mantığıyla) akıcı navigasyon

---

## 🛠️ Teknolojiler & Araçlar

| Katman | Teknoloji / Araç |
|-----------|----------|
| **Ön Yüz (Frontend)** | HTML5, CSS3, JavaScript (ES6) |
| **Arka Uç (Backend)** | Python, Flask, Flask-CORS |
| **Veritabanı** | PostgreSQL, psycopg2 (DB Sürücüsü) |
| **Araçlar & Mimari** | VS Code, DBeaver, RESTful API |

---

## 📁 Proje Yapısı

```text
2eloto_projesi/
├── backend/
│   ├── app.py           # Flask sunucusu ve API rotaları
│   ├── db.py            # Veritabanı bağlantı katmanı
│   ├── .env             # Çevre değişkenleri (Gizli DB şifreleri)
│   └── requirements.txt # Python bağımlılık listesi
├── frontend/
│   ├── index.html       # Ana SPA iskeleti
│   ├── app.js           # Frontend mantığı ve fetch() çağrıları
│   └── style.css        # Tasarım dosyası
└── kurulum_ve_veriler.sql # PostgreSQL tablo kurulum (DDL) ve veri (DML) betiği