from flask import Flask, jsonify, request
from psycopg2.extras import RealDictCursor
from db import get_db_connection
from flask_cors import CORS # Frontend'den gelecek isteklere izin vermek için

app = Flask(__name__)
CORS(app) # Tüm rotalarda CORS'u aktif ediyoruz
# Standart Başarılı Yanıt Formatı
def success_response(data, status_code=200):
    return jsonify({
        "success": True,
        "data": data
    }), status_code

# Standart Hatalı Yanıt Formatı
def error_response(message, status_code=400):
    return jsonify({
        "success": False,
        "error": message
    }), status_code

# 404 - Sayfa/Endpoint Bulunamadı Hatası
@app.errorhandler(404)
def not_found_error(e):
    return error_response("İstediğiniz kaynak veya sayfa bulunamadı.", 404)

# 500 - Sunucu Çökmesi / Veritabanı Hatası
@app.errorhandler(Exception)
def handle_exception(e):
    # Gerçek projelerde 'e' (hata detayı) loglanır, kullanıcıya sadece genel mesaj gösterilir
    return error_response(f"Sunucu tarafında bir hata oluştu. Detay: {str(e)}", 500)

# 1. Araç Listeleme ve Çoklu Filtreleme Endpoint'i
@app.route('/api/araclar', methods=['GET'])
def get_araclar():
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            # Temel sorgumuz (sadece aktif araçları getirir)
            sorgu = """
                SELECT id, marka, model, arac_tipi, motor_tipi, fiyat, resim_url 
                FROM "2eloto".arac 
                WHERE status = %s
            """
            # Parametreleri bir liste içinde tutuyoruz
            parametreler = [True]

            # URL'den gelen filtre parametrelerini yakalıyoruz
            marka = request.args.get('marka')
            motor_tipi = request.args.get('motor_tipi')
            min_fiyat = request.args.get('min_fiyat')
            max_fiyat = request.args.get('max_fiyat')

            # Dinamik Sorgu Mantığı: 
            # Kullanıcı hangi filtreyi gönderdiyse, temel sorgunun sonuna o şartı 
            # ekliyor ve değerini parametre listesine güvenli bir şekilde itiyoruz.
            if marka:
                sorgu += " AND marka ILIKE %s" # ILIKE büyük/küçük harf duyarsız arar
                parametreler.append(f"%{marka}%")
            
            if motor_tipi:
                sorgu += " AND motor_tipi = %s"
                parametreler.append(motor_tipi)
                
            if min_fiyat:
                sorgu += " AND fiyat >= %s"
                parametreler.append(min_fiyat)
                
            if max_fiyat:
                sorgu += " AND fiyat <= %s"
                parametreler.append(max_fiyat)

            # Oluşan dinamik sorguyu ve içini dolduracak parametreleri çalıştırıyoruz
            cur.execute(sorgu, tuple(parametreler))
            araclar = cur.fetchall()
            
            return success_response(araclar)
            
    finally:
        conn.close()

# 2. Araç Detay Endpoint'i
@app.route('/api/araclar/<int:id>', methods=['GET'])
def get_arac_detay(id):
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            # Sadece tek bir aracı id'sine göre bulmak için
            sorgu = """
                SELECT id, marka, model, arac_tipi, motor_tipi, fiyat, 
                       resim_url, kasko_bilgisi, sigorta_bilgisi, kredi_imkani, status, created_at
                FROM "2eloto".arac 
                WHERE id = %s AND status = %s
            """
            
            cur.execute(sorgu, (id, True))
            arac = cur.fetchone() # Fetchone: Sadece tek bir satır (kayıt) döndürür
            
            # Eğer gönderilen ID'ye ait bir araç yoksa mantıksal hata döndürüyoruz
# Eğer araç bulunamazsa standart hata dön
            if arac is None:
                # ESKİ HALİ: return jsonify({"error": "Araç bulunamadı"}), 404
                # YENİ HALİ:
                return error_response("Belirtilen ID'ye ait araç bulunamadı.", 404)
                
            # Araç bulunduysa standart başarı dön
            # ESKİ HALİ: return jsonify(arac), 200
            # YENİ HALİ:
            return success_response(arac)
            
    finally:
        conn.close()

if __name__ == '__main__':
    app.run(debug=True, port=5000)