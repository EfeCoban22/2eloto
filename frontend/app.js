// 1. API ADRESİ VE GLOBAL DURUM
const API_BASE_URL = 'http://127.0.0.1:5000/api';
let guncelFiltreler = { marka: '', motor_tipi: '', max_fiyat: '' };

function formatFiyat(sayi) {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(sayi);
}

// 2. LİSTELEME VE FİLTRE EKRANI
async function renderListe() {
    const icerikKutusu = document.getElementById('app-icerik');
    icerikKutusu.innerHTML = '<p style="padding: 20px; color: #64748b;">Araçlar yükleniyor...</p>';

    try {
        const params = new URLSearchParams();
        if (guncelFiltreler.marka) params.append('marka', guncelFiltreler.marka);
        if (guncelFiltreler.motor_tipi) params.append('motor_tipi', guncelFiltreler.motor_tipi);
        if (guncelFiltreler.max_fiyat) params.append('max_fiyat', guncelFiltreler.max_fiyat);

        const url = `${API_BASE_URL}/araclar${params.toString() ? '?' + params.toString() : ''}`;
        const res = await fetch(url);
        
        if (!res.ok) throw new Error('Veri çekilemedi');
        
        // SUNUCUDAN GELEN YANITI ALIYORUZ
        const gelenVeri = await res.json();
        
        // KRİTİK DÜZELTME: Veri "data" paketinin içindeyse paketi açıyoruz, yoksa doğrudan kullanıyoruz
        const gosterilecekAraclar = gelenVeri.data ? gelenVeri.data : gelenVeri;

        let html = `
            <div class="filtre-alani">
                <div class="filtre-grup">
                    <label>Marka</label>
                    <select id="filtre-marka">
                        <option value="">Tümü</option>
                        <option value="Renault" ${guncelFiltreler.marka === 'Renault' ? 'selected' : ''}>Renault</option>
                        <option value="Volkswagen" ${guncelFiltreler.marka === 'Volkswagen' ? 'selected' : ''}>Volkswagen</option>
                        <option value="Fiat" ${guncelFiltreler.marka === 'Fiat' ? 'selected' : ''}>Fiat</option>
                        <option value="Toyota" ${guncelFiltreler.marka === 'Toyota' ? 'selected' : ''}>Toyota</option>
                        <option value="Hyundai" ${guncelFiltreler.marka === 'Hyundai' ? 'selected' : ''}>Hyundai</option>
                    </select>
                </div>
                
                <div class="filtre-grup">
                    <label>Motor Tipi</label>
                    <select id="filtre-motor">
                        <option value="">Tümü</option>
                        <option value="Benzin" ${guncelFiltreler.motor_tipi === 'Benzin' ? 'selected' : ''}>Benzin</option>
                        <option value="Dizel" ${guncelFiltreler.motor_tipi === 'Dizel' ? 'selected' : ''}>Dizel</option>
                        <option value="Hibrit" ${guncelFiltreler.motor_tipi === 'Hibrit' ? 'selected' : ''}>Hibrit</option>
                        <option value="Elektrik" ${guncelFiltreler.motor_tipi === 'Elektrik' ? 'selected' : ''}>Elektrik</option>
                    </select>
                </div>
                
                <div class="filtre-grup">
                    <label>Maksimum Fiyat (₺)</label>
                    <input type="number" id="filtre-fiyat" placeholder="Örn: 1500000" value="${guncelFiltreler.max_fiyat}">
                </div>
                
                <div class="filtre-butonlar">
                    <button class="btn-filtrele" onclick="filtreUygula()">Filtrele</button>
                    <button class="btn-temizle" onclick="filtreTemizle()">Temizle</button>
                </div>
            </div>

            <h2 style="margin-bottom: 20px;">Satıştaki Araçlar (${gosterilecekAraclar.length} İlan)</h2>
            <div class="arac-grid">
        `;

        if (gosterilecekAraclar.length === 0) {
            html += `<p style="grid-column: 1 / -1; color: #64748b;">Arama kriterlerinize uygun araç bulunamadı.</p>`;
        } else {
            gosterilecekAraclar.forEach(arac => {
                html += `
                    <div class="arac-karti" onclick="location.hash='#detay/${arac.id}'">
                        <img src="${arac.resim_url}" alt="${arac.marka} ${arac.model}">
                        <div class="arac-bilgi">
                            <div class="arac-baslik">${arac.marka} ${arac.model}</div>
                            <div class="arac-tipi">${arac.arac_tipi} • ${arac.motor_tipi}</div>
                            <div class="arac-fiyat">${formatFiyat(arac.fiyat)}</div>
                        </div>
                    </div>
                `;
            });
        }

        html += `</div>`;
        icerikKutusu.innerHTML = html;

    } catch (hata) {
        console.error("Hata:", hata);
        icerikKutusu.innerHTML = `
            <div style="padding: 20px; color: #dc2626;">
                <h3>Sunucuya Bağlanılamadı!</h3>
                <p>Flask backend servisinizin açık (http://127.0.0.1:5000) olduğundan emin olun.</p>
            </div>
        `;
    }
}

