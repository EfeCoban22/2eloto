// 1. MOCK VERİ VE FİLTRE HAFIZASI
const mockAraclar = [
    { id: 1, marka: 'Renault', model: 'Clio 1.0 TCe', arac_tipi: 'Hatchback', motor_tipi: 'Benzin', fiyat: 850000, resim_url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800', kasko_bilgisi: 'Genişletilmiş Kasko Var', sigorta_bilgisi: 'Zorunlu Trafik Sigortası Var', kredi_imkani: true },
    { id: 2, marka: 'Renault', model: 'Megane Sedan 1.3 TCe', arac_tipi: 'Sedan', motor_tipi: 'Benzin', fiyat: 1150000, resim_url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800', kasko_bilgisi: 'Kasko Yok', sigorta_bilgisi: 'Zorunlu Trafik Sigortası Var', kredi_imkani: true },
    { id: 3, marka: 'Volkswagen', model: 'Golf 1.5 eTSI', arac_tipi: 'Hatchback', motor_tipi: 'Hibrit', fiyat: 1450000, resim_url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800', kasko_bilgisi: 'Full Kasko Var', sigorta_bilgisi: 'Zorunlu Trafik Sigortası Var', kredi_imkani: true },
    { id: 4, marka: 'Volkswagen', model: 'Passat 2.0 TDI', arac_tipi: 'Sedan', motor_tipi: 'Dizel', fiyat: 1780000, resim_url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800', kasko_bilgisi: 'Kasko Yok', sigorta_bilgisi: 'Zorunlu Trafik Sigortası Var', kredi_imkani: false },
    { id: 5, marka: 'Fiat', model: '500e La Prima', arac_tipi: 'Hatchback', motor_tipi: 'Elektrik', fiyat: 1100000, resim_url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', kasko_bilgisi: 'Full Kasko Var', sigorta_bilgisi: 'Zorunlu Trafik Sigortası Var', kredi_imkani: true }
];

let guncelFiltreler = { marka: '', motor_tipi: '', max_fiyat: '' };

function formatFiyat(sayi) {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(sayi);
}

// 2. LİSTELEME VE FİLTRE EKRANI
function renderListe(gosterilecekAraclar = mockAraclar) {
    const icerikKutusu = document.getElementById('app-icerik');
    
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
}

// 3. FİLTRELEME ALGORİTMALARI
function filtreUygula() {
    guncelFiltreler.marka = document.getElementById('filtre-marka').value;
    guncelFiltreler.motor_tipi = document.getElementById('filtre-motor').value;
    guncelFiltreler.max_fiyat = document.getElementById('filtre-fiyat').value;

    const filtrelenmis = mockAraclar.filter(arac => {
        if (guncelFiltreler.marka !== '' && arac.marka !== guncelFiltreler.marka) return false;
        if (guncelFiltreler.motor_tipi !== '' && arac.motor_tipi !== guncelFiltreler.motor_tipi) return false;
        if (guncelFiltreler.max_fiyat !== '' && arac.fiyat > parseFloat(guncelFiltreler.max_fiyat)) return false;
        return true; 
    });

    renderListe(filtrelenmis);
}

function filtreTemizle() {
    guncelFiltreler = { marka: '', motor_tipi: '', max_fiyat: '' };
    renderListe(mockAraclar);
}

// 4. DETAY EKRANI
function renderDetay(aracId) {
    const icerikKutusu = document.getElementById('app-icerik');
    const arac = mockAraclar.find(a => a.id == aracId);

    if (!arac) {
        icerikKutusu.innerHTML = '<h2>Araç bulunamadı.</h2><a href="#liste" class="geri-butonu">← Listeye Dön</a>';
        return;
    }

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