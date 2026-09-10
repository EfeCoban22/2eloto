# 2ElOto Projesi: Bilinen Kısıtlar ve Geliştirilebilecek Alanlar Raporu

## 1. Bilinen Kısıtlar ve İş Mantığı İhlalleri (Yüksek Öncelikli)
* **Pasif Araçların URL Üzerinden Erişilebilirliği:** Durumu `status=pasif` olan bir aracın ana listede görünmemesi kuralı başarılı çalışmaktadır. Ancak, detay sayfasına doğrudan URL üzerinden gidilmek istendiğinde sistem engelleme yapmamaktadır. Backend HTTP `404 Not Found` dönmeli ve frontend "İlan aktif değildir" uyarısı göstermelidir.
* **Eksik Veri (NULL) Durumunda Arayüz Davranışı:** Aracın resminin olmaması durumunda frontend bu eksikliği yönetememektedir. Arayüzün bozulmasını engellemek için varsayılan bir yer tutucu (placeholder) görsel gösterilmelidir.
* **Geçersiz Filtre ve Hata Yönetimi Standardizasyonu:** Eşleşmeyen filtre kombinasyonlarında API çökmemekte ancak hata yönetimi (response) formatının standardize edilmesi gerekmektedir.

## 2. Performans İyileştirmeleri (Orta Öncelikli)
* **Sayfalama (Pagination) Eksikliği:** Tüm kayıtlar tek bir JSON paketi olarak çekilmektedir. Araç sayısı arttıkça backend tarafına `LIMIT` ve `OFFSET` parametreleri eklenmeli, frontend'e sayfalama entegre edilmelidir.
* **Görsellerin Tembel Yüklenmesi (Lazy Loading):** Çok sayıda resmin aynı anda indirilmesi performans kaybına yol açmaktadır. Kullanıcı sayfayı kaydırdıkça resimlerin yüklenmesini sağlayacak yapı sisteme dahil edilmelidir.

## 3. Kullanılabilirlik (UX) ve Sistem Esnekliği (Düşük Öncelikli)
* **Sınırlı Filtreleme Seçenekleri:** Kullanıcının aynı anda birden fazla motor tipi seçebileceği çoklu seçim mantığına geçilmeli, fiyat aralığı kaydırma çubuğu (slider) ile yönetilmelidir.
* **Asenkron İşlem Geri Bildirimi:** Veri yüklenirken sistemin çalıştığını gösteren görsel durum belirteçleri (loading spinner) eklenmelidir.