// 3. FİLTRELEME İŞLEMLERİ
function filtreUygula() {
    guncelFiltreler.marka = document.getElementById('filtre-marka').value;
    guncelFiltreler.motor_tipi = document.getElementById('filtre-motor').value;
    guncelFiltreler.max_fiyat = document.getElementById('filtre-fiyat').value;
    renderListe();
}

function filtreTemizle() {
    guncelFiltreler = { marka: '', motor_tipi: '', max_fiyat: '' };
    renderListe();
}

// 4. DETAY EKRANI
async function renderDetay(aracId) {
    const icerikKutusu = document.getElementById('app-icerik');
    icerikKutusu.innerHTML = '<p style="padding: 20px; color: #64748b;">Araç detayları getiriliyor...</p>';

    try {
        const res = await fetch(`${API_BASE_URL}/araclar/${aracId}`);
        if (!res.ok) throw new Error('Araç bulunamadı');
        
        const gelenVeri = await res.json();
        
        // Detay endpoint'i de 'data' objesi dönerse diye aynı önlemi buraya da ekledik
        const arac = gelenVeri.data ? gelenVeri.data : gelenVeri;

        icerikKutusu.innerHTML = `
            <a href="#liste" class="geri-butonu">← İlanlara Dön</a>
            <div class="detay-kapsayici">
                <img src="${arac.resim_url}" alt="${arac.marka}" class="detay-resim">
                <div class="detay-bilgi">
                    <h2 style="font-size: 2rem; color: #0f172a; margin-bottom: 10px;">${arac.marka} ${arac.model}</h2>
                    <h3 style="color: #059669; font-size: 1.8rem; margin-bottom: 20px;">${formatFiyat(arac.fiyat)}</h3>
                    
                    <ul class="detay-ozellik-listesi">
                        <li><span class="ozellik-baslik">Araç Tipi</span> <span>${arac.arac_tipi}</span></li>
                        <li><span class="ozellik-baslik">Motor Tipi</span> <span>${arac.motor_tipi}</span></li>
                        <li><span class="ozellik-baslik">Kasko Durumu</span> <span>${arac.kasko_bilgisi}</span></li>
                        <li><span class="ozellik-baslik">Sigorta Durumu</span> <span>${arac.sigorta_bilgisi}</span></li>
                        <li><span class="ozellik-baslik">Kredi İmkânı</span> <span>${arac.kredi_imkani ? '✅ Uygun' : '❌ Uygun Değil'}</span></li>
                    </ul>
                </div>
            </div>
        `;
    } catch (hata) {
        console.error("Detay Hatası:", hata);
        icerikKutusu.innerHTML = '<h2>Araç bulunamadı veya sunucu hatası.</h2><a href="#liste" class="geri-butonu">← Listeye Dön</a>';
    }
}

// 5. YÖNLENDİRME (ROUTER) KONTROLÜ
function yonlendir() {
    const hash = window.location.hash;
    
    if (hash === '' || hash === '#liste') {
        renderListe();
    } else if (hash.startsWith('#detay/')) {
        const id = hash.split('/')[1];
        renderDetay(id);
    } else {
        document.getElementById('app-icerik').innerHTML = '<h2>404 - Sayfa Bulunamadı</h2><a href="#liste" class="geri-butonu">Ana Sayfa</a>';
    }
}

window.addEventListener('hashchange', yonlendir);
window.addEventListener('DOMContentLoaded', yonlendir);