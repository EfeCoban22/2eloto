BEGIN;

INSERT INTO "2eloto".arac (marka, model, arac_tipi, motor_tipi, fiyat, resim_url, kasko_bilgisi, sigorta_bilgisi, kredi_imkani, status) VALUES
-- Renault (5 Araç)
('Renault', 'Clio 1.0 TCe', 'Hatchback', 'Benzin', 850000.00, 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800', 'Genişletilmiş Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Renault', 'Megane Sedan 1.3 TCe', 'Sedan', 'Benzin', 1150000.00, 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800', 'Kasko Yok', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Renault', 'Captur 1.3 TCe Mild Hybrid', 'SUV', 'Hibrit', 1320000.00, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'Tam Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Renault', 'Austral 1.2 E-Tech', 'SUV', 'Hibrit', 1850000.00, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', 'Full Kasko Var', 'Zorunlu Trafik Sigortası Var', FALSE, TRUE),
('Renault', 'Zoe R135', 'Hatchback', 'Elektrik', 980000.00, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', 'Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),

-- Volkswagen (5 Araç)
('Volkswagen', 'Polo 1.0 TSI', 'Hatchback', 'Benzin', 920000.00, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', 'Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Volkswagen', 'Golf 1.5 eTSI', 'Hatchback', 'Hibrit', 1450000.00, 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800', 'Full Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Volkswagen', 'Passat 2.0 TDI', 'Sedan', 'Dizel', 1780000.00, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800', 'Kasko Yok', 'Zorunlu Trafik Sigortası Var', FALSE, TRUE),
('Volkswagen', 'Tiguan 1.5 TSI', 'SUV', 'Benzin', 1950000.00, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', 'Genişletilmiş Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Volkswagen', 'ID.4 Pro', 'SUV', 'Elektrik', 2200000.00, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', 'Full Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),

-- Fiat (5 Araç)
('Fiat', 'Egea Sedan 1.4 Fire', 'Sedan', 'Benzin', 650000.00, 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800', 'Kasko Yok', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Fiat', 'Egea Cross 1.5 Hybrid', 'Crossover', 'Hibrit', 950000.00, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Fiat', '500e La Prima', 'Hatchback', 'Elektrik', 1100000.00, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', 'Full Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Fiat', 'Panda 1.0 Hybrid', 'Hatchback', 'Hibrit', 680000.00, 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800', 'Kasko Yok', 'Zorunlu Trafik Sigortası Var', FALSE, TRUE),
('Fiat', 'Egea Hatchback 1.6 Multijet', 'Hatchback', 'Dizel', 820000.00, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', 'Genişletilmiş Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),

-- Toyota (5 Araç)
('Toyota', 'Corolla 1.5 Vision', 'Sedan', 'Benzin', 1050000.00, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800', 'Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Toyota', 'Corolla Hybrid 1.8 Dream', 'Sedan', 'Hibrit', 1380000.00, 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800', 'Full Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Toyota', 'Yaris Cross 1.5 Hybrid', 'SUV', 'Hibrit', 1290000.00, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', 'Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Toyota', 'C-HR 1.8 Hybrid Passion', 'SUV', 'Hibrit', 1520000.00, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', 'Full Kasko Var', 'Zorunlu Trafik Sigortası Var', FALSE, TRUE),
('Toyota', 'bZ4X Electric', 'SUV', 'Elektrik', 2350000.00, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', 'Full Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),

-- Hyundai (5 Araç)
('Hyundai', 'i20 1.4 MPI Style', 'Hatchback', 'Benzin', 780000.00, 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800', 'Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Hyundai', 'Elantra 1.6 D-CVVT', 'Sedan', 'Benzin', 1180000.00, 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800', 'Kasko Yok', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Hyundai', 'Tucson 1.6 T-GDI Elite', 'SUV', 'Benzin', 1750000.00, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', 'Full Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Hyundai', 'Kona 1.6 Hybrid', 'SUV', 'Hibrit', 1420000.00, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'Genişletilmiş Kasko Var', 'Zorunlu Trafik Sigortası Var', TRUE, TRUE),
('Hyundai', 'Ioniq 5 Standard Range', 'SUV', 'Elektrik', 1950000.00, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', 'Full Kasko Var', 'Zorunlu Trafik Sigortası Var', FALSE, TRUE);

COMMIT